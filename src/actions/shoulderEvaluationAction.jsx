import physiomaticApi from "../api/physiomaticApi";

import { ADD_SHOULDER_DATA, ERROR, GET_SHOULDER_DATA, GET_SHOULDER_DATA_BY_ID } from "./types";

export const addShoulderData = (shoulderData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.post(
      "/api/shoulder/add",
      shoulderData
    );
    dispatch({
      type: ADD_SHOULDER_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};

export const getShoulderDataById = (dataId) => async (dispatch) => {
  try {
    const response = await physiomaticApi.get(
      `/api/shoulder/${dataId}`
    );
    dispatch({
      type: GET_SHOULDER_DATA_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};


export const getShoulderData = () => async (dispatch) => {
    try {
      const response = await physiomaticApi.get(
        '/api/shoulder/'
      );
      dispatch({
        type: GET_SHOULDER_DATA,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
