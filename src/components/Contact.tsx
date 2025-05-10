import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.h2
          className="heading-2 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <EnvelopeIcon className="h-6 w-6 text-accent" />
                <a
                  href="mailto:joycechou234@gmail.com"
                  className="text-lg text-secondary hover:text-accent transition-colors"
                >
                  joycechou234@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-6 w-6 text-accent" />
                <a
                  href="tel:+14256528545"
                  className="text-lg text-secondary hover:text-accent transition-colors"
                >
                  (425) 652-8545
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 