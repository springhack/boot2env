/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-04-12 23:40:04
        Filename: src/client/route.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import Routes from '../common/routes.js';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                {Routes}
            </Switch>
        </BrowserRouter>
    );
};
