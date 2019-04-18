const path = require('path');
const ejs = require('ejs');
const FS = require('fs-extra');
const marked = require('marked');
const stylus = require('stylus');
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');
const UglifyJS = require("uglify-js");
const colors = require('colors-cli/toxic');

const renderer = new marked.Renderer();
renderer.heading = (text, level) => {
  if (/[\u4E00-\u9FA5]/i.test(text)) {
    return `<h${level} id="${text.toLowerCase()}">${text}</h${level}>`;
  } else {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    return `<h${level} id="${escapedText}">${text}</h${level}>`;
  }
}

marked.setOptions({
  renderer: renderer,
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
  highlight: (code, lang, callback) => {
    if (/(tex)$/.test(lang)) lang = 'latex';
    if (/(h)$/.test(lang)) lang = 'c';
    if (/(js)$/.test(lang)) lang = 'javascript';
    if (/(tsx)$/.test(lang)) lang = 'jsx';
    if (/(bat)$/.test(lang)) lang = 'batch';
    if (/(py)$/.test(lang)) lang = 'python';
    if (/(rb)$/.test(lang)) lang = 'ruby';
    if (/(gitconfig|editorconfig|gitmodules)$/.test(lang)) lang = 'ini';
    if (/(yml)$/.test(lang)) lang = 'yaml';
    if (/(styl)$/.test(lang)) lang = 'stylus';
    if (/(stylelintrc|postcssrc)$/.test(lang)) lang = 'json';
    if (/(sh|shell|bash|bats|cgi|command|fcgi|ksh|sh.in|tmux|tool|zsh|bash_history|bash_logout|bash_profile|bashrc|cshrc|login|profile|zlogin|zlogout|zprofile|zshenv|zshrc)$/.test(lang)) lang = 'bash';
    if (/(ps1|psm1)$/.test(lang)) lang = 'powershell';
    if (/^(html|htm|xml|ejs)/.test(lang)) lang = 'html';
    lang = lang ? lang : 'bash';
    loadLanguages([lang]);
    let html = code;
    if (Prism.languages[lang]) {
      html = Prism.highlight(code, Prism.languages[lang], lang);
      html.toString();
      html = html.replace(/\$/g, '&#36;')
    }
    return callback('', html);
  }
});

const deployDir = path.resolve(process.cwd(), '.deploy');
const faviconPath = path.resolve(process.cwd(), 'template', 'img', 'favicon.ico');
const rootIndexJSPath = path.resolve(process.cwd(), 'template', 'js', 'index.js');
const dataJsonPath = path.resolve(process.cwd(), 'dist', 'data.json');
const cssPath = path.resolve(deployDir, 'css', 'index.css');

let markdownIndexData = [];

mkdirs(deployDir)
  .then(dir => emptyDir(dir))
  .then(dir => {
    ensureDir(path.resolve(dir, 'img'));
    ensureDir(path.resolve(dir, 'js'));
    ensureDir(path.resolve(dir, 'css'));
    ensureDir(path.resolve(dir, 'c'));
  })
  .then(() => FS.copySync(faviconPath, path.resolve(deployDir, 'img', 'favicon.ico')))
  .then(() => FS.readFileSync(rootIndexJSPath))
  .then((data) => {
    FS.outputFileSync(path.resolve(deployDir, 'js', 'index.js'), UglifyJS.minify(data.toString()).code)
  })
  .then(dir => readMarkdownPaths(path.resolve(process.cwd(), 'command')))
  .then(dirs => createDataJSON(dirs))
  .then(data => {
    FS.outputFileSync(dataJsonPath, JSON.stringify(data.json));
    FS.outputFileSync(path.resolve(deployDir, 'js', 'dt.js'), `var linux_commands=${JSON.stringify(data.data)}`);
    markdownIndexData = data.data;
  })
  .then(() => createTmpToHTML(
    path.resolve(process.cwd(), 'template', 'index.ejs'),
    path.resolve(deployDir, 'index.html'),
    {
      p: '/index.html',
      n: 'Linux命令搜索引擎',
      d: '最专业的Linux命令大全，内容包含Linux命令手册、详解、学习，值得收藏的Linux命令速查手册。',
      command_length: markdownIndexData.length
    }
  ))
  .then(() => createTmpToHTML(
    path.resolve(process.cwd(), 'template', 'list.ejs'),
    path.resolve(deployDir, 'list.html'),
    {
      p: '/list.html',
      n: '搜索',
      d: '最专业的Linux命令大全，命令搜索引擎，内容包含Linux命令手册、详解、学习，值得收藏的Linux命令速查手册。',
      command_length: markdownIndexData.length
    }
  ))
  .then(() => createTmpToHTML(
    path.resolve(process.cwd(), 'template', 'hot.ejs'),
    path.resolve(deployDir, 'hot.html'),
    {
      p: '/hot.html',
      n: '搜索',
      d: '最专业的Linux命令大全，命令搜索引擎，内容包含Linux命令手册、详解、学习，值得收藏的Linux命令速查手册。',
      arr: markdownIndexData,
      command_length: markdownIndexData.length
    }
  ))
  .then(() => {
    markdownIndexData.forEach(async (item, idx) => {
      item.command_length = markdownIndexData.length;
      await createTmpToHTML(
        path.resolve(process.cwd(), 'template', 'details.ejs'),
        path.resolve(deployDir, 'c', `${item.n}.html`),
        item,
        path.resolve(process.cwd(), 'command'),
      );
    })
  })
  .then(() => {
    return createStylToCss(
      path.resolve(process.cwd(), 'template', 'styl', 'index.styl'),
      path.resolve(deployDir, 'css', 'index.css'),
    );
  })
  .then((css) => FS.outputFileSync(cssPath, css))
  .then(() => console.log(`  ${'→'.green} ${markdownIndexData.length}`))
  .catch((err) => {
    if (err && err.message) {
      console.log(`\n ERROR :> ${err.message.red_bt}\n`)
    }
  });

