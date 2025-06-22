'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      id="home" 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="text-center">
          <motion.p 
            className="text-lg md:text-xl text-blue-400 font-mono mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, my name is
          </motion.p>
          
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dhanraj Singh
          </motion.h1>
          
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I build things for the web.
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I&apos;m a passionate <span className="text-white font-medium">Frontend Developer</span> specializing in building exceptional digital experiences. Currently, I&apos;m focused on creating accessible, human-centered products at{' '}
            <a href="https://datapeace.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Data Peace</a>
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#projects" 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-all duration-300 hover:border-blue-400/50 hover:text-blue-400"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{ y: yBg, opacity }}
      >
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 -right-4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="mb-2">Scroll down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-gray-400 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
