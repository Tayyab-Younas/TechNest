import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

export const productList = () => {
    
    const products = useSelector(( state ) => state.products.products );
    const dispatch = useDispatch();




  return (
    <div className='grid grid-cols-2 gap-4'>
        {products.map((product) => ( 

            <div key={ product.id} className='border p-4'>
                <img src={product.image} alt={product.name} className='w-full h-40 object-cover' />
                <h3>{product.name}</h3>
                <p> {product.price}</p>

                <button onClick={()=> dispatch(addToCart(product))} className='bg-blue-500 text-white p-2 m-2'>
                    Add to Cart</button>
            </div>
           ))};
    </div>
  )
};

export default productList;
