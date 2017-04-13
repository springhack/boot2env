'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRouterDom = require('react-router-dom');

var _server = require('react-dom/server');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _routes = require('./routes.js');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-04-12 23:28:37
        Filename: express_router.js
        Description: Created by SpringHack using vim automatically.
**/
var Template = _fs2.default.readFileSync(_path2.default.resolve(__dirname, '../dist/index.html'), { encoding: 'utf8' });

var _default = function _default(app) {

    app.use(function (req, res, next) {
        var context = {};
        var html = (0, _server.renderToString)(_react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.url, context: context },
            _routes2.default
        ));
        if (context.url) {
            res.writeHead(302, { Location: context.url });
            res.end();
        } else {
            res.write(Template.replace('Loading...', html));
            res.end();
        }
    });
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Template, 'Template', 'src/server/express_router.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/server/express_router.js');
}();

;