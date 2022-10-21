import React from "react";
import ProvinceItem from "../ProvinceItem/ProvinceItem";
import { useNavigate } from "react-router-dom";

function ProvinceList({ data, isError, isLoading }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Province List</h2>
      <ul>
        {data.map((province) => {
          return (
            <ProvinceItem
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
