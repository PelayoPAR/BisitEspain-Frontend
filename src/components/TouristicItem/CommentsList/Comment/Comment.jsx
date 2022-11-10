import React, { useState } from "react";
import CommentInput from "../../../CommentInput/CommentInput";
import CommentRemover from "./CommentRemover/CommentRemover";
import Button from "@mui/material/Button";
import "./Comment.css";

function Comment({
  userId,
  message,
  rating,
  commentId,
  ownerId,
  itemInfo,
  setComments,
  ownerName,
  commentDate,
}) {
  const [editing, setEditing] = useState(false);
  const isOwner = userId === ownerId;
  const formattedDate = new Date(commentDate);
  const propperDate = formattedDate.toLocaleString("en-GB");

  return (
    <div className="commentCard">
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
          <p>
            {message} - <small> Rating: {rating}</small>
          </p>
        </div>
      )}
      {isOwner && (
        <div>
          <Button
            sx={{ marginRight: "1rem" }}
            variant="outlined"
            onClick={() => {
              setEditing(!editing);
            }}
          >
            {editing ? "Cancel" : "Edit"}
          </Button>
          <CommentRemover
            commentId={commentId}
            itemInfo={itemInfo}
            setComments={setComments}
          />
        </div>
      )}
    </div>
  );
}

export default Comment;
