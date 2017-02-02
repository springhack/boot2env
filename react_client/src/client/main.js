/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-02 19:38:31
        Filename: src/client/main.js
        Description: Created by SpringHack using vim automatically.
**/
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Config from './config/Config.js';
import App from './jsx/App.js';

import './less/App.less';

ReactDOM.render(<App />, document.getElementById('app'));
