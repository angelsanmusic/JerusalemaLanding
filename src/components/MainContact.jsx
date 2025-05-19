import { motion } from "framer-motion";

const MainContact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="max-w-screen-lg mx-auto p-5 rounded-lg shadow-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 border bg-black rounded-lg">
        {/* Sección de información de contacto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-black md:col-span-4 p-10 text-white rounded-l-lg"
        >
          
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-amber-600">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-200">
            Our commitment to excellence in industrial coatings is built on precision, innovation, and safety. Leveraging advanced technology and expert craftsmanship, we ensure reliability and efficiency in every project.
          </p>

          {/* Información de contacto con animación */}
          <motion.div className="flex items-center mt-5" whileHover={{ scale: 1.1 }}>
            <span className="text-sm">warnockcontractingassociates@gmail.com</span>
          </motion.div>
          <motion.div className="flex items-center mt-5" whileHover={{ scale: 1.1 }}>
            <span className="text-sm">+1 678-668-0646</span>
          </motion.div>
          
        </motion.div>

        {/* Formulario de contacto con animación */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          action="https://fabform.io/f/{form-id}"
          method="post"
          className="md:col-span-8 p-10 bg-amber-500 rounded-r-lg"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-white text-black border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-amber-600"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-white text-black border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-amber-600"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-email">
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-white text-black border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-amber-600"
                id="grid-email"
                type="email"
                placeholder="********@*****.**"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-message">
                Your Message
              </label>
              <textarea
                rows="10"
                className="appearance-none block w-full bg-white text-black border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-amber-600"
              ></textarea>
            </div>
            <div className="flex justify-between w-full px-3">
              <div className="md:flex md:items-center">
                <label className="block text-white font-bold">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <span className="text-sm">Send me your newsletter!</span>
                </label>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="shadow bg-amber-600 hover:bg-amber-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Send Message
              </motion.button>
            </div>
            <a href="https://veilmail.io/e/FkKh7o" className="font-medium text-indigo hover:underline">
              Or click here to reveal our protected email address
            </a>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default MainContact;