'use client';

import React, { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Layout, Database, Server, Globe, CpuIcon, Code2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';

// Dynamically import 3D components with SSR disabled
const SkillOrbit = dynamic(
  () => import('./3d/SkillOrbit').then((mod) => mod.default),
  { ssr: false, loading: () => <div className="w-full h-96 bg-gray-900/50 rounded-2xl" /> }
);

const FloatingCard = dynamic(
  () => import('./3d/FloatingCard').then((mod) => mod.default),
  { ssr: false }
);

type Skill = {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'other'
};

const skills: Skill[] = [
  {
    name: 'Next.js',
    level: 90,
    icon: <Layout className="w-6 h-6" />,
    category: 'frontend'
  },
  {
    name: 'React',
    level: 92,
    icon: <Code className="w-6 h-6" />,
    category: 'frontend'
  },
  {
    name: 'Node.js',
    level: 88,
    icon: <Server className="w-6 h-6" />,
    category: 'backend'
  },
  {
    name: 'MongoDB',
    level: 85,
    icon: <Database className="w-6 h-6" />,
    category: 'backend'
  },
  {
    name: 'SQL',
    level: 85,
    icon: <Database className="w-6 h-6" />,
    category: 'backend'
  },
  {
    name: 'Prisma',
    level: 88,
    icon: <Cpu className="w-6 h-6" />,
    category: 'backend'
  },
  {
    name: 'Java',
    level: 82,
    icon: <Code2 className="w-6 h-6" />,
    category: 'other'
  },
  {
    name: 'DSA',
    level: 90,
    icon: <CpuIcon className="w-6 h-6" />,
    category: 'other'
  },
  {
    name: 'Python',
    level: 80,
    icon: <Code2 className="w-6 h-6" />,
    category: 'other'
  },
  {
    name: 'C++',
    level: 75,
    icon: <Code2 className="w-6 h-6" />,
    category: 'other'
  },
  {
    name: 'JavaScript',
    level: 95,
    icon: <Code className="w-6 h-6" />,
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    level: 90,
    icon: <Code className="w-6 h-6" />,
    category: 'frontend'
  },
  {
    name: 'HTML/CSS',
    level: 95,
    icon: <Code className="w-6 h-6" />,
    category: 'frontend'
  },
];

const categories = [
  { id: 'all', name: 'All', count: skills.length },
  {
    id: 'frontend',
    name: 'Frontend',
    count: skills.filter(skill => skill.category === 'frontend').length
  },
  {
    id: 'backend',
    name: 'Backend',
    count: skills.filter(skill => skill.category === 'backend').length
  },
];

export default function About() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);


  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-black to-gray-900/50">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16 relative z-10"
        >
          <motion.span
            className="text-blue-400 font-mono text-sm mb-4 inline-block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Get to know me
          </motion.span>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.p
            className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            I&apos;m a passionate <span className="text-white font-medium">Frontend Developer</span> specializing in building exceptional digital experiences. Currently, I&apos;m focused on creating accessible, human-centered products at{' '}performant web applications using modern technologies.
          </motion.p>

          {/* 3D Floating Icons */}
          <div className="absolute -top-20 -right-20 w-40 h-40 opacity-20">
            <Globe className="w-full h-full text-blue-400 animate-float" />
          </div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 opacity-20">
            <CpuIcon className="w-full h-full text-purple-400 animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Skills & Approach */}
          <div className="space-y-8">
            {/* Skills Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 w-full bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-white/5 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 z-10 p-6 flex flex-col">
                  <h2 className="text-4xl font-bold text-white mb-6">Dhanraj Singh</h2>
                  <p className="text-gray-300 mb-8 max-w-2xl">
                    A passionate Full Stack Developer with hands-on experience in modern web technologies.
                    Completed B.Tech in Information Technology from JSS Noida.
                  </p>

                  {/* Category Filter */}
                  <div className="flex flex-wrap gap-2 mb-4 z-20">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${activeCategory === category.id
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                          }`}
                      >
                        {category.name}
                        <span className="ml-1 text-xs bg-white/10 px-2 py-0.5 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3D Skill Orbit */}
                <div className="absolute inset-0 z-0">
                  <SkillOrbit skills={filteredSkills} />
                </div>

                {/* Skill Legend */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-10">
                  <div className="grid grid-cols-2 gap-4">
                    {filteredSkills.slice(0, 4).map((skill) => (
                      <div key={skill.name} className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            background: `hsl(${Math.random() * 360}, 80%, 60%)`
                          }}
                        />
                        <span className="text-sm text-gray-300">{skill.name}</span>
                      </div>
                    ))}
                    {filteredSkills.length > 4 && (
                      <div className="text-sm text-gray-500">+{filteredSkills.length - 4} more</div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card: My Approach */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-64"
            >
              <div className="absolute inset-0 w-full h-full">
                <Suspense fallback={null}>
                  <Canvas camera={{ position: [0, 0, 15], fov: 45, near: 0.1, far: 1000 }}>
                    <ambientLight intensity={0.8} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} />
                    <FloatingCard
                      position={[0, 0, 0]}
                      title="My Approach"
                    >
                      I believe in clean, maintainable code and user-centered design. My approach combines modern web technologies with performance optimization to deliver seamless experiences.
                    </FloatingCard>
                  </Canvas>
                </Suspense>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Experience & Education */}
          <div className="space-y-8">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Experience
              </h3>

              <div className="space-y-8 relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/50 to-pink-500/20 -z-10"></div>

                {[
                  {
                    role: 'Full Stack Intern',
                    company: 'Data Peace',
                    period: 'June 2025 - Present',
                    description: 'Working on full-stack development projects, implementing modern web technologies, and contributing to production-level code.'
                  },
                  {
                    role: 'Full Stack Intern',
                    company: 'iSchoolConnect',
                    period: 'April 2025 - 2025',
                    description: 'Developed and maintained web applications, implemented features, and collaborated with the development team.'
                  }
                ].map((exp, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-5 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 -ml-1.5"></div>
                    <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                    <p className="text-blue-400 font-mono text-sm mb-1">{exp.company} • {exp.period}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                Education
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white">B.Tech in Information Technology</h4>
                  <p className="text-gray-400">J.S.S. Academy of Technical Education, Noida</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Class 10th & Class 12th</h4>
                  <p className="text-gray-400">Carman School, Dehradun</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
}
