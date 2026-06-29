import SharedCard from "../components/shared/SharedCard";
import CartCard from "../components/shared/CartCard";
import { useState, useEffect } from "react";
import { postApi, cartApi } from "../services/api";
import { useTheme } from "../context/ThemeContext";

export default function HomePage() {
  const [post, setPost] = useState([]);
  const [cart, setCart] = useState([]);
  const { isDark, toggleTheme } = useTheme();

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
    <div className={`min-h-screen p-6 ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="flex justify-center mb-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold"
        >
          Switch to {isDark ? "Light" : "Dark"} Mode
        </button>
      </div>
      <div className="flex flex-col gap-3 items-center">
        {cart.map((item) => (
          <CartCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
