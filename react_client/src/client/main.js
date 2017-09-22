/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-04-16 13:09:02
        Filename: main.js
        Description: Created by SpringHack using vim automatically.
* */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Route from './route';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

render(Route);

if (module.hot) {
  module.hot.accept('./route.js', () => {
    /* eslint-disable global-require */
    const newRoute = require('./route.js').default;
    /* eslint-enable global-require */
    render(newRoute);
  });
}
