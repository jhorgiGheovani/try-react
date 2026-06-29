import SharedCard from "../components/shared/SharedCard";
import CartCard from "../components/shared/CartCard";
import { useState, useEffect } from "react";
import { postApi, cartApi } from "../services/api";

export default function HomePage() {
  const [post, setPost] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    postApi
      .getPost()
      .then((p) => {
        setPost(p);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    cartApi
      .getAllCart()
      .then((result) => {
        setCart(result.carts);
      })
      .catch(console.error);
  }, []);

  // console.log("POST => ", post);
  // console.log("CART => ", cart);

  // useEffect(() => {
  //   cartApi.getAllCart().then((result) => {
  //     console.log("PRINT CART:", result);
  //   });
  // }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3">
        {cart.map((item) => (
          <CartCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
