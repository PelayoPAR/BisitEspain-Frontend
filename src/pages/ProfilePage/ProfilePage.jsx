import "./ProfilePage.css"
import { useNavigate, useParams } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import profileService from "../../services/profile.service"

function ProfilePage() {
  const [errorMessage, setErrorMessage] = useState(undefined)
  const { userId } = useParams()
  const navigate = useNavigate()
  const { logOutUser } = useContext(AuthContext)
  const [responseMessage, setResponseMessage] = useState("")

  const handleSubmit = () => {
    const requestBody = userId
    console.error(errorMessage)

    profileService
      .delete(requestBody)
      .then((response) => {
        setResponseMessage(response.data.message)
        navigate("/profile", { responseMessage })
        logOutUser()
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message)
      })
  }
  return (
    <div>
      <h1>Profile page</h1>
      <button
        type="submit"
        onClick={() => {
          handleSubmit()
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
  )
}

export default ProfilePage
