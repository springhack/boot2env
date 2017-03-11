/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-03-11 15:38:50
        Filename: src/common/routes.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import {App} from './components';
import Config from './config/Config.js';

export default (
    <Switch>
        <Route path='/' exact strict component={App} />
        <Route path='/app' exact strict component={App} />
    </Switch>
);
