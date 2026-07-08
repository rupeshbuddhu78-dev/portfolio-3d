'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks';
import { PROJECTS } from '@/lib/constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section id="projects" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 gradient-text">Featured Projects</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProject(project.id)}
                className="premium-card rounded-lg overflow-hidden cursor-pointer group h-full"
              >
                {/* Project Header */}
                <div className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-purple-400 text-sm">{project.shortDescription}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-gray-300">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/40 hover:to-blue-600/40 text-sm font-medium text-gray-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="text-lg" />
                          Code
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/40 hover:to-blue-600/40 text-sm font-medium text-gray-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt className="text-lg" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          {PROJECTS.find((p) => p.id === selectedProject) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="premium-card rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto"
            >
              <div className="p-8">
                {(() => {
                  const project = PROJECTS.find((p) => p.id === selectedProject);
                  return (
                    project && (
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                        <div>
                          <h4 className="text-purple-400 font-semibold mb-2">Problem</h4>
                          <p className="text-gray-300">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="text-purple-400 font-semibold mb-2">Solution</h4>
                          <p className="text-gray-300">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-purple-400 font-semibold mb-2">Key Features</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-300">
                            {project.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )
                  );
                })()}
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
