import {
    AUTHENTICATE_USER
} from '../actions/types';

const INITIAL_STATE = {
    authenticated: false,
    user: []
}

export default function(state = INITIAL_STATE, action) {
    console.log(action.payload);
    switch (action.type) {
        case AUTHENTICATE_USER:
            const { user } = action.payload;
            return {
                ...state, //it's going to take everything from initial_state and put it in there
                authenticated: true,
                user //a new payload that contains user
            }
        default: return state;
    }
}