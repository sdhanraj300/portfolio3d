'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { useState } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
  features: string[];
  challenge: string;
  solution: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Serenity',
    description: 'Modern web app for party planning and guest coordination',
    longDescription: 'Serenity is a comprehensive event planning platform that simplifies party organization and guest management. It provides real-time updates and seamless communication between hosts and guests, making event planning a breeze.',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Prisma', 'Pusher', 'Kinde', 'SendGrid'],
    image: '/project-1.jpg',
    github: 'https://github.com/sdhanraj300/serenity',
    demo: 'https://serenityevents.vercel.app/',
    features: [
      'Event creation and RSVP management',
      'Real-time updates with Pusher',
      'Secure authentication via Kinde with JWT',
      'Photo/video sharing for memories',
      'Email notifications with SendGrid',
      'Optimized with Zustand and React Query'
    ],
    challenge: 'Creating a seamless real-time experience for event management with instant updates across all users.',
    solution: 'Implemented Pusher for real-time communication and optimized state management to ensure smooth performance.'
  },
  {
    id: 2,
    title: 'MindfulAI',
    description: 'Intelligent mental wellness chatbot',
    longDescription: 'MindfulAI is an AI-powered mental wellness companion that provides emotional support and mindfulness guidance. It offers personalized conversations and journaling features to help users manage their mental wellbeing.',
    tags: ['React', 'Redux', 'MongoDB', 'Gemini API', 'NLP', 'Cloud Deployment'],
    image: '/project-2.jpg',
    github: 'https://github.com/sdhanraj300/genai-project',
    demo: 'https://mindfulai.vercel.app/',
    features: [
      'AI-powered emotional support',
      'Personalized chat experience',
      'Emotion tagging and analysis',
      'Journaling with reflection prompts',
      'Secure user data storage',
      'Responsive and calming UI/UX'
    ],
    challenge: 'Creating an AI that provides empathetic and context-aware responses while maintaining user privacy.',
    solution: 'Integrated Google\'s Gemini API with custom emotion classification and implemented secure data handling practices.'
  },
  {
    id: 3,
    title: 'CaseCobra',
    description: 'Custom phone case design and e-commerce platform',
    longDescription: 'CaseCobra is a modern e-commerce platform for custom phone cases, offering a seamless design experience with a real-time preview. Users can upload their own designs, choose from templates, and order high-quality custom phone cases with various customization options.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Prisma', 'PostgreSQL', 'Clerk', 'UploadThing'],
    image: '/project-3.jpg',
    github: '#', // Add your GitHub link if available
    demo: 'https://casecobra2-tau.vercel.app/',
    features: [
      'Custom phone case design tool with real-time preview',
      'Secure payment processing with Stripe',
      'User authentication and order history',
      'Responsive design for all devices',
      'High-quality product rendering',
      'Admin dashboard for order management'
    ],
    challenge: 'Implementing a smooth and intuitive case customization experience with real-time preview across different device models.',
    solution: 'Developed a canvas-based design tool with React and integrated device-specific templates to ensure accurate previews and high-quality output.'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  // Unique tags for filter
  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-mono text-sm mb-4 inline-block">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag === 'all' ? 'all' : tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                (filter === tag || (tag === 'all' && filter === 'all'))
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
              {tag !== 'all' && (
                <span className="ml-1 bg-white/10 text-xs px-2 py-0.5 rounded-full">
                  {projects.filter(p => p.tags.includes(tag)).length}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="relative overflow-hidden h-56">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    {project.id % 2 === 0 ? '📱' : '💻'}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent pt-16">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700/50 text-gray-400">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => openModal(project)}
                      className="inline-flex items-center text-blue-400 hover:text-white group-hover:underline transition-colors duration-300"
                    >
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
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

        {/* View More Button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 rounded-full text-white font-medium transition-all duration-300 group"
          >
            View More on GitHub
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 50 }}
                className="bg-gray-900/95 backdrop-blur-xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-10">
                    {selectedProject.id % 2 === 0 ? '📱' : '💻'}
                  </div>
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white transition-colors"
                    aria-label="Close modal"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <h3 className="text-3xl font-bold text-white text-center px-8">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                      <h4 className="text-xl font-semibold text-white mb-4">Project Overview</h4>
                      <p className="text-gray-300 mb-6">
                        {selectedProject.longDescription}
                      </p>
                      
                      <h4 className="text-xl font-semibold text-white mb-4 mt-8">Key Features</h4>
                      <ul className="space-y-3 mb-8">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                            </div>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
                        <h5 className="font-semibold text-blue-400 mb-3">Challenge</h5>
                        <p className="text-gray-300 mb-4">{selectedProject.challenge}</p>
                        <h5 className="font-semibold text-blue-400 mb-3">Solution</h5>
                        <p className="text-gray-300">{selectedProject.solution}</p>
                      </div>
                    </div>

                    <div className="lg:w-1/3">
                      <div className="bg-gray-800/50 rounded-xl p-6 sticky top-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedProject.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="space-y-4">
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                          >
                            <Github className="w-5 h-5 mr-2" />
                            View Code
                          </a>
                          <a
                            href={selectedProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white transition-opacity"
                          >
                            <ExternalLink className="w-5 h-5 mr-2" />
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
}
