import React from "react";
import ProvinceItem from "./ProvinceItem/ProvinceItem";
import { useNavigate } from "react-router-dom";
import "./ProvinceList.css";

function ProvinceList({
  allProvinces,
  isError,
  isLoading,
  highlightedProvince,
  setHighlightedProvince,
}) {
  const navigate = useNavigate();

  return (
    <div className="provinceListWrapper">
      <h2 className="provinceTitle">Province List</h2>
      <ul>
        {allProvinces.map((province) => {
          return (
            <ProvinceItem
              highlightedProvince={highlightedProvince}
              province={province}
              key={province._id}
              navigate={navigate}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ProvinceList;
