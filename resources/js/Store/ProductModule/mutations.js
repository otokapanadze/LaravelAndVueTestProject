import {SET_LOADING, SET_PRODUCTS, SET_PRODUCT, SET_AUTHORS} from './mutation-types';

export default {
    /**
    *
    * @param { ProductmoduleState } state
    * @param { array } products
    */
    [SET_PRODUCTS](state, products) {
        state.products = products;
    },

    /**
    *
    * @param { ProductmoduleState } state
    * @param { array } authors
    */
    [SET_AUTHORS](state, authors) {
        state.authors = authors;
    },

    /**
     *
     * @param { ProductmoduleState } state
     * @param { array } products
     */
    [SET_PRODUCT](state, product) {
        state.product = product;
    },
    /**
     *
     * @param { ProductmoduleState } state
     * @param { boolean } loadingState
     */
    [SET_LOADING](state, loadingState) {
        state.loading = loadingState;
    },
};
