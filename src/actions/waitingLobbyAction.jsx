import physiomatica from "../api/physiomaticApi";

import { REGISTER, ERROR } from "./types";




//Register
export const register = (registerData) => async (dispatch) => {
    try {
        const response = await physiomatica.post("/api/waitingLobby/register", registerData);
        console.log('in register')
        // const token = response.data.token;
        dispatch({
            type: REGISTER,
            payload: response.data,
        });
    } catch (err) {
        dispatch({
            type: ERROR,
            payload: err.response.data,
        });
    }
};