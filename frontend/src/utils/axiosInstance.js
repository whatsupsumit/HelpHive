import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
