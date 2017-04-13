'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-03-11 15:24:36
        Filename: src/server/express_middleware.js
        Description: Created by SpringHack using vim automatically.
**/
var upload = (0, _multer2.default)();

var _default = function _default(app) {

    app.use((0, _compression2.default)());
    app.use(_bodyParser2.default.json());
    app.use(_bodyParser2.default.urlencoded({ extended: true }));
    app.use((0, _expressSession2.default)({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: true
        }
    }));
    app.use('/res', _express2.default.static(_path2.default.resolve(__dirname, '../dist/res')));

    app.post('/upload', upload.array(), function (req, res, next) {
        console.log(req.body);
        res.json(req.body);
    });
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(upload, 'upload', 'src/server/express_middleware.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/server/express_middleware.js');
}();

;