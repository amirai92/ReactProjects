import React from "react";
import { render } from "react-dom";
// import RoboBrowser from "./view/RoboBrowser";
// import { RoboProvider } from "./state/Robo.store";
import GlobalStyles from "./styles/global.styles";
import App from "./App";

render(
  <>
    <App />
    <GlobalStyles />
  </>,
  document.getElementById("root")
);
