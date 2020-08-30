import React, { Component } from "react";
import TopBar from "./TopBar";
import GoogleMap from "./Google_map";
const log = (...args) => console.log.apply(null, ["App -->", ...args]);

export default class App extends Component {
  state = {
    lat: -34.397,
    lng: 150.644,
    zoom: ""
  };
  zoomChange = (event) => {
    this.setState({ zoom: parseInt(event.target.value, 10) });
  };

  reposition(city) {
    switch (city) {
      case "tel aviv":
        this.setState({ lat: 32.0042938, lng: 34.7615399 });
        break;
      case "paris":
        this.setState({ lat: 48.8589507, lng: 2.4170995 });
        break;
      case "london":
        this.setState({ lat: 51.5287718, lng: 0.0384838 });
        break;
      default:
        alert("wrong city");
    }
  }
  render() {
    log(this.state);
    return (
      <div className="app">
        <TopBar>Google Maps Example in React</TopBar>
        <div className="hbox mb20">
          <button onClick={() => this.reposition("tel aviv")}>Tel Aviv</button>
          <button onClick={() => this.reposition("paris")}>Paris</button>
          <button onClick={() => this.reposition("london")}>London</button>

          <input
            type="number"
            min="8"
            max="16"
            placeholder="8"
            onChange={this.zoomChange}
          />
        </div>
        <GoogleMap
          lat={this.state.lat}
          lng={this.state.lng}
          zoom={this.state.zoom}
        />
      </div>
    );
  }
}
