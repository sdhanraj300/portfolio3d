'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/yourusername',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
    },
    {
      icon: <Twitter size={20} />,
      href: 'https://twitter.com/yourusername',
      label: 'Twitter',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:your.email@example.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block">
              Let&apos;s Work Together
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              I&apos;m always open to discussing product design work or partnership opportunities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>© {currentYear} Your Name. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ using Next.js, Three.js, and Tailwind CSS</p>
        </motion.div>
      </div>
    </footer>
  );
}
