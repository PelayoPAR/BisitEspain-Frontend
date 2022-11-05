import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="nav_bar">
      <Link className="navIcon" to="/">
        <img src="/img/spainContour.png" alt="profile" />
        Bisit Espain
      </Link>
      <Link className="nav_bar_text" to="/">
        Home
      </Link>

      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>

          <Link className="nav_bar_text" to={`profile/${user._id}`}>
            Profile
          </Link>

          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link className="nav_bar_text" to="/signup">
            {" "}
            Sign Up{" "}
          </Link>
          <Link className="nav_bar_text" to="/login">
            {" "}
            Login{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
