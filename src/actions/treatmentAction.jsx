import physiomaticApi from "../api/physiomaticApi";
import { ADD_TREATMENT, ERROR, GET_TREATMENTS } from "./types";

export const addTreatment = (treatmentData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.post(
      "/api/treatment/add",
      treatmentData
    );
    const treatment = response.data;
    dispatch({
      type: ADD_TREATMENT,
      payload: treatment,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};

export const getTreatments = () => async (dispatch) => {
  try {
    const response = await physiomaticApi.get("/api/treatment/treatments");
    const treatments = response.data.treatments;
    // console.log(treatments);
    dispatch({
      type: GET_TREATMENTS,
      payload: treatments,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};
