import React from "react";
import L from "leaflet";

export default class Map extends React.Component {
  render() {
    return <div className="map" ref={ref => (this.container = ref)} />;
  }

  componentDidMount() {
    setTimeout(() => {
      this.map = L.map(
        this.container,
        {
          center: [52.520008, 13.404954],
          zoom: 12,
          maxZoom: 18,
          layers: new L.TileLayer(
            "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          )
        },
        100
      );
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }
}
