import axios from "axios";

axios.defaults.withCredentials = true;
export const BACKEND_HOST = process.env.REACT_APP_BACKEND_HOST;
