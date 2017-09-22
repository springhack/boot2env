/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-04-12 23:28:37
        Filename: express_router.js
        Description: Created by SpringHack using vim automatically.
* */
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import React from 'react';
import path from 'path';
import fs from 'fs';

/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Routes from './routes';
/* eslint-enable import/extensions */
/* eslint-enable import/no-unresolved */

const Template = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), { encoding: 'utf8' });

export default (app) => {
  app.use((req, res, next) => {
    const context = {};
    const html = renderToString(
      <StaticRouter location={req.url} context={context}>
        { Routes }
      </StaticRouter>
    );
    if (context.url) {
      res.writeHead(302, { Location: context.url });
      res.end();
    } else {
      res.write(Template.replace('Loading...', html));
      res.end();
    }
  });
};
