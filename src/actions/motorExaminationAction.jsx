import physiomaticApi from "../api/physiomaticApi";

import { ADD_MOTOR_DATA, ERROR, GET_MOTOR_DATA, GET_MOTOR_DATA_BY_ID } from "./types";

export const addMotorData = (motorData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.post(
      "/api/motor/add",
      motorData
    );
    dispatch({
      type: ADD_MOTOR_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};

export const getMotorDataById = (dataId) => async (dispatch) => {
  try {
    const response = await physiomaticApi.get(
      `/api/motor/${dataId}`
    );
    dispatch({
      type: GET_MOTOR_DATA_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};


export const getMotorData = () => async (dispatch) => {
    try {
      const response = await physiomaticApi.get(
        '/api/motor/'
      );
      dispatch({
        type: GET_MOTOR_DATA,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
