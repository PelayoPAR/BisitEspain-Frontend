import axios from "axios"

class CommentService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    })

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken")

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` }
      }

      return config
    })
  }

  createComment = async (requestBody) => {
    return this.api.post("/comment/create", requestBody)
  }

  getComments = async (requestInfo) => {
    const touristicItemType = requestInfo.isLandmark ? "Landmark" : "route"
    return this.api.get(
      `/comment/${touristicItemType}/getComments?touristicItemId=${requestInfo._id}`
    )
  }

  updateOneComment = async (requestInfo) => {
    const { commentId } = requestInfo
    return this.api.put(`/comment/${commentId}`, requestInfo)
  }

  deleteComment = async (requestInfo) => {
    const { commentId, touristicItemId, isLandmark } = requestInfo
    return this.api.delete(
      `/comment/${commentId}?touristicItemId=${touristicItemId}&isLandmark=${isLandmark}`
    )
  }
}

const commentService = new CommentService()

export default commentService
