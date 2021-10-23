import FS from 'fs-extra';
import path from 'path';
import stylus from 'stylus';
import * as ejs from 'ejs';
import UglifyJS from 'uglify-js';
import { create } from 'markdown-to-html-cli';
import _ from 'colors-cli/toxic.js';

const deployDir = path.resolve(process.cwd(), '.deploy');
const faviconPath = path.resolve(process.cwd(), 'template', 'img', 'favicon.ico');
const rootIndexJSPath = path.resolve(process.cwd(), 'template', 'js', 'index.js');
const dataJsonPath = path.resolve(process.cwd(), 'dist', 'data.json');
const dataJsonMinPath = path.resolve(process.cwd(), 'dist', 'data.min.json');
const cssPath = path.resolve(deployDir, 'css', 'index.css');

;(async () => {
  try {
    await FS.ensureDir(deployDir);
    await FS.emptyDir(deployDir);
    await FS.ensureDir(path.resolve(deployDir, 'img'));
    await FS.ensureDir(path.resolve(deployDir, 'js'));
    await FS.ensureDir(path.resolve(deployDir, 'css'));
    await FS.ensureDir(path.resolve(deployDir, 'c'));
    await FS.copySync(faviconPath, path.resolve(deployDir, 'img', 'favicon.ico'));
    const jsData = await FS.readFileSync(rootIndexJSPath);
    await FS.outputFile(path.resolve(deployDir, 'js', 'index.js'), UglifyJS.minify(jsData.toString()).code)
    const files = await readMarkdownPaths(path.resolve(process.cwd(), 'command'));
    const jsonData = await createDataJSON(files);
    await FS.outputFile(dataJsonPath, JSON.stringify(jsonData.json, null, 2));
    await FS.outputFile(dataJsonMinPath, JSON.stringify(jsonData.json));
    await FS.outputFile(path.resolve(deployDir, 'js', 'dt.js'), `var linux_commands=${JSON.stringify(jsonData.data)}`);

    const cssStr = await createStylToCss(
      path.resolve(process.cwd(), 'template', 'styl', 'index.styl'),
      path.resolve(deployDir, 'css', 'index.css'),
    );

    await FS.outputFileSync(cssPath, cssStr)
    console.log(`  ${'→'.green} ${jsonData.data.length}`)

    await createTmpToHTML(
      path.resolve(process.cwd(), 'template', 'index.ejs'),
      path.resolve(deployDir, 'index.html'),
      {
        p: '/index.html',
        n: 'Linux命令搜索引擎',
        d: '最专业的Linux命令大全，内容包含Linux命令手册、详解、学习，值得收藏的Linux命令速查手册。',
        command_length: jsonData.data.length
      }
    );

    await createTmpToHTML(
      path.resolve(process.cwd(), 'template', 'list.ejs'),
      path.resolve(deployDir, 'list.html'),
      {
        p: '/list.html',
        n: '搜索',
        d: '最专业的Linux命令大全，命令搜索引擎，内容包含Linux命令手册、详解、学习，值得收藏的Linux命令速查手册。',
        command_length: jsonData.data.length
      }
    );

    await createTmpToHTML(
      path.resolve(process.cwd(), 'template', 'hot.ejs'),
      path.resolve(deployDir, 'hot.html'),
      {
        p: '/hot.html',
        n: '搜索',
        d: '最专业的Linux命令大全，命令搜索引擎，内容包含Linux命令手册、详解、学习，值得收藏的Linux命令速查手册。',
        arr: jsonData.data,
        command_length: jsonData.data.length
      }
    );
    
    await Promise.all(jsonData.data.map(async (item, idx) => {
      item.command_length = jsonData.data.length;
      await createTmpToHTML(
        path.resolve(process.cwd(), 'template', 'details.ejs'),
        path.resolve(deployDir, 'c', `${item.n}.html`),
        item,
        path.resolve(process.cwd(), 'command'),
      );
    }));

  } catch (err) {
    if (err && err.message) {
      console.log(`\n ERROR :> ${err.message.red_bt}\n`)
    }
  }
})();

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
 * @param {String} fromPath ejs path
 * @param {String} toPath html path
 */
 function createTmpToHTML(fromPath, toPath, desJson, mdPath) {
  return new Promise(async (resolve, reject) => {
    try {
      const current_path = toPath.replace(new RegExp(`${deployDir}`), '');
      const tmpStr = await FS.readFile(fromPath);
      let mdPathName = '';
      let mdhtml = '';
      let relative_path = '';
      if (mdPath) {
        // CSS/JS 引用相对地址
        relative_path = '../';
        mdPathName = `/command/${desJson.n}.md`;
        const READMESTR = await FS.readFile(path.resolve(mdPath, `${desJson.n}.md`));
        mdhtml = await markdownToHTML(READMESTR.toString());
      }
      // 生成 HTML
      let html = ejs.render(tmpStr.toString(), {
        filename: fromPath,
        relative_path, // 当前文件相对于根目录的相对路径
        md_path: mdPathName || '',  // markdown 路径
        mdhtml: mdhtml || '',
        current_path,   // 当前 html 路径
        describe: desJson ? desJson : {},   // 当前 md 的描述
      }, {
        filename: fromPath
      });

      await FS.outputFile(toPath, html);
      console.log(`  ${'♻️  →'.green} ${path.relative(process.cwd(), toPath)}`);
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}

function markdownToHTML(str) {
  return create({ markdown: str, document: undefined });
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
