import { ADD_MOTOR_DATA, GET_MOTOR_DATA, GET_MOTOR_DATA_BY_ID } from "../actions/types";

export const motorData = (state = [], action) => {
    switch (action.type) {
        case ADD_MOTOR_DATA:
            const data = state.map((dt) => {
                return dt;

            });
            data.push(action.payload);
            return data;

        case GET_MOTOR_DATA:
            const motorDataAll = state.map((dt) => {
                return dt;

            });
            motorDataAll.push(action.payload);
            return motorDataAll;

        case GET_MOTOR_DATA_BY_ID:
            const motorDataOne = state.map((dt) => {
                return dt;

            });
            motorDataOne.push(action.payload);
            return motorDataOne;
        default:
            return state;
    }


};