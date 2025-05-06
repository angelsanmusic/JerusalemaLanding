import { motion } from "framer-motion";

const MainContact = () => {
  return (
    <div className="flex w-full min-h-screen py-12 px-4 md:px-8 lg:px-16 justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col space-y-6 bg-blue-700/90 w-full max-w-2xl md:max-w-3xl p-6 md:p-8 rounded-xl shadow-xl text-white"
      >
        {/* Encabezado */}
        <div className="text-center">
          <h1 className="font-bold text-3xl md:text-4xl tracking-wide">
            Contact Us
          </h1>
          <p className="pt-2 text-cyan-100 text-sm md:text-lg">
            We’d love to hear from you!
          </p>
        </div>

        {/* Información de contacto */}
        <div className="flex flex-col space-y-4 text-sm md:text-lg">
          <div className="inline-flex space-x-2 items-center">
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
          <div className="inline-flex space-x-2 items-center">
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
          <div className="inline-flex space-x-2 items-center">
            <ion-icon
              name="location-outline"
              className="text-white text-xl"
            ></ion-icon>
            <span>Atlanta, Georgia</span>
          </div>
        </div>

        {/* Formulario de contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-gray-600"
        >
          <form
            action="https://formsubmit.co/jerusalemadiamond@gmail.com"
            method="POST"
            className="flex flex-col space-y-4 md:space-y-6"
          >
            <div>
              <label htmlFor="name" className="text-sm font-semibold">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 md:py-3 outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Email address"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 md:py-3 outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold">
                Message
              </label>
              <textarea
                name="message"
                rows={3}
                required
                placeholder="Type your message here"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 md:px-4 md:py-3 outline-none focus:ring-2 focus:ring-blue-400 transition"
              ></textarea>
            </div>

            {/* Botón con animación */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-800 text-white font-bold rounded-lg px-4 py-2 md:px-6 md:py-3 shadow-md transition hover:bg-blue-900"
            >
              SEND MESSAGE
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainContact;
