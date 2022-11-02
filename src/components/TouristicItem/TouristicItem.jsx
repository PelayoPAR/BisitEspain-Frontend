import React, { useState } from "react"
import DisplayComment from "../DisplayComment/DisplayComment"
import CreateComment from "../CreateComment/CreateComment"

function TouristicItem({ itemInfo }) {
  const [comments, setComments] = useState([])
  const isLandmark = !!itemInfo.contentType
  console.log("Iteminfo: ", itemInfo)
  return (
    <div>
      <h2>
        <li>{isLandmark ? itemInfo.name : itemInfo.properties.name}</li>
      </h2>
      <DisplayComment
        itemInfo={itemInfo}
        comments={comments}
        setComments={setComments}
      />
      <CreateComment
        itemInfo={itemInfo}
        comments={comments}
        setComments={setComments}
      />
    </div>
  )
}

export default TouristicItem
