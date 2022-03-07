import {authenticated} from "./getters";

/** @var { AuthmoduleState } */
const STATE = {
    user: window.User,
    authenticated: window.User !== null,
    errors: '',
    loading: false,
};

export default STATE;
