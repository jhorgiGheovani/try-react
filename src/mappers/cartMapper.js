export const mapCartProduct = (raw) => ({
  id: raw.id,
  title: raw.title,
  price: raw.price,
  quantity: raw.quantity,
  total: raw.total,
  discountPercentage: raw.discountPercentage,
  discountedTotal: raw.discountedTotal,
  thumbnail: raw.thumbnail,
});

export const mapCart = (raw) => ({
  id: raw.id,
  products: raw.products.map(mapCartProduct),
  total: raw.total,
  discountedTotal: raw.discountedTotal,
  userId: raw.userId,
  totalProducts: raw.totalProducts,
  totalQuantity: raw.totalQuantity,
});

export const mapCartsResponse = (raw) => ({
  carts: raw.carts.map(mapCart),
  total: raw.total,
  skip: raw.skip,
  limit: raw.limit,
});
