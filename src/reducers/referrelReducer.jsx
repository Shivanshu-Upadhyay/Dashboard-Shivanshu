import { ADD_REFERREL_DATA, GET_REFERREL_DATA, GET_REFERREL_DATA_BY_ID } from "../actions/types";

export const referrelData = (state = [], action) => {
    switch (action.type) {
        case ADD_REFERREL_DATA:
            const data = state.map((dt) => {
                return dt;

            });
            data.push(action.payload);
            return data;

        case GET_REFERREL_DATA:
            const referrelDataAll = state.map((dt) => {
                return dt;

            });
            referrelDataAll.push(action.payload);
            return referrelDataAll;

        case GET_REFERREL_DATA_BY_ID:
            const referrelDataOne = state.map((dt) => {
                return dt;

            });
            referrelDataOne.push(action.payload);
            return referrelDataOne;
        default:
            return state;
    }


};