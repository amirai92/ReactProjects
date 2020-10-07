import React from "react";
import TopBar from "./TopBar";
import NameInput from "./NameInput";
import Counter from "./Counter";

const BookStore = () => (
  <div className="app">
    <TopBar>React Components are state machines</TopBar>

    <h1 className="headline white-text">{"<<<<Stateful Bookstore>>>>"}</h1>
    <Counter item="Book" />
    <Counter item="Customers" />
    <Counter item="Employees" />
    <br />
    <hr />
    <NameInput />
  </div>
);

export default BookStore;
