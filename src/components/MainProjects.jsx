import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img10 from "../assets/img10.webp";
import img11 from "../assets/img11.webp";
import img12 from "../assets/img12.webp";
import img15 from "../assets/img15.webp";
import img16 from "../assets/img16.webp";
import img17 from "../assets/img17.webp";
import img18 from "../assets/img18.webp";
import img21 from "../assets/img21.jpg";
import img22 from "../assets/img22.jpg";
import img23 from "../assets/img23.jpg";
import img24 from "../assets/img24.jpg";
import img25 from "../assets/img25.jpg";
import img26 from "../assets/img26.jpg";
import img27 from "../assets/img27.jpg";
import m1 from "../assets/m1.webp";
import m2 from "../assets/m2.webp";
import m3 from "../assets/m3.webp";
import m4 from "../assets/m4.webp";
import m5 from "../assets/m5.webp";
import m6 from "../assets/m6.webp";
import m7 from "../assets/m7.webp";

const atlantaImages = [
  { src: img10, description: "Proyecto en Atlanta 1" },
  { src: img11, description: "Proyecto en Atlanta 2" },
  { src: img12, description: "Proyecto en Atlanta 3" },
  { src: img15, description: "Proyecto en Atlanta 4" },
  { src: img16, description: "Proyecto en Atlanta 5" },
  { src: img17, description: "Proyecto en Atlanta 6" },
  { src: img18, description: "Proyecto en Atlanta 7" },
  { src: img22, description: "Proyecto en Atlanta 8" },
  { src: img23, description: "Proyecto en Atlanta 9" },
  { src: img24, description: "Proyecto en Atlanta 10" },
  { src: img25, description: "Proyecto en Atlanta 11" },
  { src: img26, description: "Proyecto en Atlanta 12" },
  { src: img27, description: "Proyecto en Atlanta 13" },
  { src: img21, description: "Proyecto en Atlanta 14" },
  
];

const miamiImages = [
  { src: m1, description: "Proyecto en Miami 1" },
  { src: m2, description: "Proyecto en Miami 2" },
  { src: m3, description: "Proyecto en Miami 3" },
  { src: m4, description: "Proyecto en Miami 4" },
  { src: m5, description: "Proyecto en Miami 5" },
  { src: m6, description: "Proyecto en Miami 6" },
  { src: m7, description: "Proyecto en Miami 7" },
];

const MainProjects = () => {
  const [atlantaSelected, setAtlantaSelected] = useState(0);
  const [atlantaModal, setAtlantaModal] = useState(false);
  const [miamiSelected, setMiamiSelected] = useState(0);
  const [miamiModal, setMiamiModal] = useState(false);

  return (
    <div className="relative p-6 md:p-12 bg-white/50">
      {/* Sección Atlanta */}
      <motion.div
        className="flex flex-col items-center mt-10 md:mt-20 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-gray-900 tracking-wide">Atlanta</h1>

        <motion.div
          className="mt-8 w-full max-w-xl cursor-pointer"
          onClick={() => setAtlantaModal(true)}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={atlantaImages[atlantaSelected].src}
            alt=""
            className="rounded-xl shadow-lg object-cover w-full h-64 md:h-80"
          />
        </motion.div>

        <div className="grid grid-cols-4 gap-4 mt-6">
          {atlantaImages.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt=""
              onClick={() => setAtlantaSelected(index)}
              className={`h-20 w-full object-cover rounded-lg cursor-pointer border-2 ${
                atlantaSelected === index ? "border-blue-500" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Sección Miami */}
      <motion.div
        className="flex flex-col items-center mt-10 md:mt-20 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-gray-900 tracking-wide">Miami</h1>

        <motion.div
          className="mt-8 w-full max-w-xl cursor-pointer"
          onClick={() => setMiamiModal(true)}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={miamiImages[miamiSelected].src}
            alt=""
            className="rounded-xl shadow-lg object-cover w-full h-64 md:h-80"
          />
        </motion.div>

        <div className="grid grid-cols-4 gap-4 mt-6">
          {miamiImages.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt=""
              onClick={() => setMiamiSelected(index)}
              className={`h-20 w-full object-cover rounded-lg cursor-pointer border-2 ${
                miamiSelected === index ? "border-blue-500" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Modal Atlanta */}
      <AnimatePresence>
        {atlantaModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-4xl p-4">
              <img
                src={atlantaImages[atlantaSelected].src}
                alt=""
                className="w-full h-96 object-cover rounded-lg"
              />
              <p className="text-white mt-4 text-lg">
                {atlantaImages[atlantaSelected].description}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() =>
                    setAtlantaSelected((atlantaSelected - 1 + atlantaImages.length) % atlantaImages.length)
                  }
                  className="text-white text-2xl"
                >
                  ◀
                </button>
                <button
                  onClick={() =>
                    setAtlantaSelected((atlantaSelected + 1) % atlantaImages.length)
                  }
                  className="text-white text-2xl"
                >
                  ▶
                </button>
              </div>
              <button
                onClick={() => setAtlantaModal(false)}
                className="absolute top-4 right-4 text-white text-2xl"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Miami */}
      <AnimatePresence>
        {miamiModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-4xl p-4">
              <img
                src={miamiImages[miamiSelected].src}
                alt=""
                className="w-full h-96 object-cover rounded-lg"
              />
              <p className="text-white mt-4 text-lg">
                {miamiImages[miamiSelected].description}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() =>
                    setMiamiSelected((miamiSelected - 1 + miamiImages.length) % miamiImages.length)
                  }
                  className="text-white text-2xl"
                >
                  ◀
                </button>
                <button
                  onClick={() =>
                    setMiamiSelected((miamiSelected + 1) % miamiImages.length)
                  }
                  className="text-white text-2xl"
                >
                  ▶
                </button>
              </div>
              <button
                onClick={() => setMiamiModal(false)}
                className="absolute top-4 right-4 text-white text-2xl"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainProjects;