import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import CommentsList from "./CommentsList/CommentsList";
import CommentInput from "../CommentInput/CommentInput";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./TouristicItem.css";

function TouristicItem({ itemInfo }) {
  const [comments, setComments] = useState([]);
  const isLandmark = !!itemInfo.contentType;
  const authData = useContext(AuthContext);
  let userId = authData?.user ? authData.user._id : "guest";
  const [displayComment, setDisplayComment] = useState(false);
  const [displayTouristicInfo, setDisplayTouristicInfo] = useState(false);

  return (
    <div>
      <div className="touristicItemWrapper">
        <div
          className="touristicItem"
          onClick={() => setDisplayTouristicInfo(!displayTouristicInfo)}
        >
          <div className="touristicItemTitle">
            <h2 className="touristicItemName">
              {isLandmark ? itemInfo.name : itemInfo.properties.name}
            </h2>
            {displayTouristicInfo ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </div>
          <div className="touristicItemImg">
            <img
              src={isLandmark ? itemInfo.images : itemInfo.properties.images}
              alt="Espain pic"
            ></img>
          </div>
        </div>

        {displayTouristicInfo && (
          <div className="touristicItemDescription">
            <p>
              {isLandmark
                ? itemInfo.description
                : itemInfo.properties.description}
            </p>
          </div>
        )}
      </div>

      {displayTouristicInfo && (
        <div>
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
        </div>
      )}
    </div>
  );
}

export default TouristicItem;
