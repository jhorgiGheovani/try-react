import SharedCard from "../components/shared/SharedCard";
import { useState, useEffect } from "react";
import { postApi } from "../services/api";

const dummyData = [
  { tittle: "Card Pertama", body: "Ini isi dari card pertama" },
  { tittle: "Card Kedua", body: "Ini isi dari card kedua" },
  { tittle: "Card Ketiga", body: "Ini isi dari card ketiga" },
];

export default function HomePage() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    postApi
      .getPost()
      .then((p) => {
        setPost(p);
      })
      .catch(console.error);
  });

  console.log("POST => ", post);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3">
        {post.map((item) => (
          <SharedCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
