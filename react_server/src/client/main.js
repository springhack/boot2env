/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-25 11:06:48
        Filename: src/client/main.js
        Description: Created by SpringHack using vim automatically.
**/
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';

import Config from './config/Config.js';
import Model from './model/Model.js';
import routes from '../common/routes.js';

import './less/main.less';

window.Model || (window.Model = Model);

ReactDOM.render((
    <Router history={browserHistory}>
        {routes}
    </Router>
), document.getElementById('app'));
