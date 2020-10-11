import React, { Component } from "react";
import List from "./List";
import Filter from "./Filter";


export default class App extends Component {
  state = {
    original_list: [],
    filtered_list: []
  };


  update_list_state = (filtered_list) => {
    this.setState({ filtered_list });
  };

  async componentDidMount() {
    try {
      const data_url = "https://api.jsonbin.io/b/5efda5acbb5fbb1d2562b19d";
      let key = "$2b$10$lEDG6np5dwdtc3QJkJzYKe3vBenLeYaqbPBJoqQ6IdfdrzEScsr7e";
      // const data_url = "https://my.api.mockaroo.com/robots.json";
      // let key = "c3d6dbf0";

      const response = await fetch(data_url, {
        headers: { "secret-key": key }
        // headers: { "X-API-Key": key }
      });
      const data = await response.json();
      this.setState({
        original_list: data,
        filtered_list: data
      });
    } catch (error) {
      console.error(`fetch operation failed: ${error.message}`);
    }
  }

  render() {
    return (
      <div className="app">
        <Filter
          list_data={this.state.original_list}
          on_filter={this.update_list_state}
          num={this.state.filtered_list.length}
        />
        <List list_data={this.state.filtered_list} />
      </div>
    );
  }
}
