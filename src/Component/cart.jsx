import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../store/slices/cartSlice";
import { toast, ToastContainer } from "react-toastify/unstyled";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    
    (total, item) => total + item.price * item.quantity , 0
  
  );



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
      <div className="container mx-auto p-5">
        <h1 className="text-2xl font-bold mb-5">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="gap-y-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-x-8 items-center p-4 rounded-lg shadow"
              >
                <img
                  src={item.Image}
                  alt={item.name}
                  className="w-[20%] h-[20%] object-cover rounded"
                />
                <div className="text-center">
                  <p>Product name</p>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                </div>
                <div className="text-center">
                  <p>product Price</p>
                  <h2>${item.price}</h2>
                </div>
                <div className="text-center">
                  <p>Product quantity</p>
                  <button
                    onClick={() => dispatch(decreaseItemQuantity(item.id))}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>

                  <button
                    onClick={() => dispatch(increaseItemQuantity(item.id))}
                  >
                    +
                  </button>
                </div>
                <div className="text-center">
                  <p>Total price</p>
                    <h1>{item.price * item.quantity}</h1>
                </div>
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
      <div className="text-center">
         <h1 className="font-bold border-t-2">
          Total Price : <span>${totalPrice}</span>
          </h1>
      </div>
    </>
  );
};

export default Cart;
