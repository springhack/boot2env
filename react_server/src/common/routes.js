/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-25 11:07:58
        Filename: src/common/routes.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {IndexRoute, Router, Route} from 'react-router';
import {
    App
} from './components';

export default (
    <Route path='/'>
        <IndexRoute component={App} />
    </Route>
);
