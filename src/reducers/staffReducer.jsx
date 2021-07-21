import {
    ADD_STAFF_DATA,
    DELETE_STAFF_DATA,
    GET_STAFF_DATA,
    // GET_STAFF_DATA_BY_ID,
    EDIT_STAFF_DATA
  } from "../actions/types";
  
  export const staffData = (state = [], action) => {
    switch (action.type) {
      case ADD_STAFF_DATA:
        return [...state].push(action.payload);
      case DELETE_STAFF_DATA:
        return state.filter((staff) => {
          if (staff._id === action.payload._id) return false;
          else return true;
        });
  
        case EDIT_STAFF_DATA:
        return state.map((staff) => {
          if (staff._id === action.payload._id) return action.payload;
          return staff;
        });
      case GET_STAFF_DATA:
        const staffDataAll = state.map((sd) => {
          return sd;
        });
        staffDataAll.push(action.payload);
        return staffDataAll;
  
      // case GET_STAFF_DATA_BY_ID:
      //   const staffDataOne = state.map((sd) => {
      //     return sd;
      //   });
      //   staffDataOne.push(action.payload);
      //   return staffDataOne;
      default:
        return state;
    }
  };
  