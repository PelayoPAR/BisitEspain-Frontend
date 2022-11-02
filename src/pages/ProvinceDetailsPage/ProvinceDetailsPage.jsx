import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CreateComment from "../../components/CreateComment/CreateComment";
import DisplayComment from "../../components/DisplayComment/DisplayComment";
import MapComponent from "../../components/MapComponent/MapComponent";
import commentService from "../../services/comment.service";

function ProvinceDetailsPage({ allProvinces, isError, isLoading }) {
  const { provinceId } = useParams();
  // const [clickedLandmark, setClickedLandmark] = useState(null);
  // const [responseMessage, setResponseMessage] = useState("");
  // const [errorMessage, setErrorMessage] = useState(undefined);

  // function sendLandmarkId(e) {
  //   e.preventDefault();
  //   commentService
  //     .getAllComments(clickedLandmark)
  //     .then((response) => {
  //       setResponseMessage(response.data.message);
  //       console.log(responseMessage);
  //     })
  //     .catch((err) => {
  //       setErrorMessage(err.response.data.message);
  //       console.log(errorMessage);
  //     });
  // }

  // function triggerFunctions() {
  //   setClickedLandmark(landmark._id);
  //   sendLandmarkId(e);
  // }

  const singleProvince = allProvinces.filter((province) => {
    return province._id === provinceId;
  });

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
                    {/* <h2 onClick={() => triggerFunctions(e, landmark._id)}> */}
                    <h2>
                      <li>{landmark.name}</li>
                    </h2>
                    {/* {landmark.comments.map((comment) => )} */}
                    <DisplayComment props={landmark} />

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
                    <DisplayComment props={route} />
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
