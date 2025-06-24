'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import BlurText from './BlurText';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 inline-block">
            <BlurText 
              text="Get In Touch"
              className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text"
              animateBy="letters"
              delay={100}
            />
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out to me through any of the following channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-xl border border-white/10">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                <Mail className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <a
                href="mailto:dhanraj02025@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                dhanraj02025@gmail.com
              </a>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-xl border border-white/10">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                <Phone className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Me</h3>
              <a
                href="tel:+916386196872"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                +91 63861 96872
              </a>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-xl border border-white/10">
              <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-4">
                <MapPin className="text-pink-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Noida, India</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] p-8 rounded-xl border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Project inquiry or job opportunity"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project and how I can help..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
