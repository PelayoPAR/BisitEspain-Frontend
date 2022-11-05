import React, { useState } from "react"
import CommentInput from "../CommentInput/CommentInput"

function Comment({ userId, message, commentId, ownerId }) {
  const [editing, setEditing] = useState(false)
  const isOwner = userId === ownerId
  //   console.log("Comment id at Comment ", commentId)
  return editing ? (
    <>
      <CommentInput updateMode commentId={commentId} message={message} />
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
          Edit
        </button>
      )}
    </>
  )
}

export default Comment
