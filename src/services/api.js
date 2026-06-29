import ky from "ky";

const api = ky.create({ prefix: "https://jsonplaceholder.typicode.com" });

const dummmyApi = ky.create({ prefix: "https://dummyjson.com/carts" });

export const postApi = {
  getPost: () => api.get("/posts").json(),
};

export const cartApi = {
  getAllCart: () => dummmyApi.get("").json(),
};
