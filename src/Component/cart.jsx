import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart , increaseItemQuantity , decreaseItemQuantity } from "../store/slices/cartSlice";
import { toast , ToastContainer } from "react-toastify/unstyled";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();


  const handleRemoveCart = (item) =>{
    dispatch(removeFromCart(item.id))

      toast.error("product removed" ,
        {
          position: "top-center",
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
        <div className="gap-y-5">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-x-8 items-center p-4 rounded-lg shadow">
  
              <img src={item.Image} alt={item.name} className="w-[20%] h-[20%] object-cover rounded" />
              <div className="">

                <h2 className="text-lg font-semibold">{item.name}</h2>
                <h2>${item.price}</h2>
              
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

        {cartItems.map((item) =>
        <div>
          total = {item.price}* {item.price}
        </div>
        )}



    </div>

</> 
  );
};

export default Cart;
