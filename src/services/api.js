import ky from "ky";
import { mapCartsResponse } from "../mappers/cartMapper";

const api = ky.create({ prefix: "https://jsonplaceholder.typicode.com" });

const dummmyApi = ky.create({ prefix: "https://dummyjson.com/carts" });

export const postApi = {
  getPost: () => api.get("/posts").json(),
};

export const cartApi = {
  getAllCart: async () => {
    const raw = await dummmyApi.get("/").json();
    return mapCartsResponse(raw);
  },
};
