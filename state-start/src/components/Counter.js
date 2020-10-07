import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0
  };
  add_item = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const { item } = this.props;
    return (
      <div className="hbox space-between mt20">
        <h3 className="paragraph">
          {item} couter :{this.state.count}
        </h3>
        <button className="button" onClick={this.add_item}>
          add {item}
        </button>
      </div>
    );
  }
}
