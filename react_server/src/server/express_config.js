/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-03-11 15:09:51
        Filename: express_config.js
        Description: Created by SpringHack using vim automatically.
* */
const config = [
  'truse proxy' : 1
];

export default (app) => {
  Object.keys(config).forEach((key) => { app.set(key, config[key]); });
};
