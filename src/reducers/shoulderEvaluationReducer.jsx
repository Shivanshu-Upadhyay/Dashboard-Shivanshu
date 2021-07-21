import { ADD_SHOULDER_DATA, GET_SHOULDER_DATA_BY_ID, GET_SHOULDER_DATA } from "../actions/types";

export const shoulderData = (state = [], action) => {
    switch (action.type) {
        case ADD_SHOULDER_DATA:
            const data = state.map((dt) => {
                return dt;

            });
            data.push(action.payload);
            return data;

        case GET_SHOULDER_DATA:
            const shoulderDataAll = state.map((dt) => {
                return dt;

            });
            shoulderDataAll.push(action.payload);
            return shoulderDataAll;

        case GET_SHOULDER_DATA_BY_ID:
            const shoulderDataOne = state.map((dt) => {
                return dt;

            });
            shoulderDataOne.push(action.payload);
            return shoulderDataOne;
        default:
            return state;
    }


};