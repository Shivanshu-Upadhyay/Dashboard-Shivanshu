import {
  ADD_PATIENT,
  ERROR,
  GET_ALL_PATIENTS,
  GET_PATIENT_BY_ID,
  DELETE_PATIENT,
  EDIT_PATIENT,
} from "./types";

import physiomaticApi from "../api/physiomaticApi";

export const addPatient = (patientData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.post("/api/patient/add", patientData);

    dispatch({
      type: ADD_PATIENT,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR,
      payload: error,
    });
  }
};

export const getPatientById = (id) => async (dispatch) => {
  try {
    const response = await physiomaticApi.get(`/api/patient/get/${id}`);
    dispatch({
      type: GET_PATIENT_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};

export const getAllPatients = () => async (dispatch) => {
  try {
    const response = await physiomaticApi.get("/api/patient/patients");
    const patients = response.data.patients;
    dispatch({
      type: GET_ALL_PATIENTS,
      payload: patients,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};

export const deletePatient = (id) => async (dispatch) => {
  try {
    const response = await physiomaticApi.delete(`/api/patient/delete/${id}`);
    dispatch({
      type: DELETE_PATIENT,
      payload: response.data.patient,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};

export const editPatient = (id, patientData) => async (dispatch) => {
  console.log('in edit patient');
  try {
    const response = await physiomaticApi.put(
      `/api/patient/edit/${id}`,
      patientData
    );
    dispatch({
      type: EDIT_PATIENT,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};
