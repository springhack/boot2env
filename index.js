#!/usr/bin/env node --harmony

let fs = require('fs');
let path = require('path');
let tool = require('commander');
let child_process = require('child_process');

let AppPath;

tool
    .version('0.0.1')
    .usage('[options]')
    .option('-t, --type <value>', 'What to create: project, component, vimrc, bashrc')
    .option('-f, --file <value>', 'File to cerate')
    .parse(process.argv);

console.log('Starting job ...');

if (tool.type && tool.file)
{
    let ret;
    switch (tool.type)
    {
        case 'project':
        case 'p':
            AppPath = path.resolve(__dirname, 'templates');
            ret = child_process.execSync('cp -rvf ' + AppPath + ' ' + path.resolve(tool.file));
            console.log(ret.toString('utf-8'));
        break;
        case 'component':
        case 'c':
            AppPath = path.resolve(__dirname, 'templates/src/client/jsx/App.jsx');
            ret = child_process.execSync('cp -rvf ' + AppPath + ' ' + path.resolve(tool.file));
            console.log(ret.toString('utf-8'));
        break;
        case 'vimrc':
        case 'v':
            AppPath = path.resolve(__dirname, 'configs/vimrc');
            ret = child_process.execSync('cp -rvf ' + AppPath + ' ' + path.resolve(tool.file));
            console.log(ret.toString('utf-8'));
        break;
        case 'bashrc':
        case 'b':
            AppPath = path.resolve(__dirname, 'configs/bashrc');
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
