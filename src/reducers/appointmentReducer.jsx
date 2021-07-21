import {
  GET_ALL_APPOINTMENTS,
  ADD_APPOINTMENT,
  DELETE_APPOINTMENT,
  EDIT_APPOINTMENT,
  EDIT_STATUS,
  GET_APPOINTMENT_BY_ID
} from "../actions/types";

export const appointments = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_APPOINTMENTS:
      return [...action.payload];
    case ADD_APPOINTMENT:
      const appointments = state.map((appointment) => appointment);
      appointments.push(action.payload);
      return appointments;
    case DELETE_APPOINTMENT:
      return state.filter((appointment) => {
        if (appointment._id === action.payload._id) return false;
        else return true;
      });

    case EDIT_APPOINTMENT:
      return state.map((appointment) => {
        if (appointment._id === action.payload._id) return action.payload;
        return appointment;
      });

    case EDIT_STATUS:
      return state.map((appointment) => {
        if (appointment._id === action.payload._id) return action.payload;
        return appointment;
      });

    default:
      return state;
  }
};



export const selectedAppointment = (state = {}, action) => {
  switch (action.type) {
    case GET_APPOINTMENT_BY_ID:
      return { ...action.payload };

    default:
      return state;
  }
};
