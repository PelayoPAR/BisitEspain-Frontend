import React, { useState } from "react";
import ReactMapGL, { Source, Layer, Marker, Popup } from "react-map-gl";
import MapRecenterBtn from "./MapRecenterBtn/MapRecenterBtn";
import CategoryText from "./CategoryText/CategoryText";
import "./MapComponent.css";

function MapComponent({ selectedProvince }) {
  const [viewport, setViewport] = useState({
    longitude: selectedProvince.center.longitude,
    latitude: selectedProvince.center.latitude,
    width: "100vw",
    height: "100vh",
    zoom: 8.5,
  });

  const [selectedLandmark, setSelectedLandmark] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onMove={(evt) => setViewport(evt.viewport)}
      >
        <MapRecenterBtn
          selectedProvince={selectedProvince}
          setViewport={setViewport}
          viewport={viewport}
        />
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
              "line-color": "rgba(232, 95, 42, 0.7)",
              "line-width": 8,
            }}
          />
        </Source>

        {selectedProvince.contents.landmarks.map((landmark) => (
          <Marker
            key={landmark._id}
            latitude={landmark.position.latitude}
            longitude={landmark.position.longitude}
            onClick={() => {
              console.log("clickity");
              setViewport({
                latitude: landmark.position.latitude,
                longitude: landmark.position.longitude,
                zoom: 12,
              });
              // this._map.flyTo([
              //   landmark.position.latitude,
              //   landmark.position.longitude,
              //   2500,
              // ]);
            }}
          >
            <div
              className="mapMarker"
              onClick={(evt) => {
                evt.stopPropagation();
                setSelectedLandmark(landmark);
                setShowPopup(true);
              }}
            >
              <img src="/img/32x32.png" alt="Marker" />
            </div>
            {showPopup && (
              <Popup
                style={{
                  minWidth: "50px",
                  minHeight: "50px",
                }}
                longitude={selectedLandmark.position.longitude}
                latitude={selectedLandmark.position.latitude}
                anchor="bottom"
                closeOnClick="false"
                onClose={() => setShowPopup(false)}
              >
                <div>
                  <h3>{selectedLandmark.name}</h3>
                  <CategoryText category={selectedLandmark.category} />
                  {selectedLandmark.URL.length > 5 && (
                    <p>
                      <a
                        href={selectedLandmark.URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        More info
                      </a>
                    </p>
                  )}
                </div>
              </Popup>
            )}
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}

export default MapComponent;
