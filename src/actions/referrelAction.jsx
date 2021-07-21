import physiomaticApi from "../api/physiomaticApi";

import { ADD_REFERREL_DATA, ERROR, GET_REFERREL_DATA, GET_REFERREL_DATA_BY_ID } from "./types";

export const addReferrelData = (referralData) => async (dispatch) => {
    try {
        const response = await physiomaticApi.post(
            "/api/referrelData/add",
            referralData
        );
        dispatch({
            type: ADD_REFERREL_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};

export const getReferrelDataById = (dataId) => async (dispatch) => {
    try {
        const response = await physiomaticApi.get(
            `/api/referrelData/${dataId}`
        );
        dispatch({
            type: GET_REFERREL_DATA_BY_ID,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};


export const getReferrelData = () => async (dispatch) => {
    try {
        const response = await physiomaticApi.get(
            '/api/referrelData/'
        );
        dispatch({
            type: GET_REFERREL_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};
