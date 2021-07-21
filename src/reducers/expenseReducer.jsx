import {
    GET_EXPENSE_DATA,
    ADD_EXPENSE_DATA,
    DELETE_EXPENSE_DATA,
    EDIT_EXPENSE_DATA,
  } from "../actions/types";
  
  export const expenseData = (state = [], action) => {
    switch (action.type) {
      case GET_EXPENSE_DATA:
        return [...action.payload];
      case ADD_EXPENSE_DATA:
        const expenseData = state.map((expense) => expense);
        expenseData.push(action.payload);
        return expenseData;
      case DELETE_EXPENSE_DATA:
        return state.filter((expense) => {
          if (expense._id === action.payload._id) return false;
          else return true;
        });
  
      case EDIT_EXPENSE_DATA:
        return state.map((expense) => {
          if (expense._id === action.payload._id) return action.payload;
          return expense;
        });
  
      default:
        return state;
    }
  };
  