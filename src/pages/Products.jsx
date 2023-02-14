import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { useStateContext } from '../context/StateContext'

const Products = () => {
    const {state:{productList}, search} = useStateContext();
    const [products, setProducts]=useState([]);

    useEffect(()=>{
        setProducts(productList);
    },[productList, search]);


  return (
    <div className='flex flex-wrap gap-10 justify-center my-10'>
        {products?.map(product => <Card key={product.id} product={product} />)}
    </div>
  )
}

export default Products