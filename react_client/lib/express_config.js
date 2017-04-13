'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-03-11 15:09:51
        Filename: express_config.js
        Description: Created by SpringHack using vim automatically.
**/
var config = ['truse proxy'];

var _default = function _default(app) {
    for (var key in config) {
        app.set(key, config[key]);
    }
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(config, 'config', 'src/server/express_config.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/server/express_config.js');
}();

;