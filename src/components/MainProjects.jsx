import { motion } from "framer-motion";
import img10 from "../assets/img10.webp";
import img11 from "../assets/img11.webp";
import img12 from "../assets/img12.webp";
import img15 from "../assets/img15.webp";
import img16 from "../assets/img16.webp";
import img17 from "../assets/img17.webp";
import img18 from "../assets/img18.webp";
import m1 from "../assets/m1.webp";
import m2 from "../assets/m2.webp";
import m3 from "../assets/m3.webp";
import m4 from "../assets/m4.webp";
import m5 from "../assets/m5.webp";
import m6 from "../assets/m6.webp";
import m7 from "../assets/m7.webp";


const MainProjects = () => {
  return (
    <div className="relative p-6 md:p-12 bg-white/50">
      {/* Sección de Atlanta */}
      <motion.div
        className="flex flex-col items-center mt-10 md:mt-20 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-gray-900 tracking-wide">Atlanta</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8">
          {[img10, img11, img12, img15, img16, img17, img18].map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-md"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img src={image} alt="" className="w-full h-56 md:h-64 lg:h-72 object-cover" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Sección de Miami */}
      <motion.div
        className="flex flex-col items-center mt-10 md:mt-20 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-gray-900 tracking-wide">Miami</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8">
          {[m1, m2, m3, m4, m5, m6, m7].map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-md"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img src={image} alt="" className="w-full h-56 md:h-64 lg:h-72 object-cover" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MainProjects;