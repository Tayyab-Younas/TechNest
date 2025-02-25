import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === Number(id))
  );
  const dispatch = useDispatch();

  if (!product) return <p>Product not found!</p>;

  return (
    <div className="p-6">
      <img src={product.Image} alt={product.name} className="w-64 h-64 object-cover mx-auto" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-xl font-semibold mt-2">{product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
