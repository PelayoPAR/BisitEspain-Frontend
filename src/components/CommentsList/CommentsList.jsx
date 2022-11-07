import React, { useState } from "react"
import commentService from "../../services/comment.service"
import Comment from "../Comment/Comment"

function CommentsList({ userId, itemInfo, comments, setComments }) {
  const isLandmark = itemInfo.contentType === "Landmark"
  const { _id } = itemInfo
  const [displayComment, setDisplayComment] = useState(false)

  const touristicItem = { _id, isLandmark }
  function handleClick(e) {
    e.preventDefault()
    setDisplayComment(!displayComment)
    readComments(e)
  }

  function readComments(e) {
    e.preventDefault()
    commentService
      .getComments(touristicItem)
      .then((response) => {
        isLandmark
          ? setComments(response.data.comments)
          : setComments(response.data.properties.comments)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div>
      <h3 onClick={(e) => handleClick(e)}>Display Comment</h3>
      {!!comments.length && displayComment && (
        <div>
          {comments.map((comment) => {
            console.log(comment)
            const {
              message,
              _id: commentId,
              owner: { _id: ownerId, name: ownerName, createdAt: commentDate },
            } = comment

            return (
              <Comment
                setComments={setComments}
                itemInfo={itemInfo}
                key={comment?._id}
                userId={userId}
                message={message}
                commentId={commentId}
                ownerId={ownerId}
                ownerName={ownerName}
                commentDate={commentDate}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default CommentsList
