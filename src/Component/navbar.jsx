import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useState } from "react";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems || []);

  const product = useSelector((state) => state.products.products || []);

  const [searchQuery, setSearchQuery] = useState("");

  const [filterProducts, setFilterProducts] = useState([]);

const handleSearch = (e) => {
  setSearchQuery(e.target.value);
}

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilterProducts([]);
    } else {
      const filtered = product.filter((products) =>
        products.name.toLowerCase().includes(query.toLowerCase())
      );

      setFilterProducts(filtered);
    }
  };

  return (
    <>
      <nav className="bg-black text-white p-4 shadow-md">
        <div className="flex justify-between mx-auto">
          <Link to="" className="text-xl font-bold">
            TechNest
          </Link>
          <div className="flex items-center space-x-8 font-serif">
            <input
              type="text"
              className="bg-white text-black p-2"
              required
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
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

            <button className=" border-2 border-green-300 text-green-300 px-4 py-2 cursor-pointer" onClick={handleSearchChange}>
              Search
            </button>
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
