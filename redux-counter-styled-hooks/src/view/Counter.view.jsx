import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement} from "../state/actions/count.actions";

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <Box>
      <Btn onClick={() => dispatch(increment(5))}>+5</Btn>
      <Btn onClick={() => dispatch(increment())}>+</Btn>
      <Label>Count: {count}</Label>
      <Btn onClick={() => dispatch(decrement())}>-</Btn>
    </Box>
  );
};

export default Counter;

const Box = styled.div`
  display: flex;
  align-items: center;
`;
const Btn = styled.button`
  border-radius: 50%;
  outline: false;
  border: solid 2px #4e4e4e;
  width: 50px;
  height: 50px;
  font-size: 32px;
  background: #3a9dd1;
  color: white;
  cursor: pointer;
  outline: none;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;

  :active {
    background: ${darken(0.2, "#3a9dd1")};
  }
  :focus {
    outline: none;
  }
`;

const Label = styled.span`
  font-size: 22px;
`;

// const doIncrement = useCallback(() => dispatch(increment()), [dispatch]);
// const doDecrement = useCallback(() => dispatch(decrement()), [dispatch]);
