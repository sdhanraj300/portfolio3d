'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/constants/projects';
import TiltedCard from './TiltedCard';
import Link from 'next/link';
import BlurText from './BlurText';

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-mono text-sm mb-4 inline-block">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="inline-block">
              <BlurText 
                text="Featured Projects"
                className="inline-block"
                animateBy="letters"
                delay={100}
              />
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="relative w-full aspect-[4/3] bg-gray-900/50 rounded-2xl overflow-hidden">
                    <TiltedCard
                      containerHeight="100%"
                      containerWidth="100%"
                      rotateAmplitude={8}
                      scaleOnHover={1.02}
                      showMobileWarning={false}
                      showTooltip={false}
                      displayOverlayContent={true}
                      className="w-full h-full"
                      overlayContent={
                        <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                          <p className="text-gray-300 text-sm">
                            {project.description}
                          </p>
                        </div>
                      }
                    >
                      <div className="relative w-full h-full flex items-center justify-center p-4">
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain"
                            onError={(e) => {
                              console.error('Error loading image:', project.image, e);
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      </div>
                    </TiltedCard>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <Link 
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center text-blue-400 hover:text-white group-hover:underline transition-colors duration-300"
                      >
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                      <div className="flex space-x-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/70 text-gray-400 hover:text-white transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
}
