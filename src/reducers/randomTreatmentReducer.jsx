import { GET_RANDOM_TREATMENT_DATA } from "../actions/types";

export const randomTreatmentData = (state = [], action) => {
    switch (action.type) {

        case GET_RANDOM_TREATMENT_DATA:
            return [...action.payload];
            default:
            return state;
    }


};