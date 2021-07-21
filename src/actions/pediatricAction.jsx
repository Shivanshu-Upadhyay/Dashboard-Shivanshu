import physiomaticApi from "../api/physiomaticApi";

import { ADD_PEDIATRIC_DATA, ERROR, GET_PEDIATRIC_DATA, GET_PEDIATRIC_DATA_BY_ID } from "./types";

export const addPediatricData = (pediatricData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.post(
      "/api/pediatric/add",
      pediatricData
    );
    dispatch({
      type: ADD_PEDIATRIC_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};

export const getPediatricDataById = (dataId) => async (dispatch) => {
  try {
    const response = await physiomaticApi.get(
      `/api/pediatric/${dataId}`
    );
    dispatch({
      type: GET_PEDIATRIC_DATA_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};


export const getPediatricData = () => async (dispatch) => {
    try {
      const response = await physiomaticApi.get(
        '/api/pediatric/'
      );
      dispatch({
        type: GET_PEDIATRIC_DATA,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
