import React from 'react';
import { motion } from 'framer-motion';

interface Award {
  title: string;
  organization: string;
  year: string;
  description?: string;
}

const awards: Award[] = [
  {
    title: "LINE FRESH 2022 Campus Competition",
    organization: "LINE",
    year: "2022",
    description: "1st place"
  },
  {
    title: "MEICHU Hackathon",
    organization: "MEICHU",
    year: "2022",
    description: "2nd place"
  },
  {
    title: "Young Pin Design Award",
    organization: "Young Pin Design",
    year: "2023",
    description: "Product Design Category Finalist"
  },
  {
    title: "Hotai Group Corporate Social Responsibility (CSR) Initiative",
    organization: "Hotai Group",
    year: "2023"
  }
];

const Awards = () => {
  return (
    <section id="awards" className="section-padding">
      <div className="container-custom">
        <motion.h2
          className="heading-2 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Awards & Recognition
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2">{award.title}</h3>
              <p className="text-accent mb-2">{award.organization}</p>
              <p className="text-secondary">{award.year}</p>
              {award.description && (
                <p className="text-secondary mt-2">{award.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards; 