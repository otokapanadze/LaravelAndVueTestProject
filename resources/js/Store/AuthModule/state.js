import {authenticated} from "./getters";

/** @var { AuthmoduleState } */
const STATE = {
    user: {
        nme: '',
        email: '',
    },
    authenticated: false,
    errors: '',
    loading: false,
};

export default STATE;
