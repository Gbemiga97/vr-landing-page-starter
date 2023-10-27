import { IoClose } from 'react-icons/io5'

const NavMobile = ({setShowNav}) => {
  return (
    <nav className="lg:hidden bg-[#251f3f] w-full h-full relative ">
      <IoClose
      onClick={() => setShowNav(false)}
      className='text-3xl absolute left-4 top-6 cursor-pointer' />
    <ul className="flex flex-col h-full items-center justify-center space-y-8 font-secondary">
      <li className="text-lg"><a href="#">Home</a></li>
      <li className="text-lg"><a href="#">Company</a></li>
      <li className="text-lg"><a href="#">Features</a></li>
      <li  className="btn"><a href="#">Sign up</a></li>
    </ul>
  </nav>
  )
};

export default NavMobile;
