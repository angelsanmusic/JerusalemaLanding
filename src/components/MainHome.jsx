/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ParallaxSection = ({ scrollY }) => {
  return (
    <motion.div
      className="relative flex items-center justify-center bg-cover bg-center min-h-[80vh] z-10"
      style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}
      animate={{ y: -scrollY * 0.05 }}
      transition={{ type: "spring", stiffness: 50 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <section className="w-full py-24 flex items-center justify-center bg-white/80">
        <motion.div
          className="mx-auto max-w-[43rem] text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg font-medium leading-8 text-indigo-600/95">
            Industrial painting experts: quality, durability, and precision in
            every project.
          </p>
          <h1 className="mt-3 text-[3rem] font-bold leading-[3.5rem] tracking-tight text-black">
            Specialized services in anti-corrosion protection, high-resistance
            coatings, and professional finishes.
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-slate-400">
            Extend the lifespan of your structures with our team of specialists.
            Contact us today!
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
};

const FeatureCard = ({ color, title }) => {
  return (
    <motion.div
      className={`p-6 flex flex-col items-center text-center group hover:bg-slate-50/95 cursor-pointer ${color} text-gray-800 shadow-lg rounded-lg`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
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
    <div className="bg-white/50">
      <div className="px-6 md:px-20 lg:px-40 border-t border-b py-20">
        <ParallaxSection scrollY={scrollY} />

        <motion.div
          className="py-20 relative z-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto text-center">
            <h2 className="font-bold text-2xl md:text-4xl my-6">
              Innovation and precision in industrial coatings. What makes us
              unique?
            </h2>
            <div className="max-w-2xl md:max-w-4xl mx-auto">
              <p>
                Our commitment to excellence in industrial coatings is built on
                precision, innovation, and safety. Leveraging advanced
                technology and expert craftsmanship, we ensure reliability and
                efficiency in every project. Here’s what sets us apart:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 relative z-20">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Sección de Experiencia y Proyectos Completados */}
        <motion.div
          className="py-20 text-center bg-gray-900 text-white mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-4xl font-extrabold text-indigo-400">
              Over 7 Years of Experience
            </h2>
            <p className="text-lg text-gray-300 mt-4 leading-relaxed">
              With more than 300 completed projects, we take pride in delivering{" "}
              <strong>precision, quality, and innovation</strong> in every
              industrial coating solution.
            </p>
          </div>

          {/* Animación de números */}
          <motion.div
            className="mt-12 flex justify-center space-x-8 text-3xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <div className="bg-indigo-500 text-white px-6 py-4 rounded-lg shadow-md">
              <motion.span
                className="text-5xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
              >
                7+
              </motion.span>
              <p className="text-sm">Years of Experience</p>
            </div>

            <div className="bg-blue-500 text-white px-6 py-4 rounded-lg shadow-md">
              <motion.span
                className="text-5xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
              >
                300+
              </motion.span>
              <p className="text-sm">Completed Projects</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MainHome;
