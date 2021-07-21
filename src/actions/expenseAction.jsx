import physiomaticApi from "../api/physiomaticApi";
import {
  ADD_EXPENSE_DATA,
  ERROR,
  GET_EXPENSE_DATA,
  // GET_expense,
  EDIT_EXPENSE_DATA,
  DELETE_EXPENSE_DATA,
} from "./types";

export const addExpenseData = (expenseData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.post(
      "/api/expense/add",
      expenseData
    );
    dispatch({
      type: ADD_EXPENSE_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};
export const getAllExpenseData = () => async (dispatch) => {
  try {
    const response = await physiomaticApi.get("/api/expense/");
    dispatch({
      type: GET_EXPENSE_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};

export const deleteExpenseData = (id) => async (dispatch) => {
  try {
    const response = await physiomaticApi.delete(
      `/api/expense/${id}`
    );
    dispatch({
      type: DELETE_EXPENSE_DATA,
      payload: response.data.expense,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};

export const editExpenseData = (id, expenseData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.put(
      `/api/expense/${id}`,
      expenseData
    );
    dispatch({
      type: EDIT_EXPENSE_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};
