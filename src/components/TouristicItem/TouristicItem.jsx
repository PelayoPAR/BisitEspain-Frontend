import React, { useState, useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import CommentsList from "../CommentsList/CommentsList"
import CommentInput from "../CommentInput/CommentInput"

function TouristicItem({ itemInfo }) {
  const [comments, setComments] = useState([])
  const isLandmark = !!itemInfo.contentType
  const {
    user: { _id: userId },
  } = useContext(AuthContext)

  // console.log("Iteminfo: ", itemInfo)

  // TODO: Add state variable, isEdit to set the comment form to create or update comment
  return (
    <div>
      <h2>
        <li>{isLandmark ? itemInfo.name : itemInfo.properties.name}</li>
      </h2>
      <CommentsList
        userId={userId}
        itemInfo={itemInfo}
        comments={comments}
        setComments={setComments}
      />
      <CommentInput
        itemInfo={itemInfo}
        comments={comments}
        setComments={setComments}
      />
    </div>
  )
}

export default TouristicItem
