
const data = require('./data.json');

module.exports = function (query) {
  var commands = [];
  Object.keys(data).forEach(function (keyName) {
    if (keyName.toLowerCase().indexOf(query) > -1) {
      const cmd = data[keyName];
      commands.push({
        title: cmd.n,
        subtitle: cmd.d,
      });
    }
  });
  commands = commands.map(function (item) {
    item.len = item.title.length;
    return item;
  }).sort(function (a, b) {
    return a.len - b.len;
  }).map(function(item) {
    return { title: item.title, subtitle: item.subtitle, arg: item.title };
  }).slice(0, 8);
  if (commands.length === 0) {
    commands.push({
      title: "没有搜素到内容",
      subtitle: "请尝试其它关键字",
    });
  }

  const result = { items: commands };
  console.log(JSON.stringify(result));
}
