import {SET_PRODUCTS, SET_PRODUCT, SET_LOADING, SET_AUTHORS} from './mutation-types';

/**
*
* @param { function } commit
*/
export function getProducts({ commit }, filters = null) {
    commit(SET_LOADING, true);
    axios.get('/api/products' + (filters ? '?' + filters : ''))
        .then(response => {
            commit(SET_PRODUCTS, response.data.data);
            commit(SET_LOADING, false);
        })
        .catch(error => {
            console.log(error);
            commit(SET_LOADING, false);
        });
}

/**
*
* @param { function } commit
*/
export function getAuthors({ commit }) {
    axios.get('/api/authors')
        .then(response => {
            commit(SET_AUTHORS, response.data.data);
        })
        .catch(error => {
            console.log(error);
            commit(SET_LOADING, false);
        });
}

/**
*
* @param { function } commit
* @param { int } id
*/
export function getProduct({ commit }, id) {
    commit(SET_LOADING, true);
    axios.get('/api/products/' + id)
        .then(response => {
            commit(SET_PRODUCT, response.data.data);
            commit(SET_LOADING, false);
        })
        .catch(error => {
            console.log(error);
            commit(SET_LOADING, false);
        });
}
