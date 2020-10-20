import React from "react";
import Card from "./Card";

export default ({ list_data }) => {
  return (
    <div className="cards-list">
      <ul>
        {list_data &&
          list_data.map((item) => (
            <li key={item.id} className="card-item">
              <Card {...item} />
            </li>
          ))}
      </ul>
    </div>
  );
};
