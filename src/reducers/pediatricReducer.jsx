import { ADD_PEDIATRIC_DATA, GET_PEDIATRIC_DATA_BY_ID, GET_PEDIATRIC_DATA } from "../actions/types";

export const pediatricData = (state = [], action) => {
    switch (action.type) {
        case ADD_PEDIATRIC_DATA:
            const data = state.map((dt) => {
                return dt;

            });
            data.push(action.payload);
            return data;

        case GET_PEDIATRIC_DATA:
            const pediatricDataAll = state.map((dt) => {
                return dt;

            });
            pediatricDataAll.push(action.payload);
            return pediatricDataAll;

        case GET_PEDIATRIC_DATA_BY_ID:
            const pediatricDataOne = state.map((dt) => {
                return dt;

            });
            pediatricDataOne.push(action.payload);
            return pediatricDataOne;
        default:
            return state;
    }


};