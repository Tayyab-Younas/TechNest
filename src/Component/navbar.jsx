import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart?.items || []);

  return (
    <>
      <nav className="bg-black text-white p-4 shadow-md">
        <div className="flex justify-between mx-auto">
          <Link to="" className="text-xl font-bold">
            TechNest
          </Link>
          <div className="flex items-center space-x-8 font-serif">
            <Link to="/" className="hover:border-b-2 border-gray-300">Home</Link>
            <Link to="/Man" className="hover:border-b-2 border-gray-300">Man</Link>
            <Link to="/Woman" className="hover:border-b-2 border-gray-300">Woman</Link>
            <Link to="Kids" className="hover:border-b-2 border-gray-300">Kids</Link>
            <Link to="/cart">
              {" "}
              <RiShoppingCartLine size={24} className="" />
              {cartItems.length > 0 && (
                <span className=" bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
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
