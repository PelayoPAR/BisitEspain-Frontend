import "./ProfilePage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import profileService from "../../services/profile.service";

function ProfilePage() {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { userId } = useParams();
  const navigate = useNavigate();
  const { logOutUser } = useContext(AuthContext);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = () => {
    // console.log("Handle submit reached");
    const requestBody = userId;
    console.log(errorMessage);

    profileService
      .delete(requestBody)
      .then((response) => {
        // console.log("resoponsio: ", response.data.message);
        setResponseMessage(response.data.message);
        navigate("/profile", { responseMessage });
        logOutUser();
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  };
  // console.log("responsemessageesteitvariabol:", responseMessage);
  return (
    <div>
      <h1>Profile page</h1>
      <button
        type="submit"
        onClick={() => {
          handleSubmit();
        }}
      >
        Delete Profile
      </button>
      {responseMessage && (
        <div>
          <h4>{responseMessage}</h4>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
