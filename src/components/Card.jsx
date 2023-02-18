import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';
const Card = ({product}) => {
//   const {title, image, price,rating} = product;
const {dispatch} = useStateContext(); 

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product })
  }
  return (
    <div className="w-80 border-2 p-5 rounded-lg transform transition hover:scale-105">
      <img src={product?.image} className="h-[200px] mx-auto my-3" alt="" />
      <h3 className="text-header font-bold tracking-wider my-3">
        {product?.title?.substring(0, 25)}...
      </h3>
      <div className="flex item-center gap-1">
        <AiFillStar className="text-danger" />
        <small className="text-secondary font-semibold">
          {product?.rating?.rate}
        </small>
      </div>
      <p className="text-header font-bold text-xl my-3 ">${product?.price}</p>
      <div className="flex">
        <button
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          className="bg-info text-primary px-4 py-2 rounded shadow-lg transform transition hover:scale-90"
          
        >
          Add To Cart
        </button>
        <Link to={`/detail/${product.id}`}>
          <button className="bg-header text-primary px-4 py-2 rounded shadow-lg ml-3 transform transition hover:scale-90 ">
            Detail
          </button>
        </Link>
      </div>
    </div>
  ); 
}

export default Card