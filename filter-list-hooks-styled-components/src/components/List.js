import React from "react";
import Card from "./Card";

import styled from "styled-components";

const List = ({ list_data, onItemSelect }) => {
  const create_list_ui = (items) =>
    items.map((item) => (
      <ListItem key={item.id} onClick={() => onItemSelect(item)}>
        <Card {...item} />
      </ListItem>
    ));

  return (
    <CardsList>
      <ul> {create_list_ui(list_data)} </ul>
    </CardsList>
  );
};

export default List;
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
  :nth-child(odd) {
    background: white;
  }
`;
