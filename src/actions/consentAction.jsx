import physiomaticApi from "../api/physiomaticApi";

import { ADD_CONSENT_DATA, ERROR, GET_CONSENT_DATA, GET_CONSENT_DATA_BY_ID, DELETE_CONSENT_DATA } from "./types";

export const addConsentData = (consentData) => async (dispatch) => {
    try {
        const response = await physiomaticApi.post(
            "/api/consent/add",
            consentData
        );
        dispatch({
            type: ADD_CONSENT_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};

export const getConsentDataById = (dataId) => async (dispatch) => {
    try {
        const response = await physiomaticApi.get(
            `/api/consent/consent/${dataId}`
        );
        dispatch({
            type: GET_CONSENT_DATA_BY_ID,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};


export const getConsentData = (id) => async (dispatch) => {
    try {
        const response = await physiomaticApi.get(
            `/api/consent/consents/${id}`
        );
        dispatch({
            type: GET_CONSENT_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};


export const deleteConsentData = (id) => async (dispatch) => {
    try {
        const response = await physiomaticApi.delete(
            `/api/consent/delete/${id}`
        );
        console.log(response);
        dispatch({
            type: DELETE_CONSENT_DATA,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response.data,
        });
    }
};
