import { ADD_TREATMENT, GET_TREATMENTS } from "../actions/types";
export const treatments = (state = [], action) => {
  switch (action.type) {
    case ADD_TREATMENT:
      return [...state].push(action.payload);
    case GET_TREATMENTS:
      return [...action.payload];
    default:
      return state;
  }
};
