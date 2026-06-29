import { useState } from "react";

export default function SharedCard({ data }) {
  const { tittle, body } = data;
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(Math.floor(Math.random() * 1000) + 1);
  };

  return (
    <div className="bg-amber-700 rounded-lg shadow-lg p-6 w-80 ">
      <div className="flex flex-col gap-3">
        <span className="text-white">{data.title}</span>
        <span className="text-white">{number}</span>

        <button className="bg-blue-500" onClick={handleClick}>
          Change Button
        </button>
      </div>
    </div>
  );
}
