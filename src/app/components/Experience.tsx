'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Experience() {
  const experiences = [
    {
      company: "Intel Corporation",
      title: "AI Research Intern",
      dates: "Summer 2022",
      description: "Conducted research on energy-efficient AI algorithms for edge computing. Developed a novel model compression technique that reduced model size by 60% without significant loss in accuracy.",
    },
    {
      company: "Tesla",
      title: "Robotics Software Engineer Intern",
      dates: "Summer 2021",
      description: "Worked on the development of autonomous navigation software for Tesla's robots. Implemented sensor fusion algorithms and improved the robustness of the navigation system in challenging environments.",
    },
    {
      company: "Lockheed Martin",
      title: "Software Engineer Intern",
      dates: "Summer 2020",
      description: "Developed machine learning model for remote sensing data classification with an average accuracy of 98%. Enhanced real-time processing capabilities by 40% through algorithm optimization.",
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800">
      <h2 className="text-3xl font-bold mb-16">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-zinc-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
            <p className="text-zinc-400 mb-2">{experience.company}</p>
            <p className="text-zinc-500 mb-4">{experience.dates}</p>
            <p className="text-zinc-300">{experience.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
