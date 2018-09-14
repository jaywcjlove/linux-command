var exec = require('child_process').exec;
var fs = require('fs');
var ejs = require('ejs');
var path = require('path');
var marked = require('marked');
var watch = require('watch');
var stylus = require('stylus')
var highlight = require('highlight.js')
var UglifyJS = require("uglify-js");
var renderer = new marked.Renderer();
var color = require('colors-cli/safe');
var error = color.red.bold;
var warn = color.yellow;
var notice = color.blue;
var success = color.green;

// console.log("该行代码所在的目录::",__dirname);
// console.log("当前运行的的根目录::",path.dirname(__dirname));
// console.log("当前目录名字::",path.basename(process.cwd()));
// console.log("当前目录::",process.cwd());

renderer.heading = function (text, level) {
    if(/[\u4E00-\u9FA5]/i.test(text)){
        return '<h' + level + ' id="'+text.toLowerCase()+'">'+text+'</h' + level + '>';
    }else{
        var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
        return '<h' + level + ' id="'+escapedText+'">'+text+'</h' + level + '>';
    }
}

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code, lang, callback) {
    lang = lang?lang:"bash";
    return  callback('',highlight.highlight(lang,code).value);
  }
  // highlight: function (code, lang, callback) {
  //   if(lang){
  //     return  highlight.highlight(lang,code).value;
  //     // return  callback('',highlight.highlight(lang,code).value);
  //   }else{
  //     return highlight.highlightAuto(code).value;
  //     // return  callback('',highlight.highlightAuto(code).value);
  //   }
  // }
});

// 根目录
// var path_root = path.dirname(__dirname);
var path_root = process.cwd();


// 删除文件夹
exec('rm -rf .deploy');

// .deploy
// 当前项目根目录
// 生成 项目所需的文件
CreateDatajs('./.deploy/js/dt.js',function(dt_path,arr){


    // 拷贝 favicon.ico 文件 start
    var filetopath = path.join(process.cwd(),'/template/img/favicon.ico');
    var topath = '.deploy/img/favicon.ico'

    mkdirsSync(path.join(process.cwd(),'.deploy/img/'));
    // 创建读取流
    readable = fs.createReadStream( filetopath );
    // 创建写入流
    writable = fs.createWriteStream(topath);   
    // 通过管道来传输流
    readable.pipe( writable);
    console.log(success("  → ")+topath + '');
    // 拷贝 favicon.ico 文件 end


    CreateJS('/template/js/index.js','/.deploy/js/index.js')

    CreateStyl('/template/styl/index.styl','/.deploy/css/index.css')

    // 首页生成
    ReadTmpToHTML('/template/index.ejs','/.deploy/index.html',null,{
      'p':'/index.html',
      'n':'Linux命令搜索引擎',
      'd':'最专业的Linux命令大全，内容包含Linux命令手册、详解、学习，值得收藏的Linux命令速查手册。',
      'command_length':arr.length
    });
    ReadTmpToHTML('/template/list.ejs','/.deploy/list.html',null,{
      p:'/list.html',
      n:'搜索',
      d: '最专业的Linux命令大全，命令搜索引擎，内容包含Linux命令手册、详解、学习，值得收藏的Linux命令速查手册。',
      command_length: arr.length
    });

    ReadTmpToHTML('/template/hot.ejs','/.deploy/hot.html',null,{
        p:'/hot.html',
        n:'搜索',
        d:'最专业的Linux命令大全，命令搜索引擎，内容包含Linux命令手册、详解、学习，值得收藏的Linux命令速查手册。',
        arr: arr,
        command_length: arr.length
    });
    // 文章批量生成
    arr.forEach(function(itm,idx){
        var ejstpm = path.join('/template/',itm.p);
        var md_path = path.join('/command',itm.p);
        var dep = path.join('/.deploy/c',itm.p);
        itm.command_length = arr.length;
        ReadTmpToHTML('/template/details.ejs', dep+'.html' ,md_path+'.md', itm ,arr)
    });

    console.log(success("  → "),arr.length)

})

function copy(src, dst) {
  fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}


// // 监听实时编译
// watch.watchTree(path.join(path.dirname(__dirname),'/'), function (f, curr, prev) {
//   if (typeof f == "object" && prev === null && curr === null) {
//     console.log(success("  → :watching ") + '/template/');
//     // Finished walking the tree
//   } else if (prev === null) {

