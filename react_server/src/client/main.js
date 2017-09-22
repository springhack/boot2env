/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-04-16 13:29:01
        Filename: react_server/src/client/main.js
        Description: Created by SpringHack using vim automatically.
* */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Route from './route';
import './less/App.less';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

if (process.env.NODE_ENV !== 'production') {
  render(Route);
  if (module.hot) {
    module.hot.accept('./route.js', () => {
      /* eslint-disable global-require */
      const newRoute = require('./route.js').default;
      /* eslint-enable global-require */
      render(newRoute);
    });
  }
} else {
  ReactDOM.render(<Route />, document.getElementById('app'));
}
