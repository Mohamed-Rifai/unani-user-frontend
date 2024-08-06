
import axios from "axios";


const  baseUrl = process.env.REACT_APP_BASE_URL;

// Create an Axios instance with default options
const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export default instance;