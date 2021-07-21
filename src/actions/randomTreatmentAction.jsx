import physiomaticApi from "../api/physiomaticApi";
import {
  GET_RANDOM_TREATMENT_DATA,
  ERROR
} from "./types";

export const getRandomTreatments = () => async (dispatch) => {
  try {
    const response = await physiomaticApi.get("/api/randomTreatment/");
    dispatch({
      type: GET_RANDOM_TREATMENT_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};

