import React, { Component } from "react";
import TopBar from "./TopBar";
import GoogleMap from "./Google_map";
const log = (...args) => console.log.apply(null, ["App -->", ...args]);

export default class App extends Component {
  state = {
    lat: -34.397,
    lng: 150.644,
    zoom: "",
    title: "",
    type: "",
    marker_ready: false
  };
  zoomChange = (event) => {
    this.setState({ zoom: parseInt(event.target.value, 10) });
  };

  updateField = (event) => {
    log("title", event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  add_marker = () => {
    log("add_marker");
    this.setState({ marker_ready: true }, () => {
      console.log("inside marker_ready: ", this.state.marker_ready);
      this.setState({ marker_ready: false });
    });
    console.log("outside marker_ready: ", this.state.marker_ready);
  };

  reposition(city) {
    switch (city) {
      case "tel aviv":
        this.setState({ lat: 32.0042938, lng: 34.7615399 });
        break;
      case "ramatgan":
        this.setState({lat:32.0718679, lng:34.861323});
        break;
      case "givatayim":
        this.setState({lat:32.0703514, lng:34.8268141});
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
          <button onClick={() => this.reposition("givatayim")}>Givatayim</button>
          <button onClick={() => this.reposition("ramatgan")}>Ramat Gan</button>

          <input
            type="number"
            min="8"
            max="16"
            placeholder="8"
            onChange={this.zoomChange}
          />
        </div>
        <button onClick={this.add_marker}>Add Marker</button>
        <GoogleMap
          lat={this.state.lat}
          lng={this.state.lng}
          zoom={this.state.zoom}
          title={this.state.title}
          type={this.state.type}
          marker_ready={this.state.marker_ready}
        />
      </div>
    );
  }
}
