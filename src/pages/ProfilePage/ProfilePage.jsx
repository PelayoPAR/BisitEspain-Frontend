import authService from "../../services/auth.service";
import "./ProfilePage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";

function ProfilePage() {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { userId } = useParams();
  const navigate = useNavigate();
  const { logOutUser } = useContext(AuthContext);

  const handleSubmit = () => {
    console.log("Handle submit reached");
    const requestBody = userId;
    console.log(errorMessage);

    authService
      .delete(requestBody)
      .then((response) => {
        logOutUser();
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  };
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
    </div>
  );
}

export default ProfilePage;
