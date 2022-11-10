import "./ProfilePage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import profileService from "../../services/profile.service";
import Button from "@mui/material/Button";

function ProfilePage() {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { userId } = useParams();
  const navigate = useNavigate();

  const [responseMessage, setResponseMessage] = useState("");
  const { logOutUser } = useContext(AuthContext);
  const authData = useContext(AuthContext);
  // const formattedDate = new Date(userDate);
  // const propperDate = formattedDate.toLocaleString("en-GB");
  // const userDate = authData.user.exp;

  console.log(authData);

  const handleSubmit = () => {
    const requestBody = userId;
    console.error(errorMessage);

    profileService
      .delete(requestBody)
      .then((response) => {
        setResponseMessage(response.data.message);
        navigate("/profile", { responseMessage });
        logOutUser();
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  };
  return (
    <div className="profileMain">
      <h2>Profile page</h2>

      <div className="profileInfo">
        <p>
          Your user name is: <b>{authData.user.name}</b>
        </p>
        <p>
          Your email account is: <b>{authData.user.email}</b>
        </p>
      </div>
      <Button
        sx={{ width: "10rem" }}
        variant="contained"
        type="submit"
        color="error"
        onClick={() => {
          handleSubmit();
        }}
      >
        Delete Profile
      </Button>
      {responseMessage && (
        <div>
          <h4>{responseMessage}</h4>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
