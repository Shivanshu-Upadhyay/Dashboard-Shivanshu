import { REGISTER, LOGIN, AUTHENTICATE_USER, LOGOUT } from "../actions/types";
import _ from "lodash";

const initialState = { isLogedIn: false, user: {} };

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, isLogedIn: true, user: { ...action.payload } };
    case LOGIN:
      return {
        ...state,
        isLogedIn: !_.isEmpty(action.payload),
        user: { ...action.payload }
      };
    case LOGOUT:
      return initialState;

    case AUTHENTICATE_USER:
      console.log("authenticate user reducer");
      return { isLogedIn: true, user: { ...action.payload } };

    default:
      return state;
  }
};
