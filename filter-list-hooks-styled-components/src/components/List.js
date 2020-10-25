import React from "react";
import Card from "./Card";
import styled from "styled-components";

export default ({ list_data }) => {
  return (
    <CardsList>
      <ul> {create_list_ui(list_data)} </ul>
    </CardsList>
  );
};

const create_list_ui = (items) =>
  items.map((item) => (
    <ListItem key={item.id}>
      <Card {...item} />
    </ListItem>
  ));

const CardsList = styled.div`
  background: oldlace;
  height: 75vh;
  border-radius: 0.4rem;
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: 0 0.2rem 0.8rem DimGrey;
`;
const ListItem = styled.li`
  :nth-child(even) {
    background: honeydew;
  }
  .card-item:nth-child(odd) {
    background: white;
  }
`;
