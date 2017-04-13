'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _components = require('./components');

var _Config = require('./config/Config.js');

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-04-12 23:26:54
        Filename: routes.js
        Description: Created by SpringHack using vim automatically.
**/
var _default = _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, strict: true, component: _components.App }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/app', exact: true, strict: true, component: _components.App })
);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/common/routes.js');
}();

;