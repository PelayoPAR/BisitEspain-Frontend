import React from "react";
import { useParams } from "react-router-dom";

function ProvinceDetails({ province, navigate }) {
  return (
    <div
      onClick={() => {
        navigate(`/${province._id}`);
      }}
    >
      {province.name}
    </div>
  );
}

export default ProvinceDetails;
