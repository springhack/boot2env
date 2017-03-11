/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-03-11 15:29:00
        Filename: main.js
        Description: Created by SpringHack using vim automatically.
**/
import 'babel-polyfill';

import express from 'express';

import express_config from './express_config.js';
import express_middleware from './express_middleware.js';
import express_router from './express_router.js';

const app = express();

express_config(app);
express_middleware(app);
express_router(app);

app.listen(process.env.PORT || 3000);
