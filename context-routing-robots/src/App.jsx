import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopBar from "./view/TopBar";
import RobotsBrowser from "./view/RoboBrowser";
import styled from "styled-components";
import HomePage from "./content/Home";
import PageNotFound from "./content/PageNotFound";
import CreatePage from "./content/Create";
import { RoboProvider } from "./state/Robo.store";

//Navigation
import Links from "./content/Links";
// {/* <RoboProvider>
// <RobotsBrowser />
// </RoboProvider> */
// </Route>}

const App = () => (
  <Router>
    <Box>
      <TopBar>{<Links />} </TopBar>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/browse" render={() => <RobotsBrowser />} />
        <Route path="/create" render={() => <CreatePage />} />
        <Route path="/" render={() => <PageNotFound />} />
      </Switch>
    </Box>
  </Router>
);
export default App;

const Box = styled.div`
  /* background: lightskyblue; */
  padding: 3rem 7.5rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
`;
