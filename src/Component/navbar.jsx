import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";

function Navbar() {
  // Get cart items and product list from Redux store
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const product = useSelector((state) => state.products.products || []);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchShow, setSearchShow] = useState(false);

  const searchRef = useRef(null);

  // Handle search input change
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

  // Close search dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setFilterProducts([]);
        setSearchShow(false);
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
        <div className="md:flex flex-row flex justify-between mx-auto">
          
          {/* Brand Logo */}
          <div className="sm:order-2 order-2 sm:text-2xl sm:items-center lg:ml-0 lg:order-none">
            <Link
              to=""
              className="md:text-xl sm:text-xl sm:ml-20 md:ml-20 lg:ml-0 flex items-center text-center font-bold"
            >
              TechNest
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden relative">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="cursor-pointer"
            >
              <AiOutlineMenu size={24} />
            </button>

            {/* Mobile Navigation Dropdown */}
            {isNavOpen && (
              <div className="absolute top-10 left-0 z-50 bg-black p-4 rounded-md shadow-md flex flex-col gap-3 w-48">
                <Link to="" onClick={() => setIsNavOpen(false)}>Home</Link>
                <Link to="/Headphone" onClick={() => setIsNavOpen(false)}>Headphone</Link>
                <Link to="/Airpods" onClick={() => setIsNavOpen(false)}>Airpods</Link>
                <Link to="/Watches" onClick={() => setIsNavOpen(false)}>Watches</Link>
                <Link to="/Chargers" onClick={() => setIsNavOpen(false)}>Chargers</Link>
              </div>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:flex-row gap-5 items-center ml-40">
            <Link to="">Home</Link>
            <Link to="/Headphone">Headphone</Link>
            <Link to="/Airpods">Airpods</Link>
            <Link to="/Watches">Watches</Link>
            <Link to="/Chargers">Chargers</Link>
          </div>

          {/* Search and Cart Section */}
          <div className="flex items-center sm:justify-between space-x-8 font-serif sm:order-3 order-3 lg:order-none">
            <div className="relative" ref={searchRef}>
              {/* Desktop Search Input */}
              <input
                type="text"
                className="bg-white text-black p-2 hidden lg:block"
                required
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
              />

              {/* Mobile Search Toggle Button */}
              <div className="lg:hidden relative">
                <button onClick={() => setSearchShow(!isSearchShow)} className="cursor-pointer flex items-center">
                  <IoSearchSharp size={24} />
                </button>

                {/* Mobile Search Input */}
                {isSearchShow && (
                  <input
                    type="text"
                    className="bg-white w-64 text-black p-2 mt-2 absolute right-7"
                    required
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                )}
              </div>

              {/* Mobile Search Results Dropdown */}
              {filterProducts.length > 0 && (
                <div className="absolute right-7 top-[68px] w-64 bg-white text-black shadow-lg rounded-md mt-1 max-h-60 overflow-auto z-50 block lg:hidden">
                  {filterProducts.map((product) => (
                    <Link
                      to={`/product/${product.id}`}
                      key={product.id}
                      className="block p-2 hover:bg-gray-200"
                      onClick={() => {
                        setFilterProducts([]);
                        setSearchQuery("");
                        setSearchShow(false);
                      }}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Desktop Search Results Dropdown */}
              {filterProducts.length > 0 && (
                <div className="absolute left-0 w-64 bg-white text-black shadow-lg rounded-md mt-1 max-h-60 overflow-auto z-50 hidden lg:block">
                  {filterProducts.map((product) => (
                    <Link
                      to={`/product/${product.id}`}
                      key={product.id}
                      className="block p-2 hover:bg-gray-200"
                      onClick={() => {
                        setFilterProducts([]);
                        setSearchQuery("");
                        setSearchShow(false);
                      }}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Icon with Item Count */}
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
