import React, { Component } from "react";

export default class Employees extends Component {
  state = {
    employees_count: 0
  };

  add_employee = (event) => {
    const newState = this.state.employees_count + 1;
    this.setState({ employees_count: newState });
  };

  render() {
    return (
      <div className="hbox space-between mt20">
        <h3 className="paragraph">
          Employees counter: {this.state.employees_count}
        </h3>
        <button className="button" onClick={this.add_employee}>
          add a employee
        </button>
      </div>
    );
  }
}
