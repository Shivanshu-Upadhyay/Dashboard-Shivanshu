import {
    GET_INCOME_DATA,
    ADD_INCOME_DATA,
    DELETE_INCOME_DATA,
    EDIT_INCOME_DATA,
  } from "../actions/types";
  
  export const incomeData = (state = [], action) => {
    switch (action.type) {
      case GET_INCOME_DATA:
        return [...action.payload];
      case ADD_INCOME_DATA:
        const incomeData = state.map((income) => income);
        incomeData.push(action.payload);
        return incomeData;
      case DELETE_INCOME_DATA:
        return state.filter((income) => {
          if (income._id === action.payload._id) return false;
          else return true;
        });
  
      case EDIT_INCOME_DATA:
        return state.map((income) => {
          if (income._id === action.payload._id) return action.payload;
          return income;
        });
  
      default:
        return state;
    }
  };
  