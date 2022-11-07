import React, { useState, useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import CommentsList from "./CommentsList/CommentsList"
import CommentInput from "../CommentInput/CommentInput"

function TouristicItem({ itemInfo }) {
  const [comments, setComments] = useState([])
  const isLandmark = !!itemInfo.contentType
  const authData = useContext(AuthContext)
  console.log("authData issss: ", authData)
  let userId = authData?.user ? authData.user._id : "guest"

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
      {userId !== "guest" && (
        <CommentInput
          itemInfo={itemInfo}
          comments={comments}
          setComments={setComments}
        />
      )}
    </div>
  )
}

export default TouristicItem
