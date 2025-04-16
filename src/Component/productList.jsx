import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductList() {
  // Access products from Redux store
  const products = useSelector((state) => state.products.products);

  return (
    <>
      {/* Section title */}
      <div className="w-full px-4" id="productlist">
        <h1 className="text-center uppercase sm:text-sm md:text-xl font-bold my-4">
          our product
        </h1>
      </div>

      {/* Product grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
        {products.map((product) => (
          <div
            className="text-center flex flex-col items-center"
            key={product.id}
          >
            {/* Link to individual product details */}
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

export default ProductList;
