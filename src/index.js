import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.min.css';
import reducers from "./reducers";

import App from "./App";
import { authenticateUser } from "./actions/userAction";
import { getAllPatients } from "./actions/patientAction";
import { getAllApointments } from "./actions/appointmentAction.jsx";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

const token = localStorage.getItem("token");
if (token) {
  // console.log("token", token);
  (async () => {
    await store.dispatch(authenticateUser());
    if (store.getState().auth.isLogedIn) {
      store.dispatch(getAllPatients());
      store.dispatch(getAllApointments());
    }
  })();
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