/**
 * Create a directory
 * @param {String} dir
 */
function mkdirs(dir) {
  return new Promise((resolve, reject) => {
    FS.ensureDir(dir, err => {
      err ? reject(err) : resolve(dir);
    })
  });
}

/**
 * Empty a directory
 * @param {String} dir
 */
function emptyDir(dir) {
  return new Promise((resolve, reject) => {
    FS.emptyDir(dir, err => {
      err ? reject(err) : resolve(dir);
    })
  });
}

/**
 * Ensures that the directory exists.
 * @param {String} dir
 */
function ensureDir(dir) {
  return new Promise((resolve, reject) => {
    try {
      FS.ensureDirSync(dir);
      resolve(dir);
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * [createStylToCss 生成CSS]
 * @param {[type]} stylPath stylus path
 * @param {[type]} cssPath css path
 */
function createStylToCss(stylPath) {
  return new Promise((resolve, reject) => {
    try {
      const stylStr = FS.readFileSync(stylPath, 'utf8');
      stylus(stylStr.toString())
        .set('filename', stylPath)
        .set('compress', true)
        .render((err, css) => {
          if (err) throw err;
          resolve(css);
        });
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * 
 * @param {String} fromPath ejs path
 * @param {String} toPath html path
 */
function createTmpToHTML(fromPath, toPath, desJson, mdPath) {
  return new Promise((resolve, reject) => {
    try {
      let relative_path = '';
      const current_path = toPath.replace(new RegExp(`${deployDir}`), '');
      const tmpStr = FS.readFileSync(fromPath);
      let mdPathName = '';
      if (mdPath) {
        // CSS/JS 引用相对地址
        relative_path = '../';
        mdPathName = `/command/${desJson.n}.md`;
      }
      // 生成 HTML
      let html = ejs.render(tmpStr.toString(), {
        filename: fromPath,
        relative_path, // 当前文件相对于根目录的相对路径
        md_path: mdPathName || '',  // markdown 路径
        current_path,   // 当前 html 路径
        describe: desJson ? desJson : {},   // 当前 md 的描述
      }, { filename: fromPath });

      if (mdPath) {
        const READMESTR = FS.readFileSync(path.resolve(mdPath, `${desJson.n}.md`));
        marked(READMESTR.toString(), (err, mdhtml) => {
          if (err) return reject(err);
          html = html.replace(/{{content}}/, mdhtml);
          FS.outputFileSync(toPath, html);
          console.log(`  ${'→'.green} ${toPath.replace(process.cwd(), '')}`);
          resolve(html);
        });
      } else {
        FS.outputFileSync(toPath, html);
        console.log(`  ${'→'.green} ${toPath.replace(process.cwd(), '')}`);
        resolve(html);
      }
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Ensures that the directory exists.
 * @param {String} pathArr
 */
function createDataJSON(pathArr) {
  return new Promise((resolve, reject) => {
    try {
      const commandData = {};
      const indexes = [];
      pathArr.forEach((mdPath, i) => {
        const json = {}
        const con = FS.readFileSync(mdPath);
        const str = con.toString();
        let title = str.match(/[^===]+(?=[===])/g);
        title = title[0] ? title[0].replace(/\n/g, '') : title[0];
        title = title.replace(/\r/, '')
        // 命令名称
        json["n"] = title;
        // 命令路径
        json["p"] = `/${path.basename(mdPath, '.md').replace(/\\/g, '/')}`;
        // 命令描述
        let des = str.match(/\n==={1,}([\s\S]*?)##/i);
        if (!des) {
          throw `格式错误: ${mdPath}`;
        }
        des = des[1] ? des[1].replace(/\n/g, '') : des[1];
        des = des.replace(/\r/g, '')
        json["d"] = des;
        indexes.push(json);
        commandData[title] = json;
      })
      resolve({
        json: commandData,
        data: indexes
      });
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * 返回 MD 所有路径的 Array
 * @param {String} filepath 
 */
function readMarkdownPaths(filepath) {
  return new Promise((resolve, reject) => {
    try {
      let pathAll = [];
      const files = FS.readdirSync(filepath);
      for (let i = 0; i < files.length; i++) {
        if (/\.md$/.test(files[i])) {
          pathAll.push(path.join(filepath, files[i]));
        }
      }
      resolve(pathAll);
    } catch (err) {
      reject(err);
    }
  });
}
