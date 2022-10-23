import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

// function MapComponent({ viewport, mapboxApiAccessToken }) {
//     const [viewport, setViewport] = useState({
//       latitude: 37.3901,
//       longitude: -5.9947,
//       width: "100vw",
//       height: "100vh",
//       zoom: 10,
//     });
function MapComponent() {
  const [viewport, setViewport] = useState({
    longitude: -5.9947,
    latitude: 37.3901,
    width: "100vw",
    height: "100vh",
    zoom: 8,
  });
  console.log(setViewport);
  return (
    <div style={{ height: "800px", width: "800px" }}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"

        // {...viewport}
        // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        markers here
      </ReactMapGL>
    </div>
  );
}

export default MapComponent;
