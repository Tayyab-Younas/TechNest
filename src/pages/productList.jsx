import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

function productList() {

    const products = useSelector((state) => state.products.products);

  return (
    <>
      <div className=" text-center">
        our product
      </div>


        <div className=" grid md:grid-cols-3 sm:grid-cols-2" >
            {products.map((product) => (
              
                <div className="text-center px-8 py-3" key={product.id}>
                     <Link to={`/product/${product.id}`}>
                     <img className=" object-cover cursor-pointer" src={product.Image} alt={product.name} />
                     </Link>
                     <h1>{product.name}</h1>
                     <p>{product.price}</p>
                </div>
            ) )}
        </div>


    </>
  )
}

export default productList