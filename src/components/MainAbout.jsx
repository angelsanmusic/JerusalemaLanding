import img3 from "../assets/img3.jpg";
import { motion } from "framer-motion";

const MainAbout = () => {
  return (
    <div className="bg-gray-50/70">
      <div className="py-8 md:py-16 max-w-[1200px] mx-auto px-4">
        <div className="space-y-16">
          {/* Bloque: Vision */}
          <motion.div
            className="flex flex-col md:flex-row md:items-center md:justify-center gap-16 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex-1 space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="font-medium text-2xl">Vision</h3>
              <p>
                To be the most trusted and recognized industrial and commercial
                painting company, providing top-quality solutions to major
                corporations and retail chains across the United States and
                international markets.
              </p>
            </motion.div>

            <motion.div
              className="flex-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="aspect-video">
                <motion.img
                  src={img3}
                  alt="Advanced Facial Recognition"
                  className="object-cover w-full h-full rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Bloque: Mission */}
          <motion.div
            className="flex flex-col md:flex-row-reverse md:items-center md:justify-center gap-16 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex-1 space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="font-medium text-2xl">Mission</h3>
              <p>
                Multi-Device Synchronization
                <br />
                We deliver industrial and commercial painting services with
                precision and excellence, ensuring flawless results for
                industry-leading companies. Our expertise lies in securing
                high-value contracts and strategic projects, allowing our
                clients to enhance their spaces with confidence and
                professionalism.
              </p>
            </motion.div>

            <motion.div
              className="flex-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="aspect-video">
                <motion.img
                  src={img3}
                  alt="Multi-Device Synchronization"
                  className="object-cover w-full h-full rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Nueva sección con iconos */}
          <div className="container mx-auto max-w-5xl flex flex-wrap gap-12 items-start justify-center md:justify-between py-20">
            {[
              {
                title: "Safe",
                description:
                  "Our products are secure and private out-of-the-box",
                iconColor: "text-amber-400",
                path: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
              },
              {
                title: "Efficient",
                description: "Feel good about your wallet and the environment",
                iconColor: "text-teal-400",
                path: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
              },
              {
                title: "Proven",
                description: "Leading the Smart Home world for 10 years",
                iconColor: "text-violet-400",
                path: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="grid gap-4 justify-items-center text-center md:flex-1"
              >
                <div className="rounded-full border-8 border-amber-400 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-14 h-14 ${item.iconColor}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.path}
                    ></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-700/50 p-4 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
              <div className="md:w-2/3 lg:w-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-gray-100"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">
                  How we work?
                </h2>
                <p className="text-gray-300">
                  We follow our process to get you started as quickly as
                  possible
                </p>
              </div>

              <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border border-gray-700 text-gray-600 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                  <div className="relative space-y-8 py-12 p-8">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      color="white"
                      className="w-12 h-12"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M10 10l2 -2v8"></path>
                    </svg>
                    <div className="space-y-2">
                      <h5 className="text-xl font-semibold text-white transition">
                        Assessment and Planning
                      </h5>
                      <p className="text-gray-300">
                        We evaluate surfaces, set quality standards, plan
                        logistics, and secure optimal contracts for efficiency
                        and precision
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                  <div className="relative space-y-8 py-12 p-8">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      color="white"
                      className="w-12 h-12"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"></path>
                    </svg>
                    <div className="space-y-2">
                      <h5 className="text-xl font-semibold text-white transition">
                        Preparation and Safety
                      </h5>
                      <p className="text-gray-300">
                        Surfaces are prepared, protected, and safety protocols
                        enforced. High-quality materials and techniques are
                        selected.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                  <div className="relative space-y-8 py-12 p-8">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      color="white"
                      className="w-12 h-12"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1"></path>
                    </svg>
                    <div className="space-y-2">
                      <h5 className="text-xl font-semibold text-white transition">
                        Painting Execution
                      </h5>
                      <p className="text-gray-300">
                        We will develop your product MVP in 15 days (more time
                        required depending on the complexity).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                  <div className="relative space-y-8 py-12 p-8">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      color="white"
                      className="w-12 h-12"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M10 8v3a1 1 0 0 0 1 1h3"></path>
                      <path d="M14 8v8"></path>
                    </svg>
                    <div className="space-y-2">
                      <h5 className="text-xl font-semibold text-white transition">
                        Celebrate your Launch
                      </h5>
                      <p className="text-gray-300">
                        We love Celebrations. We will celebrate your launch on
                        our Social Profiles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-2xl w-f mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl xl:text-5xl">
              A Philosophy of Precision and Excellence
            </h1>
            <p className="mt-6 text-lg leading-7 text-black/70 lg:leading-8 lg:text-xl">
              We believe in working with full dedication, strength, and
              precision. Every project is an opportunity to give our best,
              ensuring quality, efficiency, and excellence in everything we
              do—just as we are reminded: ‘Whatever your hand finds to do, do it
              with all your might.’ (Ecclesiastes 9:10).
            </p>
            <div className="mt-8">
              <a href="#" target="_blank" className="block"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
