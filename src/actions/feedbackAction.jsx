import physiomaticApi from "../api/physiomaticApi";
import { ERROR, ADD_FEEDBACK, GET_FEEDBACK } from "./types";

export const addFeedback = (feedbackData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.post(
      "/api/feedback/add",
      feedbackData
    );
    const data = response.data;
    dispatch({
      type: ADD_FEEDBACK,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};

export const getFeedback = () => async (dispatch) => {
  try {
    const response = await physiomaticApi.get("/api/feedback");
    const feedbacks = response.data.feedbacks;
    dispatch({
      type: GET_FEEDBACK,
      payload: feedbacks,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};
