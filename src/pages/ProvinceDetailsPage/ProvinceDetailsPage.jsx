import React from "react";
import { useParams } from "react-router-dom";
import MapComponent from "../../components/MapComponent/MapComponent";
import TouristicItem from "../../components/TouristicItem/TouristicItem";
import "./ProvinceDetailsPage.css";

function ProvinceDetailsPage({ allProvinces, isError, isLoading }) {
  const { provinceId } = useParams();

  const singleProvince = allProvinces.filter((province) => {
    return province._id === provinceId;
  });

  return (
    <div className="provinceDetailsMain">
      <div className="provinceInfo">
        <h2 className="mainTitle">{singleProvince[0].name}</h2>
        {/* TODO: Add Province description? */}
        {/* <p>{singleProvince[0].description}</p> */}
        {singleProvince[0].contents.landmarks && (
          <div>
            <h2 className="secondaryTitle">
              Landmarks of {singleProvince[0].name}
            </h2>
            <div>
              {singleProvince[0].contents.landmarks.map((landmark) => {
                return <TouristicItem key={landmark._id} itemInfo={landmark} />;
              })}
            </div>
          </div>
        )}
        {singleProvince[0].contents.routes && (
          <div>
            <h2 className="secondaryTitle">
              Routes of {singleProvince[0].name}
            </h2>
            <div>
              {singleProvince[0].contents.routes.map((route) => {
                return <TouristicItem key={route._id} itemInfo={route} />;
              })}
            </div>
          </div>
        )}
      </div>
      <div className="provinceMap">
        <MapComponent selectedProvince={singleProvince[0]} />
      </div>
    </div>
  );
}

export default ProvinceDetailsPage;
