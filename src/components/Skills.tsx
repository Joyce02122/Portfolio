import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "UX/UI Design",
    skills: [
      "User Research & Usability Testing",
      "User Flow & Journey Mapping",
      "Wireframe & Rapid Prototyping",
      "System Architecture"
    ]
  },
  {
    title: "Tools",
    skills: [
      "Figma",
      "Adobe Creative Suite",
      "Rhino3D",
      "Fusion 360",
      "Python",
      "C++",
      "React",
      "HTML/CSS/JavaScript",
      "KiCad",
      "Arduino",
      "ESP32"
    ]
  },
  {
    title: "Technical Skills",
    skills: [
      "Hardware-Software Integration",
      "Digital Fabrication",
      "Interaction Design",
      "System Architecture"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.h2
          className="heading-2 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Tools
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 text-accent">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-secondary">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 