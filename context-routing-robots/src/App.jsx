import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopBar from "./view/TopBar";
import RobotsBrowser from "./view/RoboBrowser";
import HomePage from "./content/Home";
import CreatePage from "./content/Create";
import { RoboProvider } from "./state/Robo.store";
//Navigation
import Links from "./content/Links";

const App = () => (
  <Router>
    <TopBar>
      <Links />
    </TopBar>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/browse">
        <RoboProvider>
          <RobotsBrowser />
        </RoboProvider>
      </Route>
      <Route path="/create" component={CreatePage} />
    </Switch>
  </Router>
);
export default App;
