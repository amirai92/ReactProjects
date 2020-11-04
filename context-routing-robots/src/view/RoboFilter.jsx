import React, { useContext } from "react";
import styled from "styled-components";
import { RoboStore } from "../state/Robo.store";

const Filter = () => {
  const { all_robots, set_filtered_robots, filtered_robots } = useContext(
    RoboStore
  );

  let num_elements = filtered_robots.length;

  const update_list = (event) => {
    const txt = event.target.value;
    //console.log('update_list')

    const filtered_list = all_robots.filter((bot) =>
      bot.first_name.toLowerCase().includes(txt.toLowerCase())
    );
    num_elements = filtered_list.length;
    set_filtered_robots(filtered_list);
  };

  const items_count = num_elements || all_robots.length;
  return (
    <Header>
      <Title>{items_count} items filtered</Title>
      <Input onChange={update_list} />
    </Header>
  );
};

export default Filter;

const Header = styled.div`
  background: lightsalmon;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0.4rem 0.4rem 0 0;
  height: 9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.h4`
  font-family: "Expletus Sans";
  text-align: left;
  font-size: 2rem;
  font-weight: 400;
  color: darkred;
`;
const Input = styled.input`
  height: 3.5rem;
  width: 24rem;
  outline: none;
  border-radius: 0.5rem;
  border: white 2px solid;
  transition: border 0.5s;
  padding: 1rem;

  &:focus {
    border: tomato 2px solid;
  }
`;
