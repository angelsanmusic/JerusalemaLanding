import { motion } from "framer-motion";
import img20 from "../assets/img20.jpg";
import bg1 from "../assets/bg1.jpg";
import img17 from "../assets/img17.webp";

const MainAbout = () => {
  return (
    <>
      {/* Sección introductoria con animación */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mx-auto max-w-screen-xl px-6 py-12 bg-gradient-to-r from-gray-100 to-gray-300 rounded-xl mt-10 shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">
              Since <span className="text-indigo-600">2020</span>, we’ve been adding color to your spaces with the highest quality.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src={bg1} className="rounded-xl shadow-md" alt="Industrial painting expertise" />
          </motion.div>
        </div>
      </motion.section>

      {/* Sección de misión con imagen */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mx-auto max-w-screen-xl px-6 py-12 bg-white rounded-xl mt-10 shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-8">
          <motion.div className="md:col-span-3" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }}>
            <img src={img20} className="rounded-xl shadow-md" alt="High-quality painting work" />
          </motion.div>
          <motion.div className="md:col-span-1" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }}>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to provide professional painting services using high-quality materials for industrial environments. We guarantee long-lasting finishes that exceed expectations and ensure complete customer satisfaction.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Sección de visión */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mx-auto max-w-screen-xl px-6 py-12 bg-white rounded-xl mt-10 mb-10 shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-8">
          <motion.div className="md:col-span-1" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }}>
            <p className="text-lg text-gray-700 leading-relaxed">
              We aspire to expand our presence and continuously innovate in materials and techniques. Our goal is to be the first choice for clients looking for durability, professionalism, and superior results.
            </p>
          </motion.div>
          <motion.div className="md:col-span-3" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }}>
            <img src={img17} className="rounded-xl shadow-md" alt="Future goals in industrial painting" />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default MainAbout;