import { Link, useLocation } from "react-router-dom";
import logo1 from "../assets/logo1.svg";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Detectar la ruta actual

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 py-3 backdrop-blur-md border-b border-neutral-700/80 transition-all duration-500 ${
        scrolled ? "bg-white/10 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <motion.img
              className="h-20 w-15 mr-1"
              src={logo1}
              alt="logo"
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ duration: 0.4 }}
            />
            <span className="text-xl tracking-tight items-center">
              Jerusalema Diamond
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {["Home", "About", "Projects", "Contact"].map((item, index) => {
              const isActive = location.pathname === (item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`);
              return (
                <motion.li
                  key={index}
                  className={`relative px-4 py-2 rounded-xl cursor-pointer ${
                    isActive ? "bg-blue-700 text-white" : ""
                  }`}
                  whileHover={{
                    scale: 1.2,
                    rotate: 2,
                    textShadow: "0px 0px 10px rgba(255,255,255,0.9)",
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Link
                    to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                    className="relative group"
                  >
                    {item}
                    <motion.span
                      className={`absolute left-0 bottom-0 w-full h-0.5 ${
                        isActive ? "bg-white" : "bg-blue-500"
                      } scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                    />
                  </Link>
                </motion.li>
              );
            })}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-center">
            <button onClick={toggleNavbar} aria-label="Toggle Menu">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil animado */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: mobileDrawerOpen ? 1 : 0,
          x: mobileDrawerOpen ? 0 : 100,
        }}
        transition={{ duration: 0.3 }}
        className={`fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center bg-white/90 lg:hidden ${
          mobileDrawerOpen ? "block" : "hidden"
        }`}
      >
        {["Home", "About", "Projects", "Contact"].map((item, index) => {
          const isActive = location.pathname === (item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`);
          return (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              className={`hover:text-blue-800 py-4 ${
                isActive ? "text-blue-700 font-bold" : ""
              }`}
            >
              <Link to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}>{item}</Link>
            </motion.li>
          );
        })}
      </motion.div>
    </motion.nav>
  );
};

export default Header;