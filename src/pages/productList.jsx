import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

function productList() {

    const products = useSelector((state) => state.products.products);

  return (
    <div>
        our product


        <div >
            {products.map((product) => (
              
                <div key={product.id}>
                  
                     <h1>{product.name}</h1>
                     <Link to={`/product/${product.id}`}>
                     <img src={product.Image} alt={product.name} />
                     </Link>
                     <p>{product.price}</p>
                </div>
            ) )}
        </div>


    </div>
  )
}

export default productList