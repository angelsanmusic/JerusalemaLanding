import { motion } from "framer-motion";

const MainProjects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5"
    >
      {[...Array(4)].map((_, colIndex) => (
        <motion.div
          key={colIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: colIndex * 0.2 }}
          className="grid gap-4"
        >
          {[...Array(3)].map((_, imgIndex) => (
            <motion.div key={imgIndex} whileHover={{ scale: 1.05 }}>
              <img
                className="h-auto max-w-full rounded-lg shadow-lg"
                src={`https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-${colIndex * 3 + imgIndex}.jpg`}
                alt={`Project ${colIndex * 3 + imgIndex}`}
              />
            </motion.div>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MainProjects;