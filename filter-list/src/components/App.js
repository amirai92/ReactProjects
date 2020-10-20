import React, { Component } from "react";
import List from "./List";
import Filter from "./Filter";

export default class App extends Component {
  state = {
    isLoading: true,
    displayed_list: [],
    filtered_list: []
  };
  update_list_state = ({ filtered_list }) => {
    this.setState({ filtered_list });
  };
  async componentDidMount() {
    try {
      const data_url = "https://my.api.mockaroo.com/robots.json";
      let key = "c3d6dbf0";
      const response = await fetch(data_url, {
        headers: { "X-API-Key": key }
      });
      const data = await response.json();
      this.setState({
        displayed_list: data,
        filtered_list: data,
        isLoading: false
      });
    } catch (error) {
      console.error(`fetch operation failed: ${error.message}`);
    }
  }
  render() {
    return (
      <div className="app">
        <div className="header">
          <h1 className="headline white-text">Filter the list!</h1>
        </div>
        <Filter
          list_data={this.state.displayed_list}
          itemNumber={this.state.filtered_list.length}
          filter_data={this.update_list_state}
        />
        <List list_data={this.state.filtered_list} />
      </div>
    );
  }
}
