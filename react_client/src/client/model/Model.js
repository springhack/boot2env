import {useStrict, action, observable} from 'mobx'

useStrict(true);

class Model {

    @observable
    state = {};

    @action
    setState() {
        //TODO
    }

}

export default new Model();
