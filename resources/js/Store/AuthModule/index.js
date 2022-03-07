import * as actions from './actions';
import mutations from './mutations';
import * as getters from './getters';
import state from './state';

const AuthModule = {
    namespaced: true,
    mutations: mutations,
    actions: actions,
    state: state,
    getters: getters,
};

export default AuthModule;
