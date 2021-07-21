import { ADD_CONSENT_DATA, DELETE_CONSENT_DATA, GET_CONSENT_DATA, GET_CONSENT_DATA_BY_ID } from "../actions/types";

export const consentData = (state = [], action) => {
    switch (action.type) {
        case ADD_CONSENT_DATA:
            const data = state.map((dt) => {
                return dt;

            });
            data.push(action.payload);
            return data;

        case GET_CONSENT_DATA:
            return [...action.payload];

        case GET_CONSENT_DATA_BY_ID:
            const consentDataOne = state.map((dt) => {
                return dt;

            });
            consentDataOne.push(action.payload);
            return consentDataOne;

        case DELETE_CONSENT_DATA:
            return state.filter((consent) => {
                console.log(action.payload._id);
                if (consent._id === action.payload._id) return false;
                else return true;
            });

        default:
            return state;
    }


};