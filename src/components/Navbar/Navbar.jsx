import "./Navbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

  return (
    <nav className="nav_bar">
      <Link className="navIcon" to="/">
        <img src="/img/spainContour.png" alt="profile" />
        <p>Bisit Espain</p>
      </Link>
      <Link className="nav_bar_text" to="/">
        <p>Home</p>
      </Link>

      {isLoggedIn && (
        <>
          <p className="nav_bar_text" onClick={logOutUser}>
            Logout
          </p>

          <Link className="nav_bar_text" to={`profile/${user._id}`}>
            <p>Profile</p>
          </Link>

          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link className="nav_bar_text" to="/signup">
            <p>Sign Up</p>
          </Link>
          <Link className="nav_bar_text" to="/login">
            <p>Login</p>
          </Link>
        </>
      )}
    </nav>
  )
}

export default Navbar
