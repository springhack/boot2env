/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-03-11 15:00:16
        Filename: main
        Description: Created by SpringHack using vim automatically.
* */
import 'babel-polyfill';

import express from 'express';

import expressConfig from './express_config';
import expressMiddleware from './express_middleware';
import expressRouter from './express_router';

const app = express();

expressConfig(app);
expressMiddleware(app);
expressRouter(app);

app.listen(process.env.PORT || 3000);
