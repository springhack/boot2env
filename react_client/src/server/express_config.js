/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-03-11 15:09:51
        Filename: express_config.js
        Description: Created by SpringHack using vim automatically.
**/
let config = [
    'truse proxy' : 1
];

export default app => {
    for (let key in config)
        app.set(key, config[key]);
};
