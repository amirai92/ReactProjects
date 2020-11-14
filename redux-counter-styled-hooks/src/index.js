import GlobalStyles from "./styles/global.styles";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./view/App.view";
import store from "./state/configure.store";

// import { fetchRandomPerson } from "./state/actions/person.actions";
// store.dispatch(fetchRandomPerson());

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyles />
  </>,
  document.querySelector("#root")
);
