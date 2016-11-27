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
    new_to_path = path.dirname(new_to_path)
    mkdirsSync(new_to_path,0777,function(){

        request.get(from_path).end(function(err, res){
            console.log("to_path::",to_path)
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