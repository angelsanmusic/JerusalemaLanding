
import {  Link } from "react-router-dom";
import { FaFacebookF,  } from "react-icons/fa";
import { FaInstagram,  } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 md:px-16 lg:px-28 py-6 items-end">
      <container className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg text-white font-bold mb-4">
            About Us
          </h2>
          <p className="text-gray-300">Since 2015, we ve been adding color to your spaces with the highest quality.</p>
        </div>
        <div>
        <h2 className="text-lg text-white font-bold mb-4">Quick Links</h2>
          <ul>
          <li className="hover:text-gray-600 text-gray-300"><Link to="/">Home</Link></li>
                <li className="hover:text-gray-600  text-gray-300"><Link to="/About">About Us</Link></li>
                <li className="hover:text-gray-600 text-gray-300"><Link to="/Projects">Projects</Link></li>
                <li className="hover:text-gray-600 text-gray-300"><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
        <div>
        <h2 className="text-lg font-bold text-white mb-4">Follow Us</h2>
          <ul className="flex space-x-4">
            <li> <FaFacebookF className="text-blue-500"/>{" "}
            <a href="https://www.facebook.com/profile.php?id=100087416439684" target="_blank" className="hover:text-gray-600  text-gray-300">Facebook</a></li>

            <li><FaInstagram className="text-orange-500"/>
            <a href="https://www.instagram.com/jerusalemadiamond/" target="_blank" className="hover:text-gray-600 text-gray-300">Instagram</a></li>

          </ul>
        </div>
      </container>
      <div className="border-t border-gray-600 p-4 text-gray-300 text-center mt-6">
        <p>© 2025 Jerusalema Diamond Company</p>
        <span>
          All rights reserved
        </span>
      </div>
      
    </footer>
  )
}

export default Footer