/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-03-11 15:24:36
        Filename: src/server/express_middleware.js
        Description: Created by SpringHack using vim automatically.
* */
import compression from 'compression';
import bodyparser from 'body-parser';
import session from 'express-session';
import express from 'express';
import multer from 'multer';
import path from 'path';

const upload = multer();

export default (app) => {
  app.use(compression());
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true
    }
  }));
  app.use('/res', express.static(path.resolve(__dirname, '../dist/res')));

  app.post('/upload', upload.array(), (req, res, next) => {
    res.json(req.body);
  });
};
