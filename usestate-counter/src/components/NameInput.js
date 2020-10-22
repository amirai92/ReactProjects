import React, { useEffect, useState } from "react";

const Name_input = () => {
  const initInput = "???";
  const initFlag = true;
  const [name, setName] = useState(initInput);
  const [flag, setFlag] = useState(initFlag);
  useEffect(() => {
    console.log("useEffect was called");
  }, [flag]);

  const newEffect = (event) => {
    const newName = event.target.value;
    setName(newName);
    if (name.length % 3 === 0) {
      setFlag(!flag);
    }
  };

  return (
    <div className="vbox mt20">
      <div className="hbox space-between">
        <h1 className="paragraph">What is your name?</h1>
        <input
          type="text"
          className="input cap"
          placeholder="Your name here..."
          onChange={newEffect}
        />
      </div>
      <br />
      <h3 className="paragraph text-left white-text cap">
        Your answer: {name}
      </h3>
    </div>
  );
};
export default Name_input;
