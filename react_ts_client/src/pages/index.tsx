import * as React from 'react';
import { render } from 'react-dom';
import { observer } from 'mobx-react';
import { HashRouter as Router, Route } from 'react-router-dom';

import State from '../model/state';
import './index.less';

@observer
class Root extends React.Component {
  render() {
    return (
      <div>{State.state.name}</div>
    );
  }
}

const root = document.getElementById('app-root');
render(
  <Router>
    <Route path='/' component={Root} />
  </Router>,
  root
);
