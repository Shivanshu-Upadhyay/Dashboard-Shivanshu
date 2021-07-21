import physiomaticApi from "../api/physiomaticApi";
import {
  ADD_APPOINTMENT,
  ERROR,
  EDIT_STATUS,
  GET_ALL_APPOINTMENTS,
  // GET_APPOINTMENT,
  EDIT_APPOINTMENT,
  DELETE_APPOINTMENT,
  GET_APPOINTMENT_BY_ID,
} from "./types";

export const addApointment = (appointmentData) => async (dispatch) => {
  console.log(appointmentData, 'in add appointment');
  try {
    const response = await physiomaticApi.post(
      "/api/appointment/add",
      appointmentData
    );
    dispatch({
      type: ADD_APPOINTMENT,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};


export const getAllApointments = () => async (dispatch) => {
  try {
    const response = await physiomaticApi.get("/api/appointment/appointments");
    const appointments = response.data.appointments;
    dispatch({
      type: GET_ALL_APPOINTMENTS,
      payload: appointments,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};

export const getAppointmentById = (id) => async (dispatch) => {
  try {
    const response = await physiomaticApi.get(`/api/appointment/get/${id}`);
    dispatch({
      type: GET_APPOINTMENT_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};

export const deleteAppointment = (id) => async (dispatch) => {
  try {
    const response = await physiomaticApi.delete(
      `/api/appointment/delete/${id}`
    );
    dispatch({
      type: DELETE_APPOINTMENT,
      payload: response.data.appointment,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};

export const editAppointment = (id, appointmentData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.put(
      `/api/appointment/edit/${id}`,
      appointmentData
    );
    dispatch({
      type: EDIT_APPOINTMENT,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};


export const editStatus = (id, appointmentData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.put(
      `/api/appointment/edit/status/${id}`,
      appointmentData
    );
    dispatch({
      type: EDIT_STATUS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};


