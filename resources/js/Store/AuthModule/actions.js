import {SET_LOADING, SET_USER,SET_AUTHENTICATED, SET_ERRORS} from "./mutation-types";

export function getUser({ commit }) {
    axios.get('api/user')
        .then(response => {
            commit(SET_USER, response.data);
            commit(SET_AUTHENTICATED, true);
            commit(SET_LOADING, false);
        })
        .catch(error => {
            commit(SET_AUTHENTICATED, false);
            commit(SET_LOADING, false);
        })
}

/**
 *
 * @param { function } commit
 */
export function login({ commit }, credentials) {
    commit(SET_LOADING, true);
    axios.get('sanctum/csrf-cookie')
        .then(() => {
            axios.post('/login', credentials)
                .then(() => {
                    axios.get('api/user')
                        .then(response => {
                            console.log('user',response.data)
                            commit(SET_USER, response.data);
                            commit(SET_AUTHENTICATED, true);
                            commit(SET_LOADING, false);
                        })
                        .catch(error => {
                            console.log(error)
                        })
                })
                .catch(error => {
                    commit(SET_LOADING, false);
                    commit(SET_ERRORS, error.response.data.message);
                    commit(SET_AUTHENTICATED, false);
                })
        })

}

export function logout({ commit }) {
    axios.post('logout')
        .then(() => {
            commit(SET_USER, {});
            commit(SET_AUTHENTICATED, false);
            commit(SET_LOADING, false);
        })
}
