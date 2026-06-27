import ky from "ky";

const api = ky.create({ prefix: "https://jsonplaceholder.typicode.com" });

export const postApi = {
  getPost: () => api.get("/posts").json(),
};
