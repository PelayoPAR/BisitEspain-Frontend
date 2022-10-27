import React, { useState } from "react";
import ReactMapGL, { Source, Layer, Marker } from "react-map-gl";

function MapComponent({ selectedProvince }) {
  console.log("Selected Province: ", selectedProvince);
  const [viewport, setViewport] = useState({
    longitude: selectedProvince.center.longitude,
    latitude: selectedProvince.center.latitude,
    width: "100vw",
    height: "100vh",
    zoom: 8,
  });
  // console.log(setViewport);
  return (
    <div style={{ height: "800px", width: "800px" }}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onMove={(evt) => setViewport(evt.viewport)}
      >
        {/* PENDING DYNAMIC RENDERING OF ROUTES */}
        <Source
          id="polylineLayer"
          type="geojson"
          data={selectedProvince.contents.routes[0]}
        >
          <Layer
            id="lineLayer"
            type="line"
            source="my-data"
            layout={{
              "line-join": "round",
              "line-cap": "round",
            }}
            paint={{
              "line-color": "rgba(3, 170, 238, 0.5)",
              "line-width": 5,
            }}
          />
        </Source>

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
