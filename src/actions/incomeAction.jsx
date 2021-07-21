import physiomaticApi from "../api/physiomaticApi";
import {
  ADD_INCOME_DATA,
  ERROR,
  GET_INCOME_DATA,
  // GET_income,
  EDIT_INCOME_DATA,
  DELETE_INCOME_DATA,
} from "./types";

export const addIncomeData = (incomeData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.post(
      "/api/income/add",
      incomeData
    );
    dispatch({
      type: ADD_INCOME_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};
export const getAllIncomeData = () => async (dispatch) => {
  try {
    const response = await physiomaticApi.get("/api/income/");
    dispatch({
      type: GET_INCOME_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};

export const deleteIncomeData = (id) => async (dispatch) => {
  try {
    const response = await physiomaticApi.delete(
      `/api/income/${id}`
    );
    dispatch({
      type: DELETE_INCOME_DATA,
      payload: response.data.income,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};

export const editIncomeData = (id, incomeData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.put(
      `/api/income/${id}`,
      incomeData
    );
    dispatch({
      type: EDIT_INCOME_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};
