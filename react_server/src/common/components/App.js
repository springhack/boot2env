/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-08 16:07:08
        Filename: App.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {observer} from 'mobx-react';

export default @observer class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>React Component</div>
        );
    }
    componentDidMount() {
        console.log('SpringHack');
    }
}
