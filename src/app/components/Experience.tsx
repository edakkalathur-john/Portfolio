'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experience = [
    {
      position: "Volunteer Research Assistant",
      company: "RISE Lab, Arizona State University",
      period: "Oct 2024 - Present",
      details: [
        "Collaborated with PhD students to design advanced trajectory planning algorithms for the UR5 robotic arm, implementing smooth circular and multi-waypoint trajectories using Python",
        "Simulated robotic motions in ROS and Gazebo, ensuring stability and precision of planned trajectories",
        "Integrated TRAC-IK for inverse kinematics, enabling precise real-time control of robotic end-effectors in teleoperation tasks"
      ]
    },
    {
      position: "Intern",
      company: "K-Tech Centre of Excellence in Aerospace",
      period: "May 2023 - Aug 2023",
      details: [
        "Modeled and simulated a robotic arm to perform quality checks and enhance automation efficiency using CATIA, SIMULIA, and DELMIA within the 3D EXPERIENCE application, resulting in a 15% improvement in task accuracy",
        "Contributed to optimizing the robotic arm's design and operation, which led to a 10% reduction in energy consumption and a 5% decrease in cycle time for automated processes",
        "Developed and implemented simulation models to identify and address potential operational issues, enhancing the arm's reliability and reducing downtime by 20%"
      ]
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800">
      <h2 className="text-3xl font-bold mb-16 flex items-center gap-3">
        <Briefcase className="w-8 h-8" />
        Work Experience
      </h2>
      <div className="space-y-12">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-zinc-900/50 rounded-xl p-8 hover:bg-zinc-900/70 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <div className="flex items-center gap-2 text-zinc-400">
                <Calendar className="w-4 h-4" />
                {exp.period}
              </div>
            </div>
            <p className="text-lg text-zinc-300 mb-4">{exp.company}</p>
            <ul className="space-y-2">
              {exp.details.map((detail, i) => (
                <li key={i} className="text-zinc-400 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
