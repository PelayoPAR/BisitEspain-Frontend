import React from "react"
import DisplayComment from "../DisplayComment/DisplayComment"
import CreateComment from "../CreateComment/CreateComment"

function TouristicItem({ itemInfo }) {
  const isLandmark = !!itemInfo.contentType
  console.log("Iteminfo: ", itemInfo)
  return (
    <div>
      <h2>
        <li>{isLandmark ? itemInfo.name : itemInfo.properties.name}</li>
      </h2>
      <DisplayComment props={itemInfo} />
      <CreateComment props={itemInfo} />
    </div>
  )
}

export default TouristicItem
