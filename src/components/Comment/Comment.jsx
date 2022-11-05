import React, { useState } from "react"
import CommentInput from "../CommentInput/CommentInput"
import CommentRemover from "../CommentRemover/CommentRemover"

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
  return (
    <>
      {editing ? (
        <CommentInput
          setEditing={setEditing}
          setComments={setComments}
          updateMode
          commentId={commentId}
          message={message}
          itemInfo={itemInfo}
        />
      ) : (
        <div>{message}</div>
      )}
      {isOwner && (
        <div>
          <button
            onClick={() => {
              setEditing(!editing)
            }}
          >
            {editing ? "Cancel" : "Edit"}
          </button>
          <CommentRemover
            commentId={commentId}
            itemInfo={itemInfo}
            setComments={setComments}
          />
        </div>
      )}
    </>
  )
}

export default Comment
