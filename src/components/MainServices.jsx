/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Card = ({ title, category, description, imgSrc, alignRight }) => {
  return (
    <motion.div
      className={`relative flex bg-clip-border rounded-xl mt-10 bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row ${
        alignRight ? "justify-end" : "justify-start"
      }`}
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div
        className={`relative w-2/5 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0 ${
          alignRight ? "order-last" : ""
        }`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={imgSrc}
          alt={`${title} - Image`}
          className="object-cover w-full h-full"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
      <motion.div
        className="p-6"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <h6 className="block mb-4 text-base font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
          {category}
        </h6>
        <h4 className="block mb-2 text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h4>
        <p className="block mb-8 text-base leading-relaxed text-gray-700">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const CardsList = () => {
  const cardsData = [
    {
      title: "Industrial Surface Preparation",
      category: "Surface Cleaning",
      description:
        "Proper surface preparation ensures durable coatings. Techniques like sandblasting, chemical cleaning, and abrasive blasting improve adhesion and longevity.",
      imgSrc:
        "https://img.freepik.com/free-photo/medium-shot-man-painting-car-door_23-2149714300.jpg?w=1380",
      alignRight: false,
    },
    {
      title: "Corrosion Protection & Coatings",
      category: "Anti-Corrosion Solutions",
      description:
        "Industrial structures need advanced protection. Epoxy paints, polyurethane coatings, and zinc-based primers defend against rust and chemical exposure.",
      imgSrc:
        "https://img.freepik.com/free-photo/side-view-worker-spraying-powder-paint-from-gun_23-2149878745.jpg?w=1380",
      alignRight: true,
    },
    {
      title: "High-Performance Floor Coatings",
      category: "Slip-Resistant Flooring",
      description:
        "Factories and warehouses need durable flooring. Epoxy and polyurethane coatings provide impact resistance, chemical protection, and slip resistance.",
      imgSrc:
        "https://img.freepik.com/free-photo/empty-garage-with-parking-lots_342744-1241.jpg?w=1380",
      alignRight: false,
    },
    {
      title: "Structural Steel Painting",
      category: "Metal Protection",
      description:
        "Steel structures need specialized coatings for longevity. Fire-resistant paints, zinc-rich primers, and industrial-grade polymer coatings enhance durability.",
      imgSrc:
        "https://img.freepik.com/free-photo/abstract-red-construction-blue-sky_23-2148744259.jpg?w=996",
      alignRight: true,
    },
    {
      title: "Environmental-Friendly Paint Solutions",
      category: "Sustainable Coatings",
      description:
        "Industries prioritize eco-friendly solutions. Low-VOC paints, water-based coatings, and sustainable finishes minimize environmental impact while ensuring durability.",
      imgSrc:
        "https://img.freepik.com/free-photo/tools-art-repairing-paint-top-view_185193-108867.jpg?w=1380",
      alignRight: false,
    },
  ];

  return (
    <motion.div
      className="flex flex-col items-center min-h-screen space-y-6"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </motion.div>
  );
};

const MainServices = () => {
  return (
    <motion.section className="py-10">
      <CardsList />
    </motion.section>
  );
};

export default MainServices;
