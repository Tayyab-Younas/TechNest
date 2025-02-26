import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

function productList() {

    const products = useSelector((state) => state.products.products);

  return (
    <>
      <div className=" text-center">
        our product
      </div>


        <div className=" grid grid-cols-3 mt-3" >
            {products.map((product) => (
              
                <div className="text-center" key={product.id}>
                  
                     <Link to={`/product/${product.id}`}>
                     <img className=" object-cover cursor-pointer p-5" src={product.Image} alt={product.name} />
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