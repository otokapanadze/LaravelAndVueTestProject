/**
*
*
* @param { AuthmoduleState } state
* @return { object }
*/
export function getUser(state) {
    return state.user;
}

/**
 *
 *
 * @param { AuthmoduleState } state
 * @return { object }
 */
export function authenticated(state) {
    return state.authenticated;
}
