import { useSelector } from "react-redux"
import { Link } from "react-router-dom";


function productList() {

    const products = useSelector((state) => state.products.products);

  return (
    <>
    <div className=" relative w-full h-screen">
          <img className=" w-full h-full  object-cover" src="../src/assets/bg-pic.jpg" alt="" />
          <a href="#productlist">

          <button className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black font-serif text-white p-3 rounded-lg cursor-pointer ">Start shopping</button>
          </a>
      </div>

      <div className="w-full px-4" id="productlist">
        <h1 className="text-center uppercase text-2xl font-bold my-4">
          our product
        </h1>
      </div>


        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2" >
            {products.map((product) => (
              
                <div className="text-center flex flex-col items-center" key={product.id}>
                     <Link to={`/product/${product.id}`}>
                     <img className=" object-cover cursor-pointer w-[370px] h-[370px] rounded-lg" src={product.Image} alt={product.name} />
                     </Link>
                     <h1 className="text-lg font-semibold mt-2">{product.name}</h1>
                     <p className="text-gray-600">${product.price}</p>
                </div>
            ) )}
        </div>


    </>
  )
}

export default productList