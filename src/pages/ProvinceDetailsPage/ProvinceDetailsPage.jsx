import React from "react";
import { useParams } from "react-router-dom";
import CreateComment from "../../components/CreateComment/CreateComment";
import MapComponent from "../../components/MapComponent/MapComponent";

function ProvinceDetailsPage({ allProvinces, isError, isLoading }) {
  const { provinceId } = useParams();

  const singleProvince = allProvinces.filter((province) => {
    return province._id === provinceId;
  });
  // console.log(singleProvince);
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
                    <h2>
                      <li>{landmark.name}</li>
                    </h2>
                    <CreateComment props={landmark} />
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
                    <h2>
                      <li>{route.properties.name}</li>
                    </h2>
                    <CreateComment props={route} />
                  </div>
                );
              })}
            </ul>
          </div>
        )}
        <div>
          <MapComponent selectedProvince={singleProvince[0]} />
        </div>
      </div>
    </div>
  );
}

export default ProvinceDetailsPage;
