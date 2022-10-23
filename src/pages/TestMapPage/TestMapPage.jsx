import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

function TestMapPage() {
  //   return (
  //     <ReactMapGL
  //       initialViewState={{
  //         longitude: -122.4,
  //         latitude: 37.8,
  //         zoom: 14,
  //       }}
  //       style={{ width: 600, height: 400 }}
  //       mapStyle="mapbox://styles/mapbox/streets-v9"
  //     />
  //   );

  const [viewport, setViewport] = useState({
    longitude: -5.9947,
    latitude: 37.3901,
    width: "100vw",
    height: "100vh",
    zoom: 5,
  });
  console.log(setViewport);
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <ReactMapGL
        // {...viewport}
        //   mapboxApiAccessToken={mapboxApiAccessToken}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      >
        markers here
      </ReactMapGL>
    </div>
  );
}

export default TestMapPage;
