import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

function MapComponent({ selectedProvince }) {
  console.log(selectedProvince);
  const [viewport, setViewport] = useState({
    longitude: selectedProvince.center.longitude,
    latitude: selectedProvince.center.latitude,
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
        onMove={(evt) => setViewport(evt.viewport)}
      >
        {selectedProvince.contents.landmarks.map((landmark) => (
          <Marker
            key={landmark._id}
            latitude={landmark.position.latitude}
            longitude={landmark.position.longitude}
          >
            <h1>LANDMARK</h1>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}

export default MapComponent;
