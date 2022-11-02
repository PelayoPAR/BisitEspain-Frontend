import axios from "axios";

class CommentService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  createComment = async (requestBody) => {
    return this.api.post("/comment/create", requestBody);
  };

  getAllComments = async (requestBody) => {
    console.log(requestBody);
    return this.api.post("/comment/getComments", requestBody);
  };

  // getOneComment = async (id) => {
  //   return this.api.get(`/comment/${id}`);
  // };

  // updateOneComment = async (id, requestBody) => {
  //   return this.api.put(`/comment/update/${id}`, requestBody);
  // };

  // deleteComment = async (id) => {
  //   return this.api.delete(`/comment/delete/${id}`);
  // };
}

const commentService = new CommentService();

export default commentService;
