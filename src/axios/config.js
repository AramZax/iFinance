import axios from "axios";

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: "https://api.example.com", // Replace with your API base URL
  //   timeout: 10000, // Set a timeout for requests
  headers: {
    "Content-Type": "application/json",
    // Add other default headers here
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify the request config before sending it
    // For example, add an authorization token if available
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error here
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx causes this function to trigger
    return response;
  },
  (error) => {
    // Any status codes outside the range of 2xx cause this function to trigger
    // Handle response error here
    if (error.response.status === 401) {
      // For example, handle unauthorized errors
      // Redirect to login page, log out the user, etc.
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
