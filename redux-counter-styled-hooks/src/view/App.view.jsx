import React from "react";
import styled from "styled-components";
import TopBar from "./TopBar.view";
import Counter from "./Counter.view";
import Person from "./Person.view";
import ColorPicker from "./ColorPicker.view";
import ColorDisplay from "./ColorDisplay.view"
const App = () => {
  return (
    <Box>

      <ColorPicker />
      <ColorDisplay/>
      <TopBar>Redux Counter + Async Ajax</TopBar>
      <Counter />
      <Person />
    </Box>
  );
};
export default App;

const Box = styled.div`
  height: 100%;
  width: 100%;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 15rem;
`;
