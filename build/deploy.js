var exec = require('child_process').exec;
var ghpages = require('gh-pages');
var loading =  require('loading-cli');
var path = require('path');
var color = require('colors-cli/safe');
var error = color.red.bold;
var warn = color.yellow;
var notice = color.blue;
var success = color.green;

var deploy_path = path.join(process.cwd(), '.deploy');

if(fs.existsSync(deploy_path)){
    var load = loading('  Pushing code!!')
    load.start();
    ghpages.publish(deploy_path,{ 
        repo: 'https://github.com/jaywcjlove/linux-command.git',
        branch: 'gh-pages'
    }, function(err) { 
        if(err) return console.log(error('  → '+"ok!"+err));
        load.stop()
        console.log(success('\n\n   '+"Push success!!"));
        // 删除文件夹
        exec('rm -rf .deploy');
    });   
}
