import { ADD_FEEDBACK, GET_FEEDBACK } from "../actions/types";

export const feedbacks = (state = [], action) => {
  switch (action.type) {
    case ADD_FEEDBACK:
      const newState = [...state];
      newState.push(action.payload);
      return newState;
    case GET_FEEDBACK:
      return action.payload;

    default:
      return state;
  }
};
