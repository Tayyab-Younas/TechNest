import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../store/slices/cartSlice";
import { toast, ToastContainer } from "react-toastify/unstyled";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "../Component/checkout";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  // Calculate total price of all cart items
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Remove item from cart and show toast notification
  const handleRemoveCart = (item) => {
    dispatch(removeFromCart(item.id));

    toast.error("product removed", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <>
      {/* Header and Checkout button */}
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold p-3">Shopping Cart</h1>
        <div className="text-right p-3">
          <Checkout />
        </div>
      </div>

      <div className="container mx-auto p-5">
        {/* Show message if cart is empty */}
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="gap-y-5">
            {/* Render each cart item */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="md:flex gap-x-8 items-center p-4 rounded-lg justify-between"
              >
                <img
                  src={item.Image}
                  alt={item.name}
                  className=" sm:w-[30%] md:w-[20%] sm:mx-auto md:mx-0 mb-2 h-[20%] object-cover rounded"
                />
                
                {/* Product name */}
                <div className="text-center">
                  <p>Product name</p>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                </div>

                {/* Product price */}
                <div className="text-center">
                  <p>product Price</p>
                  <h2>${item.price}</h2>
                </div>

                {/* Quantity controls */}
                <div className="text-center">
                  <p>Product quantity</p>
                  <button
                    className="text-xl"
                    onClick={() => dispatch(decreaseItemQuantity(item.id))}
                  >
                    -
                  </button>
                  <span className=" m-5">{item.quantity}</span>
                  <button
                    className="text-xl"
                    onClick={() => dispatch(increaseItemQuantity(item.id))}
                  >
                    +
                  </button>
                </div>

                {/* Total price per product */}
                <div className="text-center">
                  <p>Total price</p>
                  <h1>{item.price * item.quantity}</h1>
                </div>

                {/* Remove button */}
                <div>
                  <button
                    onClick={() => handleRemoveCart(item)}
                    className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <ToastContainer />
      </div>

      {/* Overall total price */}
      <div className="text-center">
        <h1 className="font-bold border-t-2">
          Total Price : <span>${totalPrice}</span>
        </h1>
      </div>
    </>
  );
};

export default Cart;
