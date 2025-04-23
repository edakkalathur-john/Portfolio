'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      list: ["Python", "C++", "JavaScript", "Java", "MATLAB"]
    },
    {
      category: "AI and Machine Learning",
      list: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "ROS", "NLP"]
    },
    {
      category: "Robotics",
      list: ["ROS", "Gazebo", "SLAM", "Navigation", "Control Systems"]
    },
    {
      category: "Data Analysis and Visualization",
      list: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau"]
    },
    {
      category: "Software Development",
      list: ["Git", "Docker", "REST APIs", "Agile Development", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800">
      <h2 className="text-3xl font-bold mb-16">Skills</h2>
      <div>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
            <div className="flex flex-wrap gap-4">
              {skill.list.map((item, i) => (
                <span key={i} className="px-4 py-2 bg-zinc-900/80 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
