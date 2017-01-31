/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-01 02:05:27
        Filename: routes.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {IndexRoute, Router, Route} from 'react-router';
import {
    App
} from './components';
import Config from './config/Config.js';

export default (
    <Route path='/'>
        <IndexRoute component={App} />
    </Route>
);
