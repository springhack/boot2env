/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-04-12 23:26:54
        Filename: routes.js
        Description: Created by SpringHack using vim automatically.
* */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { App } from './components';

export default (
  <Switch>
    <Route path='/' exact strict component={App} />
    <Route path='/app' exact strict component={App} />
  </Switch>
);
