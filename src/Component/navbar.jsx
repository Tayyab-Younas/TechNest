import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const product = useSelector((state) => state.products.products || []);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const searchRef = useRef(null);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilterProducts([]);
    } else {
      const filtered = product.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilterProducts(filtered);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setFilterProducts([]);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-black text-white p-4 shadow-md">
        <div className="sm:flex justify-between mx-auto">
          <div className="sm:order-2 lg:order-none">

          <Link to="" className="md:text-xl sm:text-sm flex items-center font-bold">
            TechNest
          </Link>
          </div>

          <div className=" cursor-pointer sm:flex sm:flex-col lg:flex gap-5 lg:ml-40 items-center sm:order-1 lg:order-none">
             <Link to="">Home</Link>
            <Link to="/Headphone">Headphone</Link>
            <Link to="/Airpods">Airpods</Link>
            <Link to="/Watches">Watches</Link>
            <Link to="/Chargers">Chargers</Link>
          </div>
          <div className="flex items-center sm:justify-between space-x-8 font-serif sm:order-3 lg:order-none">
            <div className="relative" ref={searchRef}>
              <input
                type="text"
                className="bg-white text-black p-2"
                required
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {filterProducts.length > 0 && (
                <div className="absolute left-0 w-64 bg-white text-black shadow-lg rounded-md mt-1 max-h-60 overflow-auto">
                  {filterProducts.map((product) => (
                    <Link
                      to={`/product/${product.id}`}
                      key={product.id}
                      className="block p-2 hover:bg-gray-200"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/cart" className="relative">
              <RiShoppingCartLine size={24} />
              {cartItems.length > 0 && (
                <span className="absolute left-0.5 top-4 bg-white text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
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
