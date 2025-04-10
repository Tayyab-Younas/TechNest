import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Chargers = () => {
  const products = useSelector((state) => state.products.products);

  const ChargersProduct = products.filter(
    (p) => p.category.toLowerCase() === "charger"
  );
  console.log("Filtered Chargers:", ChargersProduct);

  return (
    <>
      <h1 className="text-center font-bold text-2xl m-3">Chargers</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
        {ChargersProduct.map((product) => (
          <div
            className="text-center flex flex-col items-center"
            key={product.id}
          >
            <Link to={`/product/${product.id}`}>
              <img
                className=" object-cover cursor-pointer w-[370px] h-[370px] rounded-lg"
                src={product.Image}
                alt={product.name}
              />
            </Link>
            <h1 className="text-lg font-semibold mt-2">{product.name}</h1>
            <p className="text-black">${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Chargers;
