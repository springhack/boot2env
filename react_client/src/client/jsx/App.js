/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-04-12 23:51:07
        Filename: src/client/jsx/App.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {observer} from 'mobx-react';

import '../less/App.less';

export default @observer class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{color: 'red'}}>React Component</div>
        );
    }
    componentDidMount() {
        console.log('SpringHack');
    }
}
