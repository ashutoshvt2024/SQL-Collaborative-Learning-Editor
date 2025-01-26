import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000", // Backend API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add an interceptor to include the JWT token in headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;