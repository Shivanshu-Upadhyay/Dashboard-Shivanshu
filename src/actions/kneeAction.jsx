import physiomaticApi from "../api/physiomaticApi";

import { ADD_KNEE_DATA, ERROR, GET_KNEE_DATA, GET_KNEE_DATA_BY_ID } from "./types";

export const addKneeData = (kneeData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.post(
      "/api/knee/add",
      kneeData
    );
    dispatch({
      type: ADD_KNEE_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};

export const getkneeDataById = (dataId) => async (dispatch) => {
  try {
    const response = await physiomaticApi.get(
      `/api/knee/${dataId}`
    );
    dispatch({
      type: GET_KNEE_DATA_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};


export const getKneeData = () => async (dispatch) => {
    try {
      const response = await physiomaticApi.get(
        '/api/knee/'
      );
      dispatch({
        type: GET_KNEE_DATA,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
