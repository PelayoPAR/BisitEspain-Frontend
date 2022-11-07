import React, { useState } from "react"
import CommentInput from "../../../CommentInput/CommentInput"
import CommentRemover from "./CommentRemover/CommentRemover"

function Comment({
  userId,
  message,
  commentId,
  ownerId,
  itemInfo,
  setComments,
  ownerName,
  commentDate,
}) {
  const [editing, setEditing] = useState(false)
  const isOwner = userId === ownerId
  const formattedDate = new Date(commentDate)
  const propperDate = formattedDate.toLocaleString("en-GB")

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
        <div>
          <p>
            <b>{ownerName}</b> <small> - {propperDate} </small>
          </p>
          <p>{message}</p>
        </div>
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
