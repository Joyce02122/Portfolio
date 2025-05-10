import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const featuredProjects = [
    {
      title: "CutEasy",
      subtitle: "Revolutionizing Taiwan's Haircare Industry with Smart Booking",
      imageUrl: "/images/project1/main.jpg",
      tags: ["UX Research", "UI Design", "Product Strategy"]
    },
    {
      title: "Smart Home IoT",
      subtitle: "AI-Powered Home Automation for Energy Efficiency",
      imageUrl: "/images/project2.jpg",
      tags: ["IoT", "AI/ML", "UX Design"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Joyce Chou
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8">
              Product Designer & UX Researcher
            </p>
            <p className="text-lg text-secondary mb-12 max-w-2xl mx-auto">
              I create user-centered digital experiences that solve real problems and delight users. 
              With a focus on research-driven design and thoughtful interactions, I help businesses 
              build products that people love to use.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/projects"
                className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
              >
                View Projects
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors"
              >
                About Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
              <Link
                to="/projects"
                className="text-accent hover:text-accent/80 transition-colors inline-flex items-center"
              >
                View All Projects
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-secondary mb-4">{project.subtitle}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/case-study/${index}`}
                      className="text-primary hover:text-accent transition-colors inline-flex items-center"
                    >
                      View Case Study
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero; 