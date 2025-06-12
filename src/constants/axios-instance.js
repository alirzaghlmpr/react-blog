import axios from "axios";
export const clientApi = axios.create({
  baseURL: "https://dummyjson.com",
});

export default clientApi;
