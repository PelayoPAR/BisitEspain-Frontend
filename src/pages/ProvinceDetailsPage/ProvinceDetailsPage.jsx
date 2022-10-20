import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProvinceDetails from "../../components/ProvinceDetails/ProvinceDetails";

function ProvinceDetailsPage({ data, isError, isLoading }) {
  const { provinceId } = useParams();
  const singleProvince = data.filter((province) => {
    return province._id === provinceId;
  });

  return (
    <div>
      <h2>Province Details Page</h2>
      <div>{singleProvince[0].name}</div>
    </div>
  );
}

export default ProvinceDetailsPage;
