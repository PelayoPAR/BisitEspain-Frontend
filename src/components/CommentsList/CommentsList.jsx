import React from "react"
import commentService from "../../services/comment.service"
import Comment from "../Comment/Comment"

function CommentsList({ userId, itemInfo, comments, setComments }) {
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
            const {
              message,
              _id: commentId,
              owner: { _id: ownerId },
            } = comment

            return (
              <Comment
                key={comment?._id}
                userId={userId}
                message={message}
                commentId={commentId}
                ownerId={ownerId}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default CommentsList
