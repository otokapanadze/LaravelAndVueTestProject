import { SET_USER,SET_LOADING,SET_AUTHENTICATED } from './mutation-types';

export default {
    /**
    *
    * @param { AuthmoduleState } state
    * @param { object } user
    */
    [SET_USER](state, user) {
        state.user = user;
    },

    /**
     *
     * @param { AuthmoduleState } state
     * @param { boolean } loadingState
     */
    [SET_LOADING](state, loadingState) {
        state.loading = loadingState;
    },

    /**
     *
     * @param { AuthmoduleState } state
     * @param { boolean } authenticatedState
     */
    [SET_AUTHENTICATED](state, authenticatedState) {
        state.authenticated = authenticatedState;
    },
};
