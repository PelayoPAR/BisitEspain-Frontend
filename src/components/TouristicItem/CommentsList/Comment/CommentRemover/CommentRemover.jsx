import React from "react"
import commentService from "../../../../../services/comment.service"

function CommentRemover({ setComments, itemInfo, commentId }) {
  const isLandmark = itemInfo.contentType === "Landmark"
  const { _id } = itemInfo
  const touristicItem = { _id, isLandmark }

  const handleClick = async () => {
    await commentService.deleteComment({
      commentId,
      touristicItemId: _id,
      isLandmark,
    })
    await commentService
      .getComments(touristicItem)
      .then((response) => {
        console.log("CommentRemover response", response)
        isLandmark
          ? setComments(response.data.comments)
          : setComments(response.data.properties.comments)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return <button onClick={handleClick}>Delete</button>
}

export default CommentRemover
