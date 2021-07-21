import physiomaticApi from "../api/physiomaticApi";
import {
  GET_ALL_EXERCISES,
  GET_EXERCISE_BY_ID,
  ERROR,
  ADD_EXERCISE,
} from "../actions/types";

export const getExercises = () => async (dispatch) => {
  try {
    const response = await physiomaticApi.get("/api/exercise/getAll");
    dispatch({
      type: GET_ALL_EXERCISES,
      payload: response.data.exercises,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};

export const getExerciseById = (id) => async (dispatch) => {
  try {
    const response = await physiomaticApi.get(`/api/exercise/get/:${id}`);

    dispatch({
      type: GET_EXERCISE_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};

export const addExercise = (exercise) => {
  return {
    type: ADD_EXERCISE,
    payload: exercise,
  };
};
