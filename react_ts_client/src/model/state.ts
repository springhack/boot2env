import { autorun, action, observable } from 'mobx';

class State {

  public state = observable.object<any>({
    name: 'SpringHack'
  });

  @action.bound
  public setState(state: any): void {
    for (const key of Object.keys(state)) {
      this.state[key] = state[key];
    }
  }

}

export default new State();
