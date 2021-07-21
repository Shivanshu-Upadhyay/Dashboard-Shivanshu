import { ADD_DEMOGRAPHIC_DATA, GET_DEMOGRAPHIC_DATA, GET_DEMOGRAPHIC_DATA_BY_ID } from "../actions/types";

export const demographicData = (state = [], action) => {
    switch (action.type) {
        case ADD_DEMOGRAPHIC_DATA:
            const data = state.map((dt) => {
                return dt;

            });
            data.push(action.payload);
            return data;

        case GET_DEMOGRAPHIC_DATA:
            const demographicDataAll = state.map((dt) => {
                return dt;

            });
            demographicDataAll.push(action.payload);
            return demographicDataAll;

        case GET_DEMOGRAPHIC_DATA_BY_ID:
            const demographicDataOne = state.map((dt) => {
                return dt;

            });
            demographicDataOne.push(action.payload);
            return demographicDataOne;
        default:
            return state;
    }


};