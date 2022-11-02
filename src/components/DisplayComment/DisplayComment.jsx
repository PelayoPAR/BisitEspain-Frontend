import React from "react"
import commentService from "../../services/comment.service"

function DisplayComment({ itemInfo, comments, setComments }) {
  const isLandmark = itemInfo.contentType === "Landmark"
  const { _id } = itemInfo

  const touristicItem = { _id, isLandmark }
  function handleClick(e) {
    e.preventDefault()
    //console.log("handleClick ", e);

    handleSubmit(e)
  }

  function handleSubmit(e) {
    e.preventDefault()
    //console.log("handleSubmit ", e);
    console.log(touristicItem)
    commentService
      .getComments(touristicItem)
      .then((response) => {
        setComments(response.data.comments)
        // console.log(response)
      })
      .catch((error) => {
        // setErrorMessage(error)
        console.error(error)
      })
  }
  // console.log("comments: ", comments)
  //console.log(touristicItemId);

  return (
    <div>
      <h3 onClick={(e) => handleClick(e)}>Display Comment</h3>
      {console.log("comments at display: ", comments)}
      {!!comments.length && (
        <div>
          {comments.map((comment) => {
            return <div key={comment?._id}>{comment?.message}</div>
          })}
        </div>
      )}
    </div>
  )
}

export default DisplayComment
