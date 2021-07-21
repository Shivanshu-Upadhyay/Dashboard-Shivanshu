import jwtDecode from "jwt-decode";

export const getDataFromToken = (token) => {
  localStorage.setItem("authToken", token);
  const data = jwtDecode(token);
  return data;
};
