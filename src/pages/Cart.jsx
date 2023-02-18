import React, { useEffect, useState } from 'react'
import {  AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useStateContext } from '../context/StateContext'

const Cart = () => {
    const {state:{cart},dispatch} = useStateContext();
    const [total, setTotal] =useState(0);
    const navigate = useNavigate();

    const checkoutHandler = () => {
        dispatch({type:"CART_EMPTY"})
        navigate('/success')
    }

    const incresePrice = (price) => {
      setTotal(total + price)
    }

    const decresePrice = (price) => {
      setTotal (total - price)
    }


    useEffect(() => {
      setTotal(cart.reduce((initial, current) => initial + current.price, 0 ));
    }, [cart]);

  return (
    <>
      {cart.length > 0 ? (
        <div className="grid grid-cols-4 ">
          <div className="col-span-3 flex flex-col gap-5">
            {cart?.map((item) => (
              <CartItem  key={item.id} item={item} incresePrice={incresePrice} decresePrice={decresePrice}  />
            ))}
          </div>
          <div className="col-span-1 ">
            <div className="bg-gray-50 p-10 rounded shadow-lg ">
              <h1 className="text-2xl text-info font-semibold ">
                Total Price - ${total.toFixed(2)}
              </h1>
              <button
                onClick={checkoutHandler}
                className="px-5 py-2 my-5 bg-info text-primary rounded shadow-lg uppercase"
              >
                Checkout
              </button>
            </div>
            <button
              onClick={() => dispatch({ type: "CART_EMPTY" })}
              className="px-5 py-2 my-5 bg-danger text-primary rounded shadow-lg uppercase"
            >
              Cart Empty
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-20">
          <div className="bg-secondary text-primary p-20 rounded shadow-lg animate__animated animate__backInDown">
            <h1 className="text-4xl font-semibold tracking-wider my-5 ">
              Your Cart is Empty
            </h1>
            <button
              onClick={() => navigate("/")}
              className="text-primary bg-danger px-5 py-2 shadow-lg uppercase rounded flex flex-nowrap justify-center items-center transform transition hover:scale-105"
            >
              <AiOutlineArrowLeft className="mr-2" /> back to shopping
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart