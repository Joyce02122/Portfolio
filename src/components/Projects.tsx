import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Project {
  title: string;
  subtitle: string;
  imageUrl: string;
  tags: string[];
}

const projects: Project[] = [
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
  },
  {
    title: "Sustainability Marketplace",
    subtitle: "Creating a Circular Economy for Household Items",
    imageUrl: "/images/project3.jpg",
    tags: ["E-commerce", "Sustainability", "UX/UI"]
  }
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen pt-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Projects</h2>
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                {/* Image Section */}
                <div className="md:w-1/2">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-xl text-secondary mb-6">{project.subtitle}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => navigate(`/case-study/${index}`)}
                    className="text-primary hover:text-accent transition-colors inline-flex items-center text-lg"
                  >
                    View Case Study
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 