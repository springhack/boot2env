/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-03-11 15:46:51
        Filename: src/client/main.js
        Description: Created by SpringHack using vim automatically.
**/
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, HashRouter} from 'react-router-dom';

import Config from './config/Config.js';
import App from './jsx/App.js';

import './less/App.less';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact strict path='/' component={App} />
        </Switch>
    </HashRouter>
, document.getElementById('app'));
