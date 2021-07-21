import axios from "axios";

// const url2 = 'http://localhost:3000/';
const url2 = 'https://physiomatic.netlify.app/';
export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
    // window.location = url1;
  } else {
    delete axios.defaults.headers.common["Authorization"];
    window.location = url2;
  }
};
