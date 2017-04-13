'use strict';

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _express_config = require('./express_config.js');

var _express_config2 = _interopRequireDefault(_express_config);

var _express_middleware = require('./express_middleware.js');

var _express_middleware2 = _interopRequireDefault(_express_middleware);

var _express_router = require('./express_router.js');

var _express_router2 = _interopRequireDefault(_express_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); /**
                                            Author: SpringHack - springhack@live.cn
                                            Last modified: 2017-03-11 15:29:00
                                            Filename: main.js
                                            Description: Created by SpringHack using vim automatically.
                                    **/


(0, _express_config2.default)(app);
(0, _express_middleware2.default)(app);
(0, _express_router2.default)(app);

app.listen(process.env.PORT || 3000);
;

var _temp = function () {
        if (typeof __REACT_HOT_LOADER__ === 'undefined') {
                return;
        }

        __REACT_HOT_LOADER__.register(app, 'app', 'src/server/main.js');
}();

;