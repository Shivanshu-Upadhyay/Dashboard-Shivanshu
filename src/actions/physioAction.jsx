import physiomaticApi from "../api/physiomaticApi";
import { ADD_PHYSIO_DATA,DELETE_PHYSIO_DATA,GET_PHYSIO_DATA,GET_PHYSIO_DATA_BY_ID,EDIT_PHYSIO_DATA, ERROR } from "./types";

export const addPhysioData = (PhysioData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.post("/api/physio/add", PhysioData);
    dispatch({
      type: ADD_PHYSIO_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};

export const deletePhysioData = (id) => async (dispatch) => {
  try {
    const response = await physiomaticApi.delete(`/api/physio/delete/${id}`);
    dispatch({
      type:DELETE_PHYSIO_DATA ,
      payload: response.data.physio,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};

export const getPhysioDataById = (dataId) => async (dispatch) => {
  try {
    const response = await physiomaticApi.get(
      `/api/physio/${dataId}`
    );
    dispatch({
      type: GET_PHYSIO_DATA_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};


export const getPhysioData = () => async (dispatch) => {
    try {
      const response = await physiomaticApi.get(
        '/api/physio/'
      );
      dispatch({
        type: GET_PHYSIO_DATA,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };

  export const editPhysio = (id, physioData) => async (dispatch) => {
    try {
      const response = await physiomaticApi.put(
        `/api/physio/delete/${id}`,
        physioData
      );
      dispatch({
        type: EDIT_PHYSIO_DATA,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response.data });
    }
  };