//     // f is a new file
//   } else if (curr.nlink === 0) {
//     // f was removed
//   } else {
    
//     if(/\.styl$/.test(f)){
//       CreateStyl('/template/styl/index.styl','/.deploy/css/index.css')
//     }else if(/\.js$/.test(f)){

//       CreateJS('/template/js/index.js','/.deploy/js/index.js')
    
//     }else if(/\.ejs$/.test(f)){
//       // 首页生成
//       ReadTmpToHTML('/template/index.ejs','/.deploy/index.html');
//       ReadTmpToHTML('/template/list.ejs','/.deploy/list.html');
    
//     }else if(/\.md$/.test(f)){
//       var mdp = f.replace(path_root,'');
//       var dep = path.join('/.deploy/',mdp);
//       ReadTmpToHTML('/template/details.ejs',dep.replace('.md','.html'),mdp);
//     }
//   }
// })


function CreateJS(from_path,to_path){

  // 生成到指定目录
  var new_to_path = path.join(path.dirname(__dirname),to_path);
  // 循环创建目录
  mkdirsSync(path.dirname(new_to_path));
  var js_code = UglifyJS.minify(path.join(path_root,from_path), { mangle: { toplevel: true } });
  fs.writeFileSync(new_to_path, js_code.code);
  console.log(success("  → ")+to_path + '');

}

/**
 * [ReadTmpToHTML ejs 模板转换成HTML]
 * @param {[type]} from_path [模版来源地址]
 * @param {[type]} to_path   [生成到指定的位置]
 * @param {[type]} md_path   [Markdown的路径] // 给md地址就生产详情页面
 * @param {[type]} des_json   [页面信息 json 格式]
 * @param {[type]} arr        []
 */
function ReadTmpToHTML(from_path,to_path,md_path,des_json, total_pages){
    var tmp_path = path.join(path.dirname(__dirname),from_path);
    if(!exists(tmp_path))  return console.log("\n  → error: 模板文件 "+tmp_path+" 不存在")
    var tmp_str  = fs.readFileSync(tmp_path);
    tmp_str = tmp_str.toString();

    var relative_path = '';
    var current_path = to_path.replace(/^\/\.deploy/,'');
    if(md_path){
      //CSS/JS 引用相对地址
      relative_path = path.relative(md_path.toString(),'/');
      relative_path = relative_path.replace(/\.\.$/,'');
    }
    // 生成 HTML
    var html = ejs.render(tmp_str,{
        filename: tmp_path,
        relative_path:relative_path, // 当前文件相对于根目录的相对路径
        md_path:md_path?md_path:'',  // markdown 路径
        current_path:current_path,   // 当前 html 路径
        describe:des_json?des_json:{},   // 当前 md 的描述
    });
    // 生成到指定目录
    var new_to_path = path.join(path.dirname(__dirname),to_path);
    // 循环创建目录
    !exists(path.dirname(new_to_path)) && mkdirsSync(path.dirname(new_to_path));
    
    if(md_path){
        var new_md_path =  path.join(path.dirname(__dirname),md_path);
        var README_str = fs.readFileSync(new_md_path);
        marked(README_str.toString(),function(err,md_html){
            if (err) return console.log(error('  → '+md_path+" 转换成HTML失败!"));

            html = html.split('{{content}}')
            html.splice(1, 0, md_html);
            html = html.join('')
            // html = html.replace('{{content}}',md_html);
            fs.writeFileSync(new_to_path,html);
            console.log(success("  → ")+to_path + '');
        })
    }else{
        html = html.toString();
        fs.writeFileSync(new_to_path, html.replace(/\n/g,''));
        console.log(success("  → ")+to_path + '');
    }
}




/**
 * [CreateStyl 生成CSS]
 * @param {[type]} styl_path [description]
 * @param {[type]} css_path  [description]
 */
function CreateStyl(styl_path,css_path){
    var new_css_path = path.join(path.dirname(__dirname),css_path);
    styl_path = path.dirname(__dirname) + styl_path;
    // var paths = [
    //     path.dirname(__dirname) , path.dirname(__dirname) + '/'
    // ];
    var styl_str = fs.readFileSync(styl_path, 'utf8');
    stylus(styl_str.toString())
      .set('filename', styl_path )
      .set('compress', true)
      .render(function(err, css){
        if (err) throw err;
        // 循环创建目录
        mkdirsSync(path.dirname(new_css_path));
        fs.writeFileSync(new_css_path, css);
        // console.log(err,css);
        console.log(success("  → ")+styl_path + '');
      });
}

