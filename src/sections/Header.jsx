import {HiMenu} from 'react-icons/hi'
import images from '../assets/images';
import { Nav, NavMobile } from '../components';
import { useEffect, useState } from 'react';

const Header = () => {
  const [bg, setBg] = useState(false)


  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 30 ? setBg(true) : setBg(false)
    })
  })


  const [showNav, setShowNav] = useState(false)


  return (
    <header className={`${bg ? 'bg-[#534686] shadow-md py-6' : ' py-4'}
 w-full fixed transition-all duration-300 `} >
      <div className="container mx-auto w-full">
        <div className='flex items-center justify-between w-full'>

          <a href="#">
            <img className='h-[30px]' src={images.Logo} alt="logo" />
          </a>

          <Nav />

          <HiMenu 
          onClick={() => setShowNav(true)}
          className='lg:hidden text-3xl text-white cursor-pointer' />

          <div className={`${showNav ? 'right-0' : '-right-full'} 
          fixed  w-48 top-0 bottom-0 transition-all  lg:hidden`}>
          <NavMobile setShowNav={setShowNav}  />
          </div>
         
        </div>
      </div>
    
    </header>
  )
};

export default Header;
