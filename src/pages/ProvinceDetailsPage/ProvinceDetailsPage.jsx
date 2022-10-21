import React from "react";
import { useParams } from "react-router-dom";

function ProvinceDetailsPage({ data, isError, isLoading }) {
  const { provinceId } = useParams();
  const singleProvince = data.filter((province) => {
    return province._id === provinceId;
  });
  console.log(singleProvince);
  return (
    <div>
      <h2>Province Details Page</h2>
      <div>{singleProvince[0].name}</div>
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
      </div>
    </div>
  );
}

export default ProvinceDetailsPage;
