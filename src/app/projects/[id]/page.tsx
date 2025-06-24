'use client';
import { notFound, useParams } from 'next/navigation';
import { projects } from '@/constants/projects';
import { projectItems } from '@/constants/projectItems';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import InfiniteMenu from '@/components/InfiniteMenu';
import BlurText from '@/components/BlurText';

export default function ProjectDetails() {
  const params = useParams();
  const { id } = params;
  const project = projects.find(p => p.id.toString() === id);

  if (!project) {
    notFound();
  }
  const item2 = projectItems.find(p => p.id.toString() === id);
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Gradient background */}
      <div className="fixed inset-0 -z-10">
        {/* RGB to black gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff0000] via-[#00ff00] to-[#0000ff] opacity-30" />
        {/* Dark overlay that increases towards bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-10" />
      </div>
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          href="/#projects"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <BlurText
            text={project.title}
            className="text-4xl md:text-6xl font-bold mb-6"
            animateBy="letters"
            delay={100}
          />
          <p className="text-xl text-gray-300 max-w-3xl mb-8">{project.longDescription}</p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/80 text-white flex items-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white flex items-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          </div>
        </div>
      </div>

      {/* Project Gallery */}
      <div className="relative w-full bg-gray-900/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Project Gallery</h2>
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden bg-gray-800/30 backdrop-blur-sm">
              <InfiniteMenu items={item2?.images} />
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              {/* Project Overview */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Project Overview
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {project.longDescription}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mr-3 transform group-hover:scale-125 transition-transform"></div>
                      </div>
                      <span className="text-gray-300 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenge & Solution */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">Challenge</h3>
                <p className="text-gray-300 mb-8 text-lg">{project.challenge}</p>
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">Solution</h3>
                <p className="text-gray-300 text-lg">{project.solution}</p>
              </div>
            </div>

            {/* Technologies & Links */}
            <div className="space-y-6">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 sticky top-6">
                <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-sm rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Project Links</h3>
                  <div className="space-y-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 text-white transition-all"
                    >
                      <Github className="w-5 h-5 flex-shrink-0" />
                      <span>GitHub Repository</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500/90 to-purple-600/90 hover:opacity-90 text-white transition-all"
                    >
                      <ExternalLink className="w-5 h-5 flex-shrink-0" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
