#!/usr/bin/env node

let path = require('path');
let tool = require('commander');
let child_process = require('child_process');

let AppPath;

tool
  .version('0.0.1')
  .usage('[options]')
  .option('-t, --type <value>', 'What to create: project, vimrc, zshrc, bashrc, tmux, clang-format')
  .option('-f, --file <value>', 'File to cerate')
  .parse(process.argv);

console.log('Starting job ...');

if (tool.type && tool.file) {
  let ret;
  switch (tool.type) {
    case 'project':
    case 'p':
      AppPath = path.resolve(__dirname, 'react_ts_client');
      ret = child_process.execSync('cp -rvf ' + AppPath + ' ' + path.resolve(tool.file));
      console.log(ret.toString('utf-8'));
      break;
    case 'vimrc':
    case 'v':
      AppPath = path.resolve(__dirname, 'configs/vimrc');
      ret = child_process.execSync('cp -rvf ' + AppPath + ' ' + path.resolve(tool.file));
      console.log(ret.toString('utf-8'));
      break;
    case 'zshrc':
    case 'z':
      AppPath = path.resolve(__dirname, 'configs/zshrc');
      ret = child_process.execSync('cp -rvf ' + AppPath + ' ' + path.resolve(tool.file));
      console.log(ret.toString('utf-8'));
      break;
    case 'bashrc':
    case 'b':
      AppPath = path.resolve(__dirname, 'configs/bashrc');
      ret = child_process.execSync('cp -rvf ' + AppPath + ' ' + path.resolve(tool.file));
      console.log(ret.toString('utf-8'));
      break;
    case 'tmux':
    case 't':
      AppPath = path.resolve(__dirname, 'configs/tmux');
      ret = child_process.execSync('cp -rvf ' + AppPath + ' ' + path.resolve(tool.file));
      console.log(ret.toString('utf-8'));
      break;
    case 'clang-format':
    case 'cf':
      AppPath = path.resolve(__dirname, 'configs/clang-format');
      ret = child_process.execSync('cp -rvf ' + AppPath + ' ' + path.resolve(tool.file));
      console.log(ret.toString('utf-8'));
      break;
    default:
      console.error('No such type !');
      return;
  }
  console.log('Job finished !');
  return;
}

console.error('Error while process, check --help!');
