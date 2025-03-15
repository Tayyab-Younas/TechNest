import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems || []);

  return (
    <>
      <nav className="bg-black text-white p-4 shadow-md">
        <div className="flex justify-between mx-auto">
          <Link to="" className="text-xl font-bold">
            TechNest
          </Link>
          <div className="flex items-center space-x-8 font-serif">
            <input type="text" className="bg-white text-black p-2" required placeholder="Search products..." />
            <button className=" border-2 border-green-300 text-green-300 px-4 py-2">Search</button>
            <Link to="/cart">
              {" "}
              <RiShoppingCartLine size={24} className=" relative" />
              {cartItems.length > 0 && (
                <span className=" absolute top-9 right-4.5 bg-white text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  0{cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
