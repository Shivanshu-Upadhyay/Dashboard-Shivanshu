import physiomaticApi from "../api/physiomaticApi";

import { ADD_DEMOGRAPHIC_DATA, ERROR, GET_DEMOGRAPHIC_DATA, GET_DEMOGRAPHIC_DATA_BY_ID } from "./types";

export const addDemograpicData = (demographicData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.post(
      "/api/demograhicData/add",
      demographicData
    );
    dispatch({
      type: ADD_DEMOGRAPHIC_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};

export const getDemographicDataById = (dataId) => async (dispatch) => {
  try {
    const response = await physiomaticApi.get(
      `/api/demograhicData/${dataId}`
    );
    dispatch({
      type: GET_DEMOGRAPHIC_DATA_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};


export const getDemographicData = () => async (dispatch) => {
    try {
      const response = await physiomaticApi.get(
        '/api/demograhicData/'
      );
      dispatch({
        type: GET_DEMOGRAPHIC_DATA,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
