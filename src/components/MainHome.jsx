/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ParallaxSection = ({ scrollY }) => {
  return (
    <motion.div
      className="relative flex items-center justify-center bg-cover bg-center min-h-[80vh] z-10"
      style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}
      animate={{ y: -scrollY * 0.05 }} // Se redujo el efecto para evitar solapamientos
      transition={{ type: "spring", stiffness: 50 }}
    >
      <section className="w-full py-24 flex items-center justify-center bg-white/80">
        <div className="mx-auto max-w-[43rem] text-center">
          <p className="text-lg font-medium leading-8 text-indigo-600/95">
            Industrial painting experts: quality, durability, and precision in every project.
          </p>
          <h1 className="mt-3 text-[3rem] font-bold leading-[3.5rem] tracking-tight text-black">
            Specialized services in anti-corrosion protection, high-resistance coatings, and professional finishes.
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-slate-400">
            Extend the lifespan of your structures with our team of specialists. Contact us today!
          </p>
        </div>
      </section>
    </motion.div>
  );
};

const FeatureCard = ({ color, title }) => {
  return (
    <motion.div
      className={`p-6 flex flex-col items-center text-center group hover:bg-slate-50/95 cursor-pointer ${color} text-gray-800 shadow-lg rounded-lg`}
    >
      <p className="text-xl font-medium mt-3">{title}</p>
    </motion.div>
  );
};

const MainHome = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    { color: "bg-red-500", title: "Expertise in Industrial Coatings" },
    { color: "bg-orange-500", title: "High-Quality Workmanship" },
    { color: "bg-yellow-500", title: "Strong Compliance & Safety Standards" },
    { color: "bg-lime-500", title: "Efficiency & Project Management Skills" },
    { color: "bg-teal-500", title: "Versatility & Adaptability" },
    { color: "bg-indigo-500", title: "Advanced Equipment & Technology" },
  ];

  return (
    <div className="px-6 md:px-20 lg:px-40 border-t border-b py-20 bg-opacity-10">
      <ParallaxSection scrollY={scrollY} />

      {/* Nueva sección añadida */}
      <div className="  py-20 relative z-20">
        <div className="container mx-auto text-center dark:text-white">
          <h2 className="font-bold text-2xl md:text-4xl my-6">
            What is included in the AI Tool Service?
          </h2>
          <div className="max-w-2xl md:max-w-4xl mx-auto dark:text-gray-300">
            <p>
              Our AI Tool Service encompasses a comprehensive analysis with over 50 modules, examining more than
              200 data points. We offer 5 distinct functionalities and support 4 different file formats.
            </p>
          </div>

          {/* Sección de estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {[
              { value: "150+", label: "Features Analyzed", color: "text-yellow-500" },
              { value: "60+", label: "Modules", color: "text-teal-500" },
              { value: "5+", label: "Functionalities", color: "text-pink-500" },
              { value: "4+", label: "File Formats Supported", color: "text-violet-500" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 border flex flex-col items-center rounded-lg shadow-md dark:bg-gray-800"
              >
                <div className={`text-4xl font-bold ${item.color}`}>{item.value}</div>
                <div className="text-gray-500 uppercase mt-2">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección de características */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 relative z-20">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default MainHome;