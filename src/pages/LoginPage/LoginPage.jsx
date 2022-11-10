import "./LoginPage.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    // Send a request to the server using axios
    /* 
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`)
      .then((response) => {})
    */

    // Or using a service
    authService
      .login(requestBody)
      .then((response) => {
        // If the POST request is successful store the authentication token,
        // after the token is stored authenticate the user
        // and at last navigate to the home page
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="loginMain">
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <div className="loginForm">
          <div className="loginInput">
            <div className="loginEmailInput">
              <TextField
                // sx={{ height: "1rem" }}
                id="outlined-basic"
                variant="outlined"
                type="email"
                name="email"
                label="Email"
                value={email}
                onChange={handleEmail}
                // helperText="Email"
              />
            </div>
            <div className="loginPwInput">
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="password"
                name="password"
                label="Password"
                value={password}
                onChange={handlePassword}
              />
            </div>
          </div>
          {/* <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          /> */}

          {/* <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          /> */}

          <Button sx={{ width: "10rem" }} variant="contained" type="submit">
            Login
          </Button>
        </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  );
}

export default LoginPage;
