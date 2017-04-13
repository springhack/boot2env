/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-04-12 23:11:58
        Filename: route.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom';

import App from './jsx/App.js';

export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact strict path='/' component={App} />
            </Switch>
        </HashRouter>
    );
};
