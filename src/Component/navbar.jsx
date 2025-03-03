import { Link } from "react-router-dom"
import { RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from "react-redux";


function Navbar() {

        const cartItems = useSelector(
            (state)=> state.cart?.items || []
        );

  return (
    <>
        <nav className="bg-black text-white p-4 shadow-md" >
        <div className="flex justify-between items-center mx-auto">
          
          <Link to='' className="text-xl font-bold">TechNest</Link>  
            <div className="space-x-11">
                <Link to=''>Home</Link>
                <Link to=''>Man</Link>  
                <Link to=''>Woman</Link>
                <Link to=''>Kids</Link>
                <Link to=''> <RiShoppingCartLine size={24} className="relative" />
                    {cartItems.length > 0 &&(

                        <span className=" absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"> 
                        {cartItems.length}
                    </span>
                    )}
            
                </Link>

            </div>

        </div>



        </nav>
    
    </>
  )
}

export default Navbar