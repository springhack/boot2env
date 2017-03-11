/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-03-11 21:35:29
        Filename: index.js
        Description: Created by SpringHack using vim automatically.
**/
#!/usr/bin/env node

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
    .option('-s, --ssr', 'SSR enable: default value is false')
    .parse(process.argv);

console.log('Starting job ...');

if (tool.type && tool.file)
{
    let ret;
    switch (tool.type)
    {
        case 'project':
        case 'p':
            if (tool.ssr)
                AppPath = path.resolve(__dirname, 'react_server');
            else
                AppPath = path.resolve(__dirname, 'react_client');
            ret = child_process.execSync('cp -rvf ' + AppPath + ' ' + path.resolve(tool.file));
            ret = child_process.execSync('cp -rvf ' + path.resolve(AppPath, '.npmignore') + ' ' + path.resolve(tool.file, '.gitignore'));
            console.log(ret.toString('utf-8'));
        break;
        case 'component':
        case 'c':
            AppPath = path.resolve(__dirname, 'react_server/src/common/components/App.js');
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
