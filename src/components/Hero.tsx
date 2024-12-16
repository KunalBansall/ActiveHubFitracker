import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Dumbbell } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 to-black flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920"
          alt="Gym Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-white text-center md:text-left"
          >
            <div className="flex justify-center md:justify-start items-center gap-2 mb-6">
              <Dumbbell className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">ActiveHub Fitracker</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Revolutionize Your
              <span className="text-blue-400"> Gym Experience</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
              Transform your gym management with our all-in-one solution. Streamline operations, enhance member experience, and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg flex items-center gap-2 transition-all"
              >
                <a href="#feature">Get Started</a>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-white/10 transition-all"
              >
                <a href="#features">Learn More</a>
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 mt-8 md:mt-0"
          >
            <img
              src="https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800"
              alt="Gym Management"
              className="rounded-lg shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-full mx-auto"
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"
      />
    </div>
  );
}
