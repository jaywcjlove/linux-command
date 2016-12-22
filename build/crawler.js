var request = require('superagent');
var cheerio = require('cheerio');
var toMarkdown = require('to-markdown');
var path = require('path');
var process = require('process');
var fs = require('fs');
var color = require('colors-cli/safe');
var error = color.red.bold;
var warn = color.yellow;
var notice = color.blue;
var success = color.green;

var param = process.argv.slice(2);


// 需要爬的命令
// var arr = ["find"]; 
// var arr = []; 
var arr = []; 
// var arr = ["arch","axel","chsh","comm","compress","csplit","cut","dd","dig","dmesg","domainname","du","enable","fdisk","file","ftp","htpasswd","id","insmod","losetup","ls","lynx","mail","mkinitrd","netstat","nslookup","od","passwd","pgrep","ping","quota","restorecon","rmmod","screen","sed","semanage","smbclient","split","startx","sudo","tee","tftp","wall","wget","which","accept","apt-get","apt-key","apt-sortpkgs","aptitude","awk","clockdiff","cupsenable","dnf","dpkg-reconfigure","dpkg","expr","gcc","gdb","ldconfig","ldd","lpadmin","make","ngrep","nm","ntpdate","objdump","perl","php","protoize","pssh","pstack","readelf","reject","rsync","speedtest-cli","tempfile","test","vdfuse","xargs"]; 

// 还没有爬到的命令：--> ["bye","uucico","uucp","uupick","uuto","git","gitview","mattrib","mc","mcopy","mdel","mdir","mmove","mread","mren","mshowfat","mtoolstest","rhmask","tmpwatch","lndir","mcd","mdeltree","mdu","mlabel","mmd","mmount","mrd","mzip","rmt","cfdisk","ext2ed","fsck.ext2","fsck.minix","fsconf","mbadblocks","mformat","mkdosfs","mkfs.ext2","mkfs.minix","mkfs.msdos","mpartition","sfdisk","symlinks","apmd","aumix","eval","fbset","kbdconfig","liloconfig","minfo","mkkickstart","modinfo","mouseconfig","rdate","setconsole","setenv","setup","sndconfig","SVGAText Mode","timeconfig","adduser","fwhois","gitps","newgrp","procinfo","rwho","sliplogin","suspend","swatch","userconf","vlock","whois","mtype","rgrep","dip","getty","mingetty","ppp-off","smbd(samba daemon)","uulog","uustat","uux","dnsconf","efax","httpd","minicom","netconf","netconfig","pppstats","samba","setserial","shapecfg(shaper configuration)","smbd(samba daemon)","statserial(status ofserial port)","testparm(test parameter)","tty(teletypewriter)","uuname","wall(write all)","ytalk","smbclient(samba client)","pppsetup","dumpkeys","loadkeys","MAKEDEV","rdev","setleds","archive","ctlinnd","getlist","inncheck","mailconf","messages","metamail","mutt","nntpget","pine","slrn","X WINDOWS SYSTEM","reconfig","startx(start X Window)","Xconfigurator","XF86Setup"    ,"nc/netcat","locate/slocate","get_module"]
// 已经存在的命令：----> []
// 名字不对的命令：----> ["ar","locate","slocate","clock","resize","cu","nc"]
// 网站中没有的命令
var empty_command = [];  
// 已经爬过/存在的命令
var exists_command = []; 
// 名字不对的命令
var name_command = [];   
var arr_len = 0;

arr[arr_len]&&CreatMarkdownQuery(arr[arr_len]);


function CreatMarkdownQuery(query){
    var url = 'http://man.linuxde.net/'+query;
    var new_to_path = path.join(path.dirname(__dirname),'command/'+query+'.md')


    if(!arr[arr_len]){
        console.log('还没有爬到的命令：-->', JSON.stringify(empty_command) )
        console.log('已经存在的命令：---->', JSON.stringify(exists_command) )
        console.log('名字不对的命令：---->', JSON.stringify(name_command) )
        return;
    };

    ++arr_len;

    // 文件已经存在
    if(exists( new_to_path )) {
        exists_command.push(query)
        CreatMarkdownQuery(arr[arr_len]);
        return console.log(" → error:文件存在 ",new_to_path)   
    }

    request.get(url).end(function(err, res){

        if(arr[arr_len]){
            CreatMarkdownQuery(arr[arr_len]);  
        }
        // console.log("res.text:::--->",res.text)

        if(/命令还没有被录入！/.test(res.text)){
            empty_command.push(query)
            return console.log(" → error: 没有爬到数据，命令" + query +'不存在！')
        }
        var $ = cheerio.load(res.text);
        var description = $('title').text();
        description = description.replace(/(.*)命令用法详解：/,'')

        var title = $('.main h1.l');
        title = title.text();
        title = title.replace(/命令$/,'');


        if(query!==title){
            name_command.push(query)
            return console.log(" → error: 名字不对的命令 ",query)
        }

        if(!title){
            empty_command.push(query);
            return console.log(error(" → error: 命令" + query +'不存在！标题为空'))
        }
        var content = $('#content-index').remove()
        content = $('.main .post_bd').html();
        var md_str = toMarkdown(content);

        md_str = md_str.replace(/linuxde.net/g,'jsdig.com');
        md_str = md_str.replace(/linuxde/g,'jsdigname');
        md_str = md_str.replace(/\*\*(.*?)\*\*/g,' **$1** ');
        md_str = md_str.replace(/^\s\*\*(.*?)\*\*/g,'**$1**');
        md_str = title + '\n===\n'+description+'\n\n## 补充说明\n\n' + md_str;
        md_str = md_str.replace(/<pre>/gi,'```\n')
        md_str = md_str.replace(/<\/pre>/gi,'\n```')
        md_str = md_str.replace(/<span.*?>/gi,'')
        md_str = md_str.replace(/<\/span>/gi,'')
        md_str = md_str.replace(/\[[^\]]*\]\(.*?\)/g,function(str){
            str.replace(/\[(.*?)\]/,'');
            return RegExp.$1;
        })
        // console.log("md_str--->",md_str)
        md_str += '\n\n\n<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->'

        fs.writeFileSync(new_to_path, md_str ,'utf-8');
        console.log(success(" → OK!"),new_to_path)
    });
}



/**
 * 指定URL爬
 */


// var from_path = param[0];
// var to_path = param[1];
// if(!from_path) return console.error("请输入请求参数！");
// if(!to_path) return console.error("请输入写入目标目录！");
// CreatMarkdown(from_path,to_path)

function CreatMarkdown(from_path,to_path){

    var new_to_path = path.join(path.dirname(__dirname),to_path)
    if(exists(new_to_path)) return console.log(" → error: 目录存在 ",to_path,'\n')

    new_to_path = path.dirname(new_to_path)
    mkdirsSync(new_to_path,0777,function(){

        request.get(from_path).end(function(err, res){
            // console.log("to_path::",to_path)
            fs.writeFileSync(to_path, toMarkdown(res.text).toString() ,'utf-8');
            console.log(" → ",to_path)
        });

    });
}


// 同步循环创建所有目录 resolvePath
function mkdirsSync(dirpath, mode, callback) {
    if(fs.existsSync(dirpath)){
        callback&&callback(dirpath);
        return true;
    }else{
        if(mkdirsSync(path.dirname(dirpath), mode)){
            fs.mkdirSync(dirpath, mode, callback);
            callback&&callback(dirpath);
            return true;
        }else{
            callback&&callback(dirpath);
        }
    }
};


//检查指定路径的文件或者目录，是否存在
function exists(_path){return fs.existsSync(_path);}