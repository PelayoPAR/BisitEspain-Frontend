import React, { useState } from "react";
import commentService from "../../services/comment.service";

function DisplayComment({ props }) {
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const isLandmark = props.contentType === "Landmark";
  const { _id } = props;
  const [touristicItem, setTouristicItem] = useState({ _id, isLandmark });

  function handleClick(e) {
    e.preventDefault();
    //console.log("handleClick ", e);
    setTouristicItem(props._id);
    handleSubmit(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //console.log("handleSubmit ", e);
    commentService
      .getAllComments(touristicItem)
      .then((response) => {
        setResponseMessage(response.data.resCommentedLandmark);
        console.log("responseMessage ", response);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        console.log(errorMessage);
      });
  }

  //console.log(touristicItemId);

  return (
    <div>
      <h3 onClick={(e) => handleClick(e)}>Display Comment</h3>
      <div>{props._id}</div>
      <div></div>
    </div>
  );
}

export default DisplayComment;
