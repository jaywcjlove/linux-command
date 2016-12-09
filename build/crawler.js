var request = require('superagent');
var cheerio = require('cheerio');
var toMarkdown = require('to-markdown');
var path = require('path');
var fs = require('fs');


var param = process.argv.slice(2);

var from_path = param[0];
var to_path = param[1];

if(!from_path) return console.error("请输入请求参数！");
if(!to_path) return console.error("请输入写入目标目录！");

CreatMarkdown(from_path,to_path)

function CreatMarkdown(from_path,to_path){

    var new_to_path = path.join(path.dirname(__dirname),to_path)
    if(exists(new_to_path)) return console.log(" → error: 目录存在 ",to_path,'\n')

    new_to_path = path.dirname(new_to_path)
    mkdirsSync(new_to_path,0777,function(){

        request.get(from_path).end(function(err, res){
            // console.log("to_path::",to_path)
            var md_str = res.text

            md_str = md_str.replace(/<pre>/gi,'```\n')
            md_str = md_str.replace(/<\/pre>/gi,'\n```')
            md_str = md_str.replace(/<span.*?>/gi,'')
            md_str = md_str.replace(/<\/span>/gi,'')
            md_str = md_str.replace(/\[[^\]]*\]\(.*?\)/g,function(str){
                str.replace(/\[(.*?)\]/,'');
                return RegExp.$1;
            })

            fs.writeFileSync(to_path, toMarkdown(md_str).toString() ,'utf-8');
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