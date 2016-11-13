import React from 'react';
import {observer} from 'mobx-react';

import '../less/App.less';
import Model from '../model/Model.js';

@observer
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() 
    {
        return (
            <div />
        );
    }
}

export default App;
