import * as Vue from 'vue'
import { createStore } from 'vuex';
import ProductModule from './ProductModule/index';
import AuthModule from './AuthModule/index';

const store = createStore({
    modules: {
        products: ProductModule,
        auth: AuthModule,
    },
})

export default store;
