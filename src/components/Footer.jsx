"use client"

import { Link } from "react-router-dom"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"

const routes = {
  Home: "/",
  "About Us": "/about",
  Projects: "/projects",
  Contact: "/contact",
}

const Footer = () => {
  return (
    <footer className="relative  bg-blue-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-6 py-16 lg:py-24">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand section - takes more space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Jerusalema
                <span className="block text-zinc-400">Diamond</span>
              </h2>
              <div className="w-17 h-1 bg-white" />
            </div>
            <p className="text-zinc-300 text-lg leading-relaxed max-w-md text-pretty">
              Since 2020, we've been adding color and protection to industrial spaces with high-quality painting
              services.
            </p>
          </motion.div>

          {/* Navigation section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <h3 className="text-xs uppercase tracking-widest text-white font-medium">Navigation</h3>
            <ul className="space-y-3">
              {Object.keys(routes).map((item, index) => (
                <motion.li key={index} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link
                    to={routes[item]}
                    className="text-zinc-200 hover:text-white transition-colors text-lg inline-block group"
                  >
                    {item}
                    <span className="block h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Contact section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <h3 className="text-xs uppercase tracking-widest text-white font-medium">Connect</h3>
            <div className="flex gap-4">
              <motion.a
                href="https://www.facebook.com/profile.php?id=100087416439684"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-zinc-800 hover:border-white flex items-center justify-center transition-colors group"
              >
                <FaFacebookF className="text-zinc-200 group-hover:text-white transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/jerusalemadiamond/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-zinc-800 hover:border-white flex items-center justify-center transition-colors group"
              >
                <FaInstagram className="text-zinc-200 group-hover:text-white transition-colors" />
              </motion.a>
            </div>
            <div className="pt-4 space-y-2">
              <p className="text-zinc-300 text-sm">Ready to transform your space?</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all group"
              >
                <span className="text-lg">Get in touch</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-zinc-300 text-sm">© 2025 Jerusalema Diamond Company. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-zinc-300">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
