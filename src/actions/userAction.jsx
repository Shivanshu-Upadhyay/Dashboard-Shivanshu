import physiomatica from "../api/physiomaticApi";

import { ERROR, LOGIN, AUTHENTICATE_USER, LOGOUT } from "./types";
import { getDataFromToken } from "../helpers/getDataFromToken";
import { setAuthToken } from "../helpers/setAuthToken";



//Login
export const login = (loginData) => async (dispatch) => {
  try {
    const response = await physiomatica
      .post("/api/login", loginData)
      .then((res) => {
        //   const { token } = res.data;
        const token = res.data;
        localStorage.setItem("token", token);

        setAuthToken(token);
        const user = getDataFromToken(token);
        dispatch({
          type: LOGIN,
          payload: user,
        });
      });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.response.data,
    });
  }
};

export const authenticateUser = () => async (dispatch) => {
  try {
    const response = await physiomatica.get("/api/authenticate");
    const token = response.data;
    localStorage.setItem("token", token);

    const user = getDataFromToken(token);
    dispatch({
      type: AUTHENTICATE_USER,
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  // window.location('/')
  setAuthToken();
  return {
    type: LOGOUT,
  };
};
