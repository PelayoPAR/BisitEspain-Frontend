import React, { useState } from "react";
import ReactMapGL, { Source, Layer, Marker, Popup } from "react-map-gl";

function TestMapPage() {
  const [viewport, setViewport] = useState({
    longitude: -5.9947,
    latitude: 37.3901,
    width: "100vw",
    height: "100vh",
    zoom: 5,
  });
  // console.log(setViewport);

  // const dataOne = {
  //   type: "Feature",
  //   properties: {},
  //   geometry: {
  //     type: "LineString",
  //     coordinates: [
  //       [-5.993348, 37.386016],
  //       [-5.986878, 37.37729],
  //     ],
  //   },
  // };
  const dataTwo = {
    type: "Feature",
    properties: { name: "Seville Test Route", category: "Urban" },
    geometry: {
      type: "LineString",
      coordinates: [
        [-5.9939, 37.38539],
        [-5.99363, 37.38483],
        [-5.99358, 37.38446],
        [-5.99356, 37.38431],
        [-5.99356, 37.3841],
        [-5.99377, 37.384],
        [-5.99385, 37.38394],
        [-5.99403, 37.38372],
        [-5.9943, 37.38364],
        [-5.99549, 37.3833],
        [-5.99641, 37.38299],
        [-5.99656, 37.38312],
        [-5.99674, 37.38301],
        [-5.9962, 37.38244],
        [-5.99593, 37.38209],
        [-5.99567, 37.3822],
        [-5.99568, 37.38222],
        [-5.99556, 37.38228],
        [-5.99461, 37.38217],
        [-5.99453, 37.38217],
        [-5.99446, 37.38219],
        [-5.99437, 37.38216],
        [-5.99433, 37.38213],
        [-5.99401, 37.38212],
        [-5.99397, 37.38215],
        [-5.99393, 37.3822],
        [-5.99365, 37.38217],
        [-5.99354, 37.38212],
        [-5.99339, 37.38192],
        [-5.99339, 37.38184],
        [-5.9937, 37.38104],
        [-5.99282, 37.38082],
        [-5.99271, 37.38075],
        [-5.99267, 37.38064],
        [-5.99263, 37.38028],
        [-5.99255, 37.38015],
        [-5.99241, 37.38005],
        [-5.9919, 37.37992],
        [-5.99009, 37.37945],
        [-5.98959, 37.3793],
        [-5.98959, 37.37919],
        [-5.98954, 37.37913],
        [-5.98943, 37.37906],
        [-5.98933, 37.37904],
        [-5.98924, 37.37904],
        [-5.98911, 37.37884],
        [-5.98907, 37.37875],
        [-5.98897, 37.3788],
        [-5.98886, 37.37872],
        [-5.98857, 37.37824],
        [-5.98785, 37.37706],
      ],
    },
  };

  return (
    <div style={{ width: "500px", height: "500px" }}>
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onMove={(evt) => setViewport(evt.viewport)}
      >
        <Source id="polylineLayer" type="geojson" data={dataTwo}>
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
          <Marker longitude={-5.9939} latitude={37.38539}>
            <Popup longitude={-5.9939} latitude={37.38539} anchor="bottom">
              Catedral de Sevilla
            </Popup>
          </Marker>
        </Source>
        markers here
      </ReactMapGL>
    </div>
  );
}

export default TestMapPage;
