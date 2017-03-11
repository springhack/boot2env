/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-03-11 15:39:07
        Filename: main.js
        Description: Created by SpringHack using vim automatically.
**/
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import Model from './model/Model.js';
import Routes from '../common/routes.js';
import Config from '../common/config/Config.js';

import './less/main.less';

window.Model || (window.Model = Model);

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            {Routes}
        </Switch>
    </BrowserRouter>
), document.getElementById('app'));
