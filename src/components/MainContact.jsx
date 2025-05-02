import { useState } from "react";
import { motion } from "framer-motion";

const MainContact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Aquí podrías integrar el envío a un backend o API.
  };

  return (
    <motion.div
      className="flex w-full min-h-screen py-10 justify-center items-center bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Contenedor principal */}
      <motion.div
        className="flex flex-col md:flex-row w-full max-w-4xl p-8 bg-white rounded-xl shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Formulario */}
        <motion.div
          className="w-full md:w-1/2 p-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Request a Quote
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-amber-500"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-amber-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-amber-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-amber-500"
              required
            />
            <motion.button
              type="submit"
              className="w-full bg-amber-500 text-white font-bold py-3 rounded-lg hover:bg-amber-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Quote
            </motion.button>
          </form>
        </motion.div>

        {/* Sección de contacto */}
        <motion.div
          className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left bg-amber-500/90 text-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-3">Need a Quote?</h3>
          <p className="text-lg text-blue-100">
            Contact us for **industrial painting** solutions. We provide
            **high-quality coatings** and **protective treatments** for all
            types of projects.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-2">
              <ion-icon
                name="call-outline"
                className="text-white text-xl"
              ></ion-icon>
              <span>
                <a href="tel:+1 (470) 336-8172" className="hover:underline">
                  +1 (470) 336-8172
                </a>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <ion-icon
                name="mail-outline"
                className="text-white text-xl"
              ></ion-icon>
              <span>
                <a
                  href="mailto:jerusalemadiamond@gmail.com"
                  className="hover:underline"
                >
                  jerusalemadiamond@gmail.com
                </a>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <ion-icon
                name="location-outline"
                className="text-white text-xl"
              ></ion-icon>
              <span>11, Street 342 Abcds</span>
            </div>
          </div>

          <motion.button
            className="mt-4 bg-white text-gray-700 font-bold py-3 px-6 rounded-lg hover:bg-slate-600 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MainContact;
