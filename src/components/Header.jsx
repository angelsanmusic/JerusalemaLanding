  import {  Link } from "react-router-dom";
import logo1 from "../assets/logo1.svg"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const[mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar =() =>{
      setMobileDrawerOpen(!mobileDrawerOpen);

  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-md border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
              <div className="flex items-center flex-shrink-0"> 
                <img className="h-20 w-15 mr-1 " src={logo1} alt="logo" />
                <span className="text-xl tracking-tight items-center">Jerusalema Diamond</span>
              </div>
                <ul className="hidden lg:flex ml-14 space-x-12 ">
                  <li className="hover:text-white hover:bg-blue-700 px-3 py-1 rounded-xl duration-300 ease-in"><Link to="/">Home</Link></li>
                  <li className="hover:text-white hover:bg-blue-700 px-3 py-1 rounded-xl duration-300 ease-in"><Link to="/About">About Us</Link></li>
                  <li className="hover:text-white hover:bg-blue-700 px-3 py-1 rounded-xl duration-300 ease-in"><Link to="/Projects">Projects</Link></li>
                  <li className="hover:text-white hover:bg-blue-700 px-3 py-1 rounded-xl duration-300 ease-in"><Link to="/Contact">Contact</Link></li>
                </ul>
                <div className="lg:hidden md:flex flex-col justify-center">
                      <button onClick={toggleNavbar}>
                         {mobileDrawerOpen ? <X /> : <Menu />}  
                      </button>
                </div>   
            </div>
        </div>
         {mobileDrawerOpen &&(
            <div className="fixed right-0 z-20  w-full p-12 flex flex-col justify-center items-center  lg:hidden bg-white/90">
                <ul>
                  <li className="hover:text-blue-800 py-4"><Link to="/">Home</Link></li>
                  <li className="hover:text-blue-800 py-4"><Link to="/About">About Us</Link></li>
                  <li className="hover:text-blue-800 py-4"><Link to="/Projects">Projects</Link></li>
                  <li className="hover:text-blue-800 py-4"><Link to="/Contact">Contact</Link></li>   
                </ul>
            </div>
        )}
    </nav>
  )
}

export default Header