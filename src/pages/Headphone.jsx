import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Headphone() {
  // Get all products from Redux store
  const products = useSelector((state) => state.products.products);

  // Filter products with category "headphone"
  const headphoneProducts = products.filter(
    (p) => p.category.toLowerCase() === "headphone"
  );

  return (
    <>
      {/* Page title */}
      <h2 className="text-center m-4 text-2xl font-bold">HeadPhones</h2>

      {/* Product grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
        {headphoneProducts.map((product) => (
          <div
            className="text-center flex flex-col items-center"
            key={product.id}
          >
            {/* Link to product details */}
            <Link to={`/product/${product.id}`}>
              <img
                className="object-cover cursor-pointer w-[370px] h-[370px] rounded-lg"
                src={product.Image}
                alt={product.name}
              />
            </Link>
            {/* Product name and price */}
            <h1 className="text-lg font-semibold mt-2">{product.name}</h1>
            <p className="text-black">${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Headphone;
