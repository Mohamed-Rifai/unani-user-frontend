
import axios from "axios";
const  baseUrl = `http://localhost:5000/api`;

// Create an Axios instance with default options
const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export default instance;