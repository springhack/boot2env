/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-07-01 23:47:19
        Filename: postcss.config.js
        Description: Created by SpringHack using vim automatically.
**/
module.exports = {
  plugins: [
    /* eslint-disable global-require */
    require('autoprefixer'),
    require('cssnano')
    /* eslint-enable global-require */
  ]
};
