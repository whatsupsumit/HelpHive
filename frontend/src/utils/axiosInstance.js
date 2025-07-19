import axios from "axios";
const BASE_URL = "https://help-hive-api.vercel.app/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
