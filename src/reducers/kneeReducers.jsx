import { ADD_KNEE_DATA, GET_KNEE_DATA, GET_KNEE_DATA_BY_ID } from "../actions/types";

export const kneeData = (state = [], action) => {
    switch (action.type) {
        case ADD_KNEE_DATA:
            const data = state.map((dt) => {
                return dt;

            });
            data.push(action.payload);
            return data;

        case GET_KNEE_DATA:
            const kneeDataAll = state.map((dt) => {
                return dt;

            });
            kneeDataAll.push(action.payload);
            return kneeDataAll;

        case GET_KNEE_DATA_BY_ID:
            const kneeDataOne = state.map((dt) => {
                return dt;

            });
            kneeDataOne.push(action.payload);
            return kneeDataOne;
        default:
            return state;
    }


};