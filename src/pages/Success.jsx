import { AiFillBackward, AiOutlineArrowLeft } from 'react-icons/ai';
import { FaBackward } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'

const Success = () => {
    const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-20">
        <div className='bg-secondary text-primary p-20 rounded shadow-lg animate__animated animate__backInDown'>
        <h1 className='text-4xl font-semibold tracking-wider my-5 '>Thanks For Purchasing</h1>
        <button onClick={() => navigate('/')} className='text-primary bg-danger px-5 py-2 shadow-lg uppercase rounded flex flex-nowrap justify-center items-center transform transition hover:scale-105'>
           <AiOutlineArrowLeft className='mr-2' /> back to shopping
        </button>
    </div>
    </div>
  )
}

export default Success