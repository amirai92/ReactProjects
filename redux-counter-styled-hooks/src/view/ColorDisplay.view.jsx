import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";


const ColorDisplay = () => {
    
  const color = useSelector((state) => state.color);
    return (
      <Box>
        <Label color={color}>
          Chosen color is: {color}
        </Label>
      </Box>
    )

};
export default ColorDisplay;


const Box = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  font-size: 22px;
  color : ${(props) => props.color};
  border-color :${(props) => props.color};
`;