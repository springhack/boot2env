import { useStrict, action, observable } from 'mobx';

useStrict(true);

class Model {
  @observable
  state = {};

  @action
  setState(newState) {
    Object.keys(newState).forEach((key) => { this.state[key] = newState[key]; });
  }
}

export default new Model();
