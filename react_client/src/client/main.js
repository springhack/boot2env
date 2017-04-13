/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-03-11 15:46:51
        Filename: src/client/main.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader'

import Config from './config/Config.js';
import Route from './route.js';


const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
      document.getElementById('app')
    )
};

render(Route);

if (module.hot)
    module.hot.accept('./route.js', () => render(Route));
