import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom'
import { getData } from '../api';

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState({});


    const getProductDetail = async () =>{
        setProduct(await getData(`/products/${id}`));
    }

    const getProductsByCat = async() => {
        setProducts(await getData(`/products/category/${product.category}`))
    }

    useEffect(()=>{
        getProductDetail();
        getProductsByCat();
    },[])

    console.log(product)
  return (
    <>
      <div className="flex gap-5 item-start my-20">
        <img
          src={product?.image}
          className="h-96 border-2 shadow-lg p-10"
          alt=""
        />
        <div className="flex flex-col justify-start items-start gap-5 mt-5">
          <p className="bg-secondary text-info font-bold px-2 capitalize text-xs rounded-full text-center">
            {product?.category}
          </p>
          <h3 className="text-2xl font-semibold text-header">
            {product?.title}
          </h3>
          <div className="">
            <p className="text-header font-semibold text-lg">Description</p>
            <p className="text-paragraph tracking-wider leading-6">
              {product?.description}
            </p>
          </div>
          <p className="flex item-center gap-2 ">
            <AiFillStar className="text-xl text-danger" />
            <small className="text-secondary font-bold">
              {" "}
              {product?.rating?.rate}
            </small>
          </p>
          <p className="text-header text-xl font-semibold">${product?.price}</p>
          <div className="flex">
            <button className="bg-info text-primary py-2 rounded shadow-lg w-40 transform transition hover:scale-90">
              Add To Cart
            </button>
            <button className="bg-header text-primary py-2 ml-3 rounded shadow-lg w-40 transform transition hover:scale-90">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="my-20">
        <h1 className="text-2xl font-semibold text-header ">
          You may also like
        </h1>
        <div className="flex flex-wrap gap-7 my-10">
          {products?.map((item) => (
              <div key={item.id}>
                <img
                  src={item?.image}
                  className="h-52 border-2 show-lg p-5 rounded"
                  alt=""
                />
                <p className="text-paragraph font-semibold mt-1">
                  ${item?.price}
                </p>
              </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductDetail