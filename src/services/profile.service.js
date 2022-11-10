import axios from "axios";

class ProfileService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // DELETE USER
  delete = (userId) => {
    return this.api.delete(`/profile/${userId}`);
  };
}

// Create one instance of the service
const profileService = new ProfileService();

export default profileService;
