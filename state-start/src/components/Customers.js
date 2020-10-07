import React, { Component } from "react";

export default class Customers extends Component {
  state = {
    customers_count: 0
  };

  add_customers = (event) => {
    const newState = this.state.customers_count + 1;
    this.setState({ customers_count: newState });
  };

  render() {
    return (
      <div className="hbox space-between mt20">
        <h3 className="paragraph">
          Customers counter: {this.state.customers_count}
        </h3>
        <button className="button" onClick={this.add_customers}>
          add a customer
        </button>
      </div>
    );
  }
}
