import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const routes = {
  "Home": "/",
  "About Us": "/about",
  "Projects": "/projects",
  "Contact": "/contact"
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-sm">
        {/* Sección "About Us" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-3"
        >
          <h2 className="text-lg font-semibold">About Us</h2>
          <p className="text-gray-400">
            Since 2020, we’ve been adding color and protection to industrial
            spaces with high-quality painting services.
          </p>
        </motion.div>

        {/* Sección de navegación */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="space-y-3"
        >
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="space-y-2">
            {Object.keys(routes).map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, color: "#00aaff" }}
                className="text-gray-400 cursor-pointer hover:text-blue-500 transition-all"
              >
                <Link to={routes[item]}>{item}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Sección de redes sociales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="space-y-3"
        >
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="flex space-x-4">
            <motion.a
              href="https://www.facebook.com/profile.php?id=100087416439684"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-blue-500 text-xl transition-all"
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/jerusalemadiamond/"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-orange-500 text-xl transition-all"
            >
              <FaInstagram />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Derechos reservados */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-gray-500 text-center text-xs">
        <p>© 2025 Jerusalema Diamond Company | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;