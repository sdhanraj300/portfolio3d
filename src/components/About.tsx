'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Briefcase, CpuIcon, GraduationCap, HammerIcon } from 'lucide-react';
import { skills } from '@/constants/skills';
import { experiences } from '@/constants/experience';
import { education } from '@/constants/education';
import BlurText from '@/components/BlurText';
import GlareHover from './GlareHover';
import SplitText from './SplitText';


export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-black to-gray-900/50">
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

          <div className="absolute -top-20 -right-20 w-40 h-40 opacity-20">
            <Globe className="w-full h-full text-blue-400 animate-float" />
          </div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 opacity-20">
            <CpuIcon className="w-full h-full text-purple-400 animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={2000}
          playOnce={false}
        >
          <div className="grid grid-cols-1 px-1 lg:px-10 lg:grid-cols-1 gap-12 items-start">
            <div className="pt-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative h-full w-full bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-white/5 shadow-2xl overflow-hidden">
                  <div className="flex p-6 flex-col">
                    <div className="flex font-bold items-center">
                      <HammerIcon className="w-6 h-6 mr-2 text-blue-400" />
                      <BlurText
                        text="Skills"
                        delay={300}
                        animateBy="letters"
                        direction="bottom"
                        className="text-6xl md:text-7xl mb-6 md:mb-8 inline-block bg-clip-text"
                      />
                    </div>
                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
                      {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        // Generate a unique hue based on the skill name
                        const hue = (skill.name.split('').reduce((a, b) => a + b.charCodeAt(0), 0) * 13) % 360;
                        const bgColor = `hsla(${hue}, 70%, 50%, 0.15)`;
                        const hoverBgColor = `hsla(${hue}, 70%, 50%, 0.25)`;
                        const borderColor = `hsla(${hue}, 70%, 50%, 0.3)`;
                        const textColor = `hsl(${hue}, 70%, 80%)`;

                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.08,
                              ease: [0.16, 1, 0.3, 1]
                            }}
                            style={{
                              background: bgColor,
                              border: `1px solid ${borderColor}`,
                              '--hover-bg-color': hoverBgColor
                            } as React.CSSProperties}
                            className="group flex items-center p-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_-3px_rgba(0,0,0,0.3)] hover:scale-105 hover:z-10"
                            viewport={{ once: true }}
                          >
                            <motion.div
                              className="mr-3"
                              style={{ color: textColor }}
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: index * 0.08 + 0.2, duration: 0.5 }}
                            >
                              <Icon className="w-6 h-6" />
                            </motion.div>
                            <motion.span
                              className="font-bold"
                              style={{ color: textColor }}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: index * 0.08 + 0.3, duration: 0.5 }}
                            >
                              {skill.name}
                            </motion.span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-8">
              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-2xl"
              >
                <div className="text-2xl font-bold inline-flex justify-center items-center text-white mb-6">
                  <Briefcase className="h-6 w-6 mr-2 text-blue-400" />
                  <SplitText className="text-5xl md:text-7xl mb-6 md:mb-8 inline-block bg-clip-text" text="Experience" />
                </div>

                <div className="space-y-8 relative">
                  <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/50 to-pink-500/20 -z-10"></div>

                  {experiences.map((exp, index) => (
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
                <div className="text-2xl font-bold flex items-center text-white mb-6">
                  <GraduationCap className="h-8 w-8 mr-3 text-blue-400" />
                  <SplitText className="text-5xl md:text-7xl mb-6 md:mb-8 inline-block bg-clip-text" text="Education" />
                </div>

                <div className="space-y-8 relative">
                  <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/50 to-pink-500/20 -z-10"></div>
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-12">
                      <div className="absolute left-5 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 -ml-1.5"></div>
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      <p className="text-blue-400">{edu.institution}</p>
                      <p className="text-sm text-gray-500 mt-1">{edu.period}</p>
                      <p className="text-gray-400 text-sm mt-2">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </GlareHover>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
}
