import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MapComponent from "../../components/MapComponent/MapComponent";

function ProvinceDetailsPage({ data, isError, isLoading }) {
  const { provinceId } = useParams();
  // const [viewport, setViewport] = useState({
  //   latitude: 37.3901,
  //   longitude: -5.9947,
  //   width: "100vw",
  //   height: "100vh",
  //   zoom: 10,
  // });
  const singleProvince = data.filter((province) => {
    return province._id === provinceId;
  });
  console.log(singleProvince);
  return (
    <div>
      <h2>{singleProvince[0].name}</h2>

      <div>
        {singleProvince[0].contents.landmarks && (
          <div>
            <h2>Landmarks</h2>
            <ul>
              {singleProvince[0].contents.landmarks.map((landmark) => {
                return (
                  <div key={landmark._id}>
                    <li>{landmark.name}</li>
                  </div>
                );
              })}
            </ul>
          </div>
        )}
        {singleProvince[0].contents.routes && (
          <div>
            <h2>Routes</h2>
            <ul>
              {singleProvince[0].contents.routes.map((route) => {
                return (
                  <div key={route._id}>
                    <li>{route.name}</li>
                  </div>
                );
              })}
            </ul>
          </div>
        )}
        <div>
          <MapComponent />
        </div>
        {/* <div>
          <MapComponent
            viewport={viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          />
        </div> */}
      </div>
    </div>
  );
}

export default ProvinceDetailsPage;
