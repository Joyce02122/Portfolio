import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';

interface Project {
  title: string;
  subtitle: string;
  imageUrl: string;
  content?: {
    overview: string;
    problem: string;
    solution: string;
    impact: string[];
    images: {
      url: string;
      alt: string;
      description: string;
    }[];
  };
}

const projects: Project[] = [
  {
    title: "CutEasy",
    subtitle: "Revolutionizing Taiwan's Haircare Industry with Smart Booking",
    imageUrl: "/images/project1/main.jpg",
    content: {
      overview: "A specialized appointment system designed for the hair salon industry, helping hairstylists better manage their schedules and improving salon booking efficiency. This multi-platform synchronized appointment system links with the schedules of hair designers and allocates time slots efficiently to improve service quality.",
      problem: "Taiwan's hair salon industry is undergoing digital transformation, with many salons still relying on in-store phones and paper records for customer appointments, or stylists using private social media to communicate with customers. This not only leads to booking errors and oversights but also consumes a significant amount of stylists' busy work time in customer communication, affecting work efficiency.",
      solution: "Develop a specialized appointment system for the hair salon industry to help salons increase customer bookings and improve business performance. The system aims to provide a convenient, fast, and reliable platform that allows customers to easily book hairstylist services while enabling stylists and salon managers to focus more on their work and improve efficiency.",
      impact: [
        "30% reduction in customer support inquiries",
        "40% increase in booking efficiency",
        "25% growth in customer retention"
      ],
      images: [
        {
          url: "/images/project1/problem.jpg",
          alt: "Current booking problems in hair salons",
          description: "Current booking system issues: phone bookings, paper records, social media communication"
        },
        {
          url: "/images/project1/solution.jpg",
          alt: "CutEasy booking system solution",
          description: "CutEasy booking system solution: LINE notifications, auto-replies, multi-platform access"
        },
        {
          url: "/images/project1/impact.jpg",
          alt: "Business impact of CutEasy",
          description: "Business impact after system launch: improved booking efficiency, increased customer retention"
        }
      ]
    }
  },
  {
    title: "Smart Home IoT",
    subtitle: "AI-Powered Home Automation for Energy Efficiency",
    imageUrl: "/images/project2.jpg"
  },
  {
    title: "Sustainability Marketplace",
    subtitle: "Creating a Circular Economy for Household Items",
    imageUrl: "/images/project3.jpg"
  }
];

const CaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectIndex = parseInt(id || '0');
  const project = projects[projectIndex];

  const handleNavigation = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && projectIndex > 0) {
      navigate(`/case-study/${projectIndex - 1}`);
    } else if (direction === 'next' && projectIndex < projects.length - 1) {
      navigate(`/case-study/${projectIndex + 1}`);
    }
  };

  return (
    <section className="min-h-screen py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <button
                onClick={() => navigate('/')}
                className="text-secondary hover:text-primary transition-colors inline-flex items-center mb-8"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </button>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-secondary">{project.subtitle}</p>
            </div>

            {project.content && (
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Overview</h2>
                  <p className="text-secondary">{project.content.overview}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Problem</h2>
                  <p className="text-secondary">{project.content.problem}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Solution</h2>
                  <p className="text-secondary">{project.content.solution}</p>
                </div>

                {project.content.images && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {project.content.images.map((image, i) => (
                      <div key={i} className="space-y-4">
                        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src={image.url}
                            alt={image.alt}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <p className="text-secondary">{image.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {project.content.impact && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Impact</h2>
                    <ul className="space-y-4">
                      {project.content.impact.map((item, i) => (
                        <li key={i} className="flex items-center text-secondary">
                          <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t">
              <button
                onClick={() => handleNavigation('prev')}
                disabled={projectIndex === 0}
                className={`flex items-center text-secondary hover:text-primary transition-colors ${
                  projectIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous Project
              </button>
              <button
                onClick={() => handleNavigation('next')}
                disabled={projectIndex === projects.length - 1}
                className={`flex items-center text-secondary hover:text-primary transition-colors ${
                  projectIndex === projects.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Next Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy; 