/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-03-11 15:41:02
        Filename: src/server/express_router.js
        Description: Created by SpringHack using vim automatically.
**/
import {Route, Switch, matchPath, StaticRouter} from 'react-router-dom';
import {renderToString} from 'react-dom/server';
import React from 'react';
import path from 'path';
import fs from 'fs';

import Routes from './routes.js';

const Template = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), {encoding : 'utf8'});

export default app => {

    app.use((req, res, next) => {
        const context = {};
        const html = renderToString(
            <StaticRouter location={req.url} context={context}>
                {Routes}
            </StaticRouter>
        );
        if (context.url)
        {
            res.writeHead(302, {Location: context.url});
            res.end()
        } else {
            res.write(Template.replace('Loading...', html))
            res.end();
        }
    });

};
