import axios from "axios";

export const productsApi = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5 * 1000,
});
