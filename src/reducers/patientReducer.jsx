import {
  GET_ALL_PATIENTS,
  ADD_PATIENT,
  DELETE_PATIENT,
  GET_PATIENT_BY_ID,
} from "../actions/types";

export const patients = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_PATIENTS:
      return [...action.payload];
    case ADD_PATIENT:
      return [...state].push(action.payload);
    case DELETE_PATIENT:
      return state.filter((patient) => {
        if (patient._id === action.payload._id) return false;
        else return true;
      });
    default:
      return state;
  }
};

export const selectedPatient = (state = {}, action) => {
  switch (action.type) {
    case GET_PATIENT_BY_ID:
      return { ...action.payload };

    default:
      return state;
  }
};
