import React from "react";
import Card from "./Card";

const List = ({ listed_data }) => {
  console.log("List");
  return (
    <div className="cards-list">
      <ul>
        {listed_data &&
          listed_data.map((item) => (
            <li className="card-item" key={item.id}>
              <Card {...item} />
            </li>
          ))}
      </ul>
    </div>
  );
};
export default List;
