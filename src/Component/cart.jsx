import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cartSlice";
import { toast , ToastContainer } from "react-toastify/unstyled";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();


  const handleRemoveCart = (item) =>{
    dispatch(removeFromCart(item.id))

      toast.error("product removed" ,
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick : true,
          pauseOnHover : false,
          draggable : true,
          theme : "dark"
        });
  }

  return (
    <>
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-5">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border p-4 rounded-lg shadow-md">
              <img src={item.Image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
              </div>
              <button
                onClick={() => handleRemoveCart}
                className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    <ToastContainer />
    </div>

</>
  );
};

export default Cart;
