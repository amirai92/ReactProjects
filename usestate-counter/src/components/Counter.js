import React, { useState } from "react";

const Counter = ({ item }) => {
  const counter = 0;
  const [count, setCount] = useState(counter);

  return (
    <div className="hbox space-between mt20">
      <h3 className="paragraph">
        {item} counter: {count}
      </h3>
      <button className="button" onClick={() => setCount(count + 1)}>
        add {item}
      </button>
    </div>
  );
};
export default Counter;
