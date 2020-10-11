import React from "react";
import Card from "./Card";

export default ({ list_data }) => {
  return (
    <div className="cards-list">
      <ul> {create_list_ui(list_data)} </ul>
    </div>
  );
};

const create_list_ui = items =>
  items.map(item => (
    <li className="card-item" key={item.id}>
      <Card {...item} />
    </li>
  ));
