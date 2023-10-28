import images from "../assets/images";
import {BsFillCircleFill } from 'react-icons/bs'



const Users = () => {
  return (
    <div 
    data-aos='fade-down' data-aos-delay='900'
    className="flex flex-col justify-center items-center space-x-5 
    space-y-2 lg:flex-row lg:skew-y-0 lg:justify-start ">
      <div className="flex -space-x-2">
        <div className="w-12 h-12 rounded-full">
          <img src={images.avt1} alt="user" />
        </div>
        <div className="w-12 h-12 rounded-full">
          <img src={images.avt2} alt="user" />
        </div>
        <div className="w-12 h-12 rounded-full">
          <img src={images.avt3} alt="user" />
        </div>
        <div className="w-12 h-12 rounded-full">
          <img src={images.avt4} alt="user" />
        </div>
       </div>

       <div className="flex items-center space-x-2 font-secondary font-medium">
        <BsFillCircleFill className="text-xs text-green-500 animate-pulse" />
        <p>400k people online</p>
       </div>
    </div>
  )
};

export default Users;
