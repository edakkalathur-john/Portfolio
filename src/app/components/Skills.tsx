'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {
  Code2,
  Notebook as Robot,
  Brain,
  Database,
  Settings,
  Terminal,
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      name: 'Programming Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['Python', 'C++', 'MATLAB', 'ROS'],
    },
    {
      name: 'Robotics',
      icon: <Robot className="w-6 h-6" />,
      skills: [
        'Robot Operating System (ROS)',
        'Gazebo',
        'Motion Planning',
        'Computer Vision',
        'Sensor Integration',
      ],
    },
    {
      name: 'Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      skills: [
        'TensorFlow',
        'PyTorch',
        'Reinforcement Learning',
        'Computer Vision',
        'Neural Networks',
      ],
    },
    {
      name: 'Tools & Technologies',
      icon: <Settings className="w-6 h-6" />,
      skills: ['Git', 'Docker', 'Linux', 'OpenCV', 'CUDA'],
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800">
      <h2 className="text-3xl font-bold mb-16">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: index * 0.1}}
            className="bg-zinc-900/50 rounded-xl p-6 hover:bg-zinc-900/70 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-zinc-800 rounded-lg">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
