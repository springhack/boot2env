/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-04-12 23:44:54
        Filename: src/client/main.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader'

import Route from './route.js';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
      document.getElementById('app')
    )
};

if (process.env.NODE_ENV !== 'development')
{
    render(Route);
    if (module.hot)
        module.hot.accept('./route.js', () => render(Route));
} else
    ReactDOM.render(<Route />, document.getElementById('app'));
