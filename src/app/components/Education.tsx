'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Education() {
  const educations = [
    {
      institution: "Arizona State University",
      degree: "Master of Science in Robotics and Autonomous Systems",
      dates: "2023 - Present",
      description: "Currently pursuing a Master's degree with a focus on AI, Machine Learning, and Robotics. Researching multi-agent reinforcement learning and autonomous navigation.",
    },
    {
      institution: "Arizona State University",
      degree: "Bachelor of Science in Electrical Engineering",
      dates: "2019 - 2023",
      description: "Graduated with honors, specializing in control systems and robotics. Completed a senior design project involving the development of a smart home automation system.",
    }
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800">
      <h2 className="text-3xl font-bold mb-16">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educations.map((education, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-zinc-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-2">{education.degree}</h3>
            <p className="text-zinc-400 mb-2">{education.institution}</p>
            <p className="text-zinc-500 mb-4">{education.dates}</p>
            <p className="text-zinc-300">{education.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
