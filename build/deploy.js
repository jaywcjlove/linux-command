const ghpages = require('gh-pages');
const loading = require('loading-cli');
const path = require('path');
const fs = require('fs');
const color = require('colors-cli/toxic');

const deploy_path = path.join(process.cwd(), '.deploy');

if (fs.existsSync(deploy_path)) {
  const load = loading('  Pushing code!!')
  load.start();
  ghpages.publish(deploy_path, {
    repo: 'git@github.com:jaywcjlove/linux-command.git',
    branch: 'gh-pages',
    message: 'Linux command index, Compiler generation page ' + new Date()
  }, (err) => {
    if (err) return console.log(`  → Err: ${err.message}`);
    load.stop()
    console.log(`\n\n   Push success!!`.green);
  });
}
