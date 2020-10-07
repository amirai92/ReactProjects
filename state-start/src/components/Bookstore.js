import React, { Component } from "react";
import TopBar from "./TopBar";
import NameInput from "./NameInput";
import Book from "./Book";
import Customers from "./Customers";
import Employees from "./Employees";

export default class Bookstore extends Component {
  render() {
    return (
      <div className="app">
        <TopBar>React </TopBar>
        <h1 className="headline white-text">* ^ * Stateful Bookstore * ^ *</h1>
        <Book />
        <br />
        <hr />
        <Customers />
        <br />
        <hr />
        <Employees />
        <NameInput />
      </div>
    );
  }
}
