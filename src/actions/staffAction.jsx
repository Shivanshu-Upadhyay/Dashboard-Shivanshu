import physiomaticApi from "../api/physiomaticApi";
import { ADD_STAFF_DATA,DELETE_STAFF_DATA,GET_STAFF_DATA_BY_ID, GET_STAFF_DATA,EDIT_STAFF_DATA,ERROR } from "./types";

export const addStaffData = (staffData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.post("/api/staff/add", staffData);
    dispatch({
      type: ADD_STAFF_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};

export const deleteStaffData = (id) => async (dispatch) => {
  try {
    const response = await physiomaticApi.delete(`/api/staff/delete/${id}`);
    dispatch({
      type:DELETE_STAFF_DATA ,
      payload: response.data.staff,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};

// export const getStaffDataById = (dataId) => async (dispatch) => {
//   try {
//     const response = await physiomaticApi.get(
//       `/api/staff/${dataId}`
//     );
//     dispatch({
//       type: GET_STAFF_DATA_BY_ID,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: ERROR,
//       payload: error.response.data,
//     });
//   }
// };


export const getStaffData = () => async (dispatch) => {
    try {
      const response = await physiomaticApi.get(
        '/api/staff/'
      );
      dispatch({
        type: GET_STAFF_DATA,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };

  export const editStaff = (id, staffData) => async (dispatch) => {
    try {
      const response = await physiomaticApi.put(
        `/api/staff/edit/${id}`,
        staffData
      );
      dispatch({
        type: EDIT_STAFF_DATA,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response.data });
    }
  };
  