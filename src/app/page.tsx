'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';

// Dynamically import components with no SSR
const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });
const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.3, 0]);

  return (
    <div className="relative min-h-screen bg-black text-white" ref={targetRef}>
      {/* 3D Background Scene */}
      <div className="fixed inset-0 -z-10">
        <Scene />
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center z-50"
        style={{ opacity }}
      >
        <div className="w-1 h-6 bg-white rounded-full animate-bounce"></div>
      </motion.div>

      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
