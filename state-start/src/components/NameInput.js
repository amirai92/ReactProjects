import React, { Component } from "react";

export default class Name_input extends Component {
  state = {
    your_name: "???"
  };

  update_answer = event => {
    console.log(event.target);
    this.setState({ your_name: event.target.value });
  };

  render() {
    return (
      <div className="vbox mt20">
        <div className="hbox space-between">
          <h1 className="paragraph">What is your name?</h1>

          <input
            type="text"
            className="input cap"
            placeholder="Your name here..."
            onChange={this.update_answer}
          />
        </div>
        <br />
        <h3 className="paragraph text-left white-text cap">
          Your answer: {this.state.your_name}
        </h3>
      </div>
    );
  }
}
