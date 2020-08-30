import React, { Component } from "react";
const log = (...args) => console.log.apply(null, ["GoogleMap -->", ...args]);

export default class GoogleMap extends Component {
  // mapRef = React.createRef();

  shouldComponentUpdate(nextProps) {
    log("shouldComponentUpdate >>>>");
    log("this.props:", this.props);
    // log("this.state:", this.state);
    // log("nextState:", nextState);
    log("nextProps:", nextProps);
    // log("<<<< shouldComponentUpdate");
    this.map.setCenter({ lat: nextProps.lat, lng: nextProps.lng });
    this.map.setZoom(nextProps.zoom);
    return false;
  }

  componentDidMount() {
    this.map = new window.google.maps.Map(this.refs.myMap, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8
    });
  }

  render() {
    return <div ref="myMap" className="map-box" />;
  }
}
