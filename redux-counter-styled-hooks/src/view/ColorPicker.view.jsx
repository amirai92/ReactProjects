import React, { useState } from "react";
import styled from "styled-components";
import { darken } from "polished";
import { useDispatch } from "react-redux";
import {changeColor} from "../state/actions/color.actions"

const ColorPicker = () => {
    const dispatch = useDispatch();    
    return (
        <Box>
            <Btn onClick={()=> dispatch(changeColor("Red"))} bg_color= "#f44336">Red</Btn>
            <Btn onClick={()=> dispatch(changeColor("Green"))}bg_color = "#4CAF50">Green</Btn>
            <Btn onClick={()=> dispatch(changeColor("Blue"))} bg_color="#008CBA">Blue</Btn>
        </Box>
    )
}
export default ColorPicker;
const Box = styled.div`
  display: flex;
  align-items: center;
`;

const Btn = styled.button`
  border-radius: 50%;
  outline: false;
  border: solid 2px #4e4e4e;
  width: 90px;
  height: 90px;
  font-size: 30px;
  color: white;
  cursor: pointer;
  outline: none;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  background-color: ${(props) => props.bg_color};
  :active {
    background: ${darken(0.2, "#3a9dd1")};
  }
  :focus {
    outline: none;
  }
`;
