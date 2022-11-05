import React, { useState } from "react"
import CommentInput from "../CommentInput/CommentInput"

function Comment({
  userId,
  message,
  commentId,
  ownerId,
  itemInfo,
  setComments,
}) {
  const [editing, setEditing] = useState(false)
  const isOwner = userId === ownerId
  //   console.log("Comment id at Comment ", commentId)
  return editing ? (
    <>
      <CommentInput
        setEditing={setEditing}
        setComments={setComments}
        updateMode
        commentId={commentId}
        message={message}
        itemInfo={itemInfo}
      />
      {isOwner && (
        <button
          onClick={() => {
            setEditing(false)
          }}
        >
          Cancel
        </button>
      )}
    </>
  ) : (
    <>
      <div>{message}</div>
      {isOwner && (
        <button
          onClick={() => {
            setEditing(true)
          }}
        >
          Edit Comment
        </button>
      )}
    </>
  )
}

export default Comment
