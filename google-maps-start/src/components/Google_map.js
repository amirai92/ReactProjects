import React, { Component } from "react";
const log = (...args) => console.log.apply(null, ["GoogleMap -->", ...args]);

export default class GoogleMap extends Component {

  shouldComponentUpdate(nextProps) {
      log("this.props:", this.props);
      log("nextProps:", nextProps);
      if (nextProps.marker_ready === true) {
        this.add_marker(nextProps.title, nextProps.type);
      } else {
        this.map.setCenter({ lat: nextProps.lat, lng: nextProps.lng });
        this.map.setZoom(nextProps.zoom);
      }
      return false;
  }

  componentDidMount() {
    this.map = new window.google.maps.Map(this.refs.myMap, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8
    });
  }

  add_marker(title, type) {
    const google = window.google;
    const marker = new google.maps.Marker({
      position: this.map.getCenter(),
      map: this.map,
      title
    });
    const infowindow = new google.maps.InfoWindow({
      content: `
      <div style="text-align:center">
        <h2>${title}</h2>
        <h3>Type: ${type}</h3>
        <br/>
        <img src="https://picsum.photos/200/100?random"/>
        <br/>
        <br/>
        <p>Macaroon halvah cotton candy tiramisu I love.<br/> 
        Croissant halvah bonbon powder gingerbread <br/>
        jujubes icing apple pie. Pastry pudding toffee.</p>
        <br/>
      </div>`
    });
    marker.addListener("click", function() {
      infowindow.open(this.map, marker);
    });
  }
  render() {
    return <div ref="myMap" className="map-box" />;
  }
}
