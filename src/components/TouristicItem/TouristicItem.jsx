import React, { useState, useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import CommentsList from "./CommentsList/CommentsList"
import CommentInput from "../CommentInput/CommentInput"

function TouristicItem({ itemInfo }) {
  const [comments, setComments] = useState([])
  const isLandmark = !!itemInfo.contentType
  const authData = useContext(AuthContext)
  let userId = authData?.user ? authData.user._id : "guest"
  const [displayComment, setDisplayComment] = useState(false)
  const [displayTouristicInfo, setDisplayTouristicInfo] = useState(false)

  return (
    <div>
      <div onClick={() => setDisplayTouristicInfo(!displayTouristicInfo)}>
        <h2>{isLandmark ? itemInfo.name : itemInfo.properties.name}</h2>
        <img
          src={isLandmark ? itemInfo.images : itemInfo.properties.images}
          alt="Espain pic"
        ></img>
      </div>
      {displayTouristicInfo && (
        <>
          <p>
            {isLandmark
              ? itemInfo.description
              : itemInfo.properties.description}
          </p>
          <CommentsList
            userId={userId}
            itemInfo={itemInfo}
            comments={comments}
            setComments={setComments}
            displayComment={displayComment}
            setDisplayComment={setDisplayComment}
          />

          {userId !== "guest" && (
            <CommentInput
              itemInfo={itemInfo}
              comments={comments}
              setComments={setComments}
              setDisplayComment={setDisplayComment}
            />
          )}
        </>
      )}
    </div>
  )
}

export default TouristicItem
