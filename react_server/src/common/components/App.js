/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-04-16 13:16:59
        Filename: src/common/components/App.js
        Description: Created by SpringHack using vim automatically.
* */
import React from 'react';
import { observer } from 'mobx-react';

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
};
