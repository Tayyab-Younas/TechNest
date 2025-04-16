import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Chargers = () => {
  // Get all products from Redux store
  const products = useSelector((state) => state.products.products);

  // Filter products with category "charger"
  const ChargersProduct = products.filter(
    (p) => p.category.toLowerCase() === "charger"
  );

  return (
    <>
      {/* Page title */}
      <h1 className="text-center font-bold text-2xl m-3">Chargers</h1>

      {/* Product grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
        {ChargersProduct.map((product) => (
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
};

export default Chargers;
