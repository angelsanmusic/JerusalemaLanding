import { Link, NavLink } from "react-router-dom";
import logo from "../assets/c1.png";
import { motion } from "framer-motion";

const Header = () => {
  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <motion.header
      className="w-full text-gray-700 bg-slate-50 border-t border-gray-100 shadow-sm body-font"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container flex flex-col flex-wrap items-center p-2 mx-4 md:flex-row">
        <nav className="flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto">
          {navigation.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `mr-5 font-medium transition-all duration-100 ${
                    isActive
                      ? "scale-110 -translate-y-1 text-amber-500"
                      : "hover:scale-110 hover:-translate-y-1 hover:text-amber-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        <Link to="/">
          <motion.img
            className="w-auto h-40"
            src={logo}
            alt="Logo de la empresa"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </Link>

        <motion.div
          className="inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            to="/contact"
            className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-amber-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;