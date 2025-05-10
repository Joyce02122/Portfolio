import React from 'react';
import { motion } from 'framer-motion';

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  location: string;
  details?: string;
}

const educationItems: EducationItem[] = [
  {
    degree: "M.S in Technology Innovation (HCI)",
    school: "University of Washington",
    period: "2024 - Present",
    location: "Bellevue, WA"
  },
  {
    degree: "Major in Arts and Design",
    school: "National Tsing Hua University",
    period: "2019 - 2023",
    location: "Hsinchu, Taiwan"
  },
  {
    degree: "Minor in Communication and Technology",
    school: "National Yang Ming Chiao Tung University (NYCU)",
    period: "2020 - 2024",
    location: "Hsinchu, Taiwan"
  }
];

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <motion.h2
          className="heading-2 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {educationItems.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-accent mb-2">{edu.school}</p>
              <p className="text-secondary">{edu.period}</p>
              <p className="text-secondary">{edu.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 