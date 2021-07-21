import { REGISTER } from "../actions/types";

const initialState = { user: {} };

export const waiting = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return { ...state, user: { ...action.payload } };

        default:
            return state;
    }

}