// 生成数据索引JS
function CreateDatajs(dt_path,callback){
    // 获取 markdown文件所在的目录
    var path_md = path.join(path.dirname(__dirname),'command');
    var path_dist = path.join(path.dirname(__dirname),'dist');
    if(!exists(path_md)) return console.log("\n  → error: 文件夹 "+path_md+" 不存在 \n ")
    // 获取 markdown 目录的集合
    var path_arr = readMDSync(path_md);
    path_arr = sortLength(path_arr);
    var indexes = [];

    var command_data={}
    path_arr.forEach(function(md_path,i){
        var json = {}
        var con = fs.readFileSync(md_path);
        var str = con.toString();
        var title = str.match(/[^===]+(?=[===])/g);

        title = title[0]?title[0].replace(/\n/g,''):title[0];
        title = title.replace(/\r/,'')
        // 命令名称
        json["n"] = title;
        // 命令路径
        json["p"] = md_path.replace(/\.md$/, '').replace(path_md, '').replace(/\\/g, '/');
        // 命令描述
        var des = str.match(/\n==={1,}([\s\S]*?)##/i);
        if (!des) {
            console.log('格式错误:', error(md_path));
        }
        des = des[1]?des[1].replace(/\n/g,''):des[1];
        des = des.replace(/\r/g,'')
        json["d"] = des;
        indexes.push(json)

        command_data[title] = json;
    })
    mkdirsSync(path.dirname(dt_path));

    console.log("path.dirname(__dirname)",path.dirname(__dirname))
    //生成数据文件
    fs.writeFile(dt_path, 'var linux_commands='+JSON.stringify(indexes) , 'utf8',function(err){
        console.log(success("\n  → ")+"生成数据成功！"+dt_path+" \n ");
        path_dist = path.join(path_dist,'data.json')
        fs.writeFile(path_dist, JSON.stringify(command_data) , 'utf8',function(err){
            console.log(success("\n  → ")+"生成数据成功！"+path_dist+" \n ");
            callback&&callback(dt_path,indexes);
        });

    });
}

// 按长度排序
function sortLength(arr){
  var compare = function (x, y) {//比较函数
    x = path.basename(x,'.md');
    y = path.basename(y,'.md');
    if (x.length < y.length) {
        return -1;
    } else if (x.length > y.length) {
        return 1;
    } else {
        return 0;
    }
  }
  return arr.sort(compare)
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

var fixture = path.join.bind(path, __dirname, 'template');

function cp(src, dest, cb) {
  // yield support
  if ('function' != typeof cb) return thunk;

  var complete = false;
  var read = fs.createReadStream(src);
  var write = fs.createWriteStream(dest);

  write.on('error', done);
  write.on('close', done);
  read.on('error', done);
  read.pipe(write);

  // done callback
  function done(err) {
    if (!complete) {
      complete = true;
      read.destroy();
      write.destroy();
      cb(err);
    }
  }

  // thunk-ified
  function thunk(done) {
    cp(src, dest, done);
  }
}

//返回 MD 所有路径的 Array
function readMDSync(filepath){
    if(!exists(filepath)) return [];
    var str = '',files = fs.readdirSync(filepath);
    for (var i = 0; i < files.length; i++) {
        var path_c = path.join(filepath,files[i]);
        if( isDir(path_c) ) {
            str += readMDSync(path_c) + ',';
        }
        else if(/\.(md)$/.test(files[i])) str += path_c + ','; 
    };
    str = str.replace(/^\*|\,*$/g,'');
    return str.split(',');
}
//写文件
function writeSync(filepath, content, callback) {
    mkdirsSync(path.dirname(filepath));
    return fs.writeFileSync(filepath, content, callback);
};

//写文件
function write(filepath, content) {
    return fs.writeFile(filepath, content);
};

//判断是不是目录
function isDir(_path){return exists(_path) && fs.statSync(_path).isDirectory();}

//检查指定路径的文件或者目录，是否存在
function exists(_path){return fs.existsSync(_path);}