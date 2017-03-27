var alfy = require('alfy');

function isSreachIndexOF(oldstr,kw){
  var istrue = false;
  if(oldstr&&toString.call(oldstr) === '[object Array]'){
    for (var i = 0; i < oldstr.length; i++) {
      oldstr[i].toLowerCase()===kw.toLowerCase()?istrue=true:null;
    }
    return istrue;
  }
  if(!oldstr || !kw) return false;
  return oldstr.toLowerCase().indexOf(kw.toLowerCase()) > -1 ? true : false;
}

alfy.fetch('raw.githubusercontent.com/jaywcjlove/linux-command/master/dist/data.json').then(result => {
  var commands = [];
  var e = 0
  for(var a in result){
    ++e;
    result[a]['id'] = e;
    commands.push(result[a])
  }
  var i=0,
  page_size = commands.length,
  arrResult = [],
  query=alfy.input;
  if(commands&&commands.length&&toString.call(commands).indexOf('Array')>-1){
    var count = 0
    for (; i < page_size; i++) {
      if(isSreachIndexOF(commands[i].n,query)
       || isSreachIndexOF(commands[i].d,query) 
      ){
        if(count < page_size){
          arrResult.push(commands[i]);
          ++count;
        }
      }
    }
  }
  var items = [];
  for(var i = 0;i< arrResult.length;i++){
    items.push({
      title: arrResult[i].n,
      subtitle: arrResult[i].d,
      arg: arrResult[i].n
    })
  }

  if(items.length < 1){
    items.push({
      title: "没有搜素到内容",
      subtitle: "请尝试其它关键字",
    })
  }
  alfy.output(items);
});
// const items = alfy.inputMatches(commands, 'n').map(x => ({
//   title: x.n,
//   subtitle: x.d,
//   arg: x.id
// }));