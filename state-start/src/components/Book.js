import React, { Component } from "react";

export default class Book extends Component {
  state = {
    books_count: 0
  };

  add_book = (event) => {
    console.log("add_book");
    const newState = this.state.books_count + 1;
    this.setState({ books_count: newState });
  };
  render() {
    return (
      <div className="hbox space-between mt20">
        <h3 className="paragraph">Book counter: {this.state.books_count}</h3>
        <button className="button" onClick={this.add_book}>
          add a book
        </button>
      </div>
    );
  }
}
