import axios from "axios";

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/35be4b4c9cb94f8d9bb3e4414f5f296a",
  timeout: 10000,
});
