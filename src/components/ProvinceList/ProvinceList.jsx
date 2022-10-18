import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

function ProvinceList() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  console.log(process.env.REACT_APP_SERVER_URL);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(process.env.REACT_APP_SERVER_URL)
      .then((result) => {
        setData(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div>
      <h2>Province List</h2>
      <ul>
        {data.map((province) => {
          return <li key={province._id}>{province.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default ProvinceList;
