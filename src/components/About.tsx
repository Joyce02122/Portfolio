import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">About Me</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Background</h3>
              <p className="text-secondary leading-relaxed">
                I am a product designer specializing in user experience design, with extensive experience in digital product design. I am passionate about solving complex design challenges and dedicated to creating intuitive and user-friendly product experiences. My design philosophy prioritizes user needs while ensuring both aesthetic appeal and functionality.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Design Philosophy</h3>
              <p className="text-secondary leading-relaxed">
                I believe that good design should be invisible, seamlessly integrating into users' lives and enabling them to effortlessly achieve their goals. I pay meticulous attention to detail, strive for perfection, and continuously learn about new design trends and technologies to provide the best design solutions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Skills & Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Design Skills</h4>
                  <ul className="space-y-2 text-secondary">
                    <li>• User Research & Analysis</li>
                    <li>• Wireframing & Prototyping</li>
                    <li>• UI/UX Design</li>
                    <li>• Design Systems</li>
                    <li>• User Testing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Tools & Technologies</h4>
                  <ul className="space-y-2 text-secondary">
                    <li>• Figma</li>
                    <li>• Adobe Creative Suite</li>
                    <li>• Sketch</li>
                    <li>• HTML/CSS</li>
                    <li>• React/TypeScript</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Work Approach</h3>
              <p className="text-secondary leading-relaxed">
                I employ a user-centered design methodology, starting with research to deeply understand user needs, followed by an iterative design process to optimize product experiences. I value collaboration with team members and believe that through effective communication and cooperation, we can create better products.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 