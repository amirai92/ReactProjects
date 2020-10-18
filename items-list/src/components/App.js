import React, { Component } from "react";
import List from "./List";

class App extends Component {
  state = {
    isLoading: true,
    itemList: []
  };

  componentDidMount = async () => {
    try {
      const url = "https://api.jsonbin.io/b/5efda5acbb5fbb1d2562b19d";
      const key =
        "$2b$10$O7V6fa.3orNXq.lmoD/xGOd1Hota6iVyuTZULIBHZjWP1EKbuBSx6";

      const response = await fetch(url, {
        headers: { "secret-key": key }
      });
      const data = await response.json();

      this.setState({
        itemList: data,
        isLoading: false
      });
    } catch (error) {
      console.error(`fetch operation failed: ${error.message}`);
    }
  };

  render() {
    return (
      <div className="app">
        <div className="header">
          <h1 className="headline white-text">Show me that list!</h1>
        </div>
        {this.isLoading ? (
          <h1 style={{ width: "600px", height: "400px" }}>
            Loading the data..
          </h1>
        ) : (
          <List listed_data={this.itemList} />
        )}
      </div>
    );
  }
}
export default App;
