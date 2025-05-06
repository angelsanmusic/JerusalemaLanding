import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import videobanner1 from "../assets/videobanner1.webm";
import logo1 from "../assets/logo1.svg"; // Importando el logo

const MainHome = () => {
  return (
    <>
      {/* Sección Principal */}
      <section className="bg-white/80 lg:grid">
        <div className="mx-auto max-w-screen-xl px-6 py-12 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-prose text-left"
          >
            <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl">
              Dream It,{" "}
              <strong className="text-indigo-600">We Build It.</strong>
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Our team is dedicated to delivering exceptional results that
              enhance the aesthetic appeal and longevity of your property.
            </p>
            <motion.div
              className="mt-6 flex gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <a
                className="rounded-xl bg-indigo-600 px-6 py-3 text-white text-lg font-semibold shadow-md transition hover:bg-indigo-700"
                href="/contact"
              >
                Get Started
              </a>
              <a
                className="rounded-xl border border-gray-200 px-6 py-3 text-gray-700 text-lg font-semibold shadow-md transition hover:bg-gray-50 hover:text-gray-900"
                href="/about"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sección de Video */}
      <div className="py-10">
        <section>
          <div className="mx-auto max-w-screen-xl px-6 py-8 lg:px-8 bg-white/80 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-8">
              <div className="md:col-span-1">
                <div className="max-w-lg">
                  <h2 className="text-3xl font-semibold text-gray-900 capitalize">
                    Durable Industrial Paint for Every Surface
                  </h2>
                  <p className="mt-4 text-lg text-gray-700">
                    Whether you're refreshing a workspace or protecting
                    surfaces, this paint offers a **long-lasting solution** for
                    durability and easy maintenance.
                  </p>
                </div>
              </div>
              <div className="md:col-span-3">
                <motion.video
                  autoPlay
                  loop
                  muted
                  className="rounded-xl shadow-md"
                  src={videobanner1}
                  type="video/mp4"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Sección de Imágenes */}
      <div className="flex items-center rounded-xl py-8 justify-center">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Creativity",
              description:
                "Creativity and design come together to offer you unique and personalized solutions.",
              image:
                "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=2020&auto=format&fit=crop",
            },
            {
              title: "Engagement",
              description:
                "Our commitment is to help you achieve your goals with style, quality, and originality.",
              image:
                "https://images.unsplash.com/photo-1542350880924-09225f70e026?q=80&w=1972&auto=format&fit=crop",
            },
            {
              title: "Details",
              description:
                "Precise attention and respect for ideas create exceptional results that exceed expectations.",
              image:
                "https://images.unsplash.com/photo-1581079949186-c0571c28b1ba?q=80&w=2026&auto=format&fit=crop",
            },
          ].map(({ title, image }, index) => (
            <motion.div
              key={index}
              className="group relative rounded-xl cursor-pointer overflow-hidden hover:shadow-xl transition-all"
            >
              <motion.img
                className="h-96 w-80 object-cover transition-transform duration-500 group-hover:scale-110"
                src={image}
                alt={title}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contador Animado */}
      <CompletedProjectsCounter />
    </>
  );
};

const CompletedProjectsCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let target = 540;
    let incrementSpeed = Math.ceil(target / 100);

    const interval = setInterval(() => {
      setCount((prev) => (prev < target ? prev + incrementSpeed : target));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className="mt-12 flex flex-col items-center justify-center text-center bg-gray-100/70 p-6 shadow-md rounded-lg">
      <motion.img
        src={logo1}
        alt="Company Logo"
        className="h-20 w-20 mb-4"
        animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <h2 className="text-3xl font-bold text-gray-800">Completed Projects</h2>
      <motion.p
        className="text-6xl font-extrabold text-indigo-600 mt-4"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        {count}
      </motion.p>
    </motion.div>
  );
};

export default MainHome;
