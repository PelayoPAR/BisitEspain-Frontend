import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import ProvinceDetails from "../ProvinceDetails/ProvinceDetails";
import { useNavigate } from "react-router-dom";

function ProvinceList({ data, isError, isLoading }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Province List</h2>
      <ul>
        {data.map((province) => {
          return (
            <ProvinceDetails
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
