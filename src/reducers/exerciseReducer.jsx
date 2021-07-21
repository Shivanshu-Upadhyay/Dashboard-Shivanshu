import {
  ADD_EXERCISE,
  GET_ALL_EXERCISES,
  GET_EXERCISE_BY_ID,
} from "../actions/types";

export const exercises = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_EXERCISES:
      return [...action.payload];

    default:
      return state;
  }
};

export const selectedExercises = (state = [], action) => {
  switch (action.type) {
    case ADD_EXERCISE:
      const exercises = state.map((exercise) => exercise);
      exercises.push(action.payload);
      return exercises;
    // case REMOVE_EXERCISE:
    //   return state.filter(exercise=>{

    //   })

    default:
      return state;
  }
};
