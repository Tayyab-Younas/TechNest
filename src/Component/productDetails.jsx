import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
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

  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === id)
  );
  const dispatch = useDispatch();

  if (!product) return <p>Product not found!</p>;

  return (
    <div className="sm:flex items-center justify-center gap-10 p-10">
      <div className="sm:w-[40%] md:w-[400px]">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={product.Image}
          alt={product.name}
        />
      </div>

      <div className="sm:w-[50%] ">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-black mt-2 font-sans">{product.description}</p>
        <p className="text-xl text-black  font-semibold mt-2 ">
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
