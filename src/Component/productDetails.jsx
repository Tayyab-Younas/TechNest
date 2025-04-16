import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // Get the product by ID from the Redux store
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === id)
  );

  // Handle adding product to cart and show success toast
  const handleCart = (product) => {
    dispatch(addToCart(product));

    toast.success("added to cart", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    });
  };

  // Show fallback message if product is not found
  if (!product) return <p>Product not found!</p>;

  return (
    <div className="sm:flex items-center justify-center gap-10 p-10">
      {/* Product Image */}
      <div className="sm:w-[40%] md:w-[400px]">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={product.Image}
          alt={product.name}
        />
      </div>

      {/* Product Info */}
      <div className="sm:w-[50%] ">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-black mt-2 font-sans">{product.description}</p>
        <p className="text-xl text-black font-semibold mt-2 ">
          ${product.price}
        </p>
        <button
          onClick={() => handleCart(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
