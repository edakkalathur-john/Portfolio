'use client';

import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Github, Mail, Linkedin, ChevronRight as ChessKnight, Hand, Notebook as Robot, Cloud, Box, Code } from 'lucide-react';
import { Scene } from '@/components/Scene';
import { ProjectDetail } from './components/ProjectDetail';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { motion, useScroll, useTransform } from 'framer-motion';

function HomePage() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const projects = [
    {
      id: "assistive-robot-control",
      title: "Assistive Robot Control System",
      description: "A system for controlling a robotic arm through hand gestures, achieving 98% accuracy in real-time gesture recognition using MediaPipe.",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["MediaPipe", "Python", "Machine Learning", "3D Printing"],
      icon: <Hand className="w-6 h-6" />,
      link: "/project/assistive-robot-control"
    },
    {
      id: "multi-robot-solar",
      title: "Multi-Robot Solar-Powered System",
      description: "A cooperative multi-robot system with solar-powered UGVs and UAVs for efficient exploration and coverage.",
      image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["Python", "MARL", "ROS", "Voronoi"],
      icon: <Robot className="w-6 h-6" />,
      link: "/project/multi-robot-solar"
    },
    {
      id: "ur5-trajectory",
      title: "UR5 Trajectory Planning",
      description: "Advanced trajectory planning system for UR5 robotic arm, implementing smooth continuous motions using parametric equations and polynomial trajectories.",
      image: "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["Python", "ROS", "TRAC-IK", "SciPy"],
      icon: <Box className="w-6 h-6" />,
      link: "/project/ur5-trajectory"
    },
    {
      id: "weather-forecasting",
      title: "Weather Forecasting System",
      description: "Advanced weather forecasting system using LSTM and SARIMA models for accurate predictions. Implemented ensemble learning for improved accuracy.",
      image: "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["Python", "TensorFlow", "SARIMA", "Pandas"],
      icon: <Cloud className="w-6 h-6" />,
      link: "/project/weather-forecasting"
    },
    {
      id: "autonomous-chess-robot",
      title: "Project Arc: Autonomous Chess-Playing Robot",
      description: "Developed an autonomous robot designed to play chess using computer vision and deep learning techniques. Achieved 95% accuracy in move identification.",
      image: "https://images.pexels.com/photos/411195/pexels-photo-411195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["Python", "YOLO", "OpenCV", "CNNs"],
      icon: <ChessKnight className="w-6 h-6" />,
      link: "/project/autonomous-chess-robot"
    },
    {
      id: "ai-chatbot",
      title: "AI Customer Service Chatbot",
      description: "Advanced chatbot using natural language processing for customer service automation. Integrates with multiple platforms and handles complex conversations.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["Python", "TensorFlow", "NLP", "FastAPI"],
      icon: <Code className="w-6 h-6" />,
      link: "/project/ai-chatbot"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#000000]" />
        </div>
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-zinc-900/50 backdrop-blur-sm mb-4 motion-reduce:transform-none"
          >
            <span className="text-white">Hello, I'm Benhar 👋</span>
          </motion.div>
          <motion.h1 
            className="font-sans text-[clamp(3rem,8vw,5.5rem)] font-bold mb-6 text-white antialiased leading-tight"
          >
            Robotics Engineer designing
          </motion.h1>
          <motion.h2
            className="font-sans text-[clamp(2rem,6vw,3rem)] font-bold text-[#a3a3a3] mb-8 antialiased"
          >
            AI-powered intelligent systems
          </motion.h2>
          <motion.div
            className="flex justify-center gap-4 mb-12"
          >
            <a 
              href="mailto:benharej@gmail.com"
              className="p-2 bg-zinc-900/50 rounded-full hover:bg-zinc-800/50 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/benhar-john"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-zinc-900/50 rounded-full hover:bg-zinc-800/50 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/BenharJohn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-zinc-900/50 rounded-full hover:bg-zinc-800/50 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </motion.div>
          <motion.div
            className="relative z-10"
          >
            <a 
              href="mailto:benharej@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white rounded-full font-medium text-white hover:bg-white hover:text-black transition-all"
            >
              Email me
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none">
          <Scene />
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-16">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={project.link}
                className="group relative overflow-hidden rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors block"
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover filter blur-sm brightness-50 scale-105"
                  />
                </div>
                <div className="relative z-10 p-6 backdrop-blur-sm bg-zinc-950/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-zinc-900/80 rounded-lg">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-zinc-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-zinc-900/80 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Education />
      <Experience />
      <Skills />
    </>
  );
}

export default HomePage;
