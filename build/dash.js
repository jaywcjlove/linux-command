const fs = require('fs-extra');
const { resolve: pathResolve } = require('path');
const pkg = require('../package.json');
const sqlite3 = require('sqlite3');

const DATA_DIR = pathResolve(__dirname, '../assets/');
const INDEX_JSON_PATH = pathResolve(__dirname, '../dist/data.json');
const DETAIL_DIR = pathResolve(__dirname, '../.deploy/');
const CP_DIRS = [
  pathResolve(DETAIL_DIR, 'c'),
  pathResolve(DETAIL_DIR, 'css'),
  pathResolve(DETAIL_DIR, 'img'),
  pathResolve(DETAIL_DIR, 'js'),
];

const DOC_NAME = pkg.name;
const DOC_ROOT_DIR = pathResolve(__dirname, `../.deploy/${DOC_NAME}`);
const DOCSET_DIR = `${DOC_ROOT_DIR}.docset`;
const RESOURCES_DIR = `${DOCSET_DIR}/Contents/Resources/`;

const DB_PATH = `${DOCSET_DIR}/Contents/Resources/docSet.dsidx`;
const DIR_STRUCT = `${DOCSET_DIR}/Contents/Resources/Documents/`;

const PLIST = {
  dist: `${DOCSET_DIR}/Contents/Info.plist`,
  content: `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>DOC_NAME</string>
  <key>CFBundleName</key>
  <string>DOC_NAME</string>
  <key>DocSetPlatformFamily</key>
  <string>DOC_NAME</string>
  <key>isDashDocset</key>
  <true/>
</dict>
</plist>
  `,
};
const ICON = {
  dist: `${DOCSET_DIR}/icon.png`,
  src: `${DATA_DIR}/dash-icon.png`,
};

function createDatabase(apiList, dbPath) {
  const db = new sqlite3.Database(dbPath);

  db.serialize(() => {
    db.run('CREATE TABLE searchIndex(id INTEGER PRIMARY KEY, name TEXT, type TEXT, path TEXT);');
    db.run('CREATE UNIQUE INDEX anchor ON searchIndex (name,type,path);');

    let stmt = db.prepare('INSERT OR IGNORE INTO searchIndex(name, type, path) VALUES (?, ?, ?)');

    apiList.forEach(({ name, type, path }) => {
      stmt.run(name, type, path);
    });

    stmt.finalize();
  });

  db.close();
}

async function clean() {
  console.info('========= do clean =========');
  try {
    await fs.remove(DOCSET_DIR);
  } catch (e) {}
}

async function copyResource() {
  await fs.copy(ICON.src, ICON.dist);
  await fs.writeFile(PLIST.dist, PLIST.content.replace(/DOC_NAME/gi, DOC_NAME));

  for await (const dir of CP_DIRS) {
    await fs.copy(dir, pathResolve(DIR_STRUCT, dir.substr(dir.lastIndexOf('/') + 1)));
  }
}

async function getIndex() {
  let obj = await fs.readJSON(INDEX_JSON_PATH, { encoding: 'utf8' });

  return Object.keys(obj).map((key) => {
    return {
      name: obj[key].n,
      type: 'Guide',
      path: `./c${obj[key].p}.html`,
    };
  });
}

async function buildApi(dbPath) {
  let arr = await getIndex();
  await createDatabase(arr, dbPath);
}

async function build() {
  console.log(`mkdir -p ${RESOURCES_DIR}`);
  await clean();
  await fs.ensureDir(RESOURCES_DIR);

  console.log('build resources...');
  await copyResource();

  console.info('build documents');
  await buildApi(DB_PATH);
}

build()
  .then(() => {
    console.info(`file at ${DOCSET_DIR}`);
  })
  .catch((e) => {
    console.warn(e);
  });
