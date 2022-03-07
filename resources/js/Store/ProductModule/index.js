import * as actions from './actions';
import mutations from './mutations';
import * as getters from './getters';
import state from './state';

const ProductModule = {
    namespaced: true,
    mutations,
    actions,
    state,
    getters,
};

export default ProductModule;
