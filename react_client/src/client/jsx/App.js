/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-01 01:56:43
        Filename: App.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {observer} from 'mobx-react';

import Model from '../model/Model.js';
     
export default @observer class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() 
    {
        return (
            <div>React Component</div>
        );
    }
}
