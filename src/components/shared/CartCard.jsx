import { useTheme } from "../../context/ThemeContext";

export default function CartCard({ data }) {
  const { products, total, discountedTotal } = data;
  const { isDark } = useTheme();

  return (
    <div className={`rounded-xl shadow-md p-4 mb-4 border w-96 ${isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-200 text-black"}`}>
      <div className="flex flex-col gap-3">
        {products.map((product) => (
          <div key={product.id} className="flex items-center gap-3">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-14 h-14 rounded-lg object-cover"
            />
            <div className="flex-1">
              <p className="font-semibold text-sm">{product.title}</p>
              <p className="text-xs text-gray-400">Qty: {product.quantity} · ${product.price}</p>
            </div>
            <p className="font-semibold text-sm">${product.total}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4 pt-3 border-t border-gray-100">
        <span className="text-sm text-gray-400 line-through">Total: ${total}</span>
        <span className="text-sm font-bold text-green-700">After Discount: ${discountedTotal}</span>
      </div>
    </div>
  );
}
