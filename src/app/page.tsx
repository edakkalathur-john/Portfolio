'use client';

import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, Notebook as Robot, Cloud, Box, Code, Database, Cpu, ChevronRight as ChessKnight, Hand } from 'lucide-react';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

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
      id: "chess-robot",
      title: "Project Arc: Autonomous Chess-Playing Robot",
      description: "Developed an autonomous robot designed to play chess using computer vision and deep learning techniques. Achieved 95% accuracy in move identification.",
      image: "https://images.pexels.com/photos/411195/pexels-photo-411195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["Python", "YOLO", "OpenCV", "CNNs"],
      icon: <ChessKnight className="w-6 h-6" />,
      link: "https://github.com/BenharJohn/chess-robot"
    },
    {
      id: "gesture-control",
      title: "Assistive Robot Control System",
      description: "A system for controlling a robotic arm through hand gestures, achieving 98% accuracy in real-time gesture recognition using MediaPipe.",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["MediaPipe", "Python", "Machine Learning", "3D Printing"],
      icon: <Hand className="w-6 h-6" />,
      link: "https://github.com/BenharJohn/gesture-control"
    },
    {
      id: "multi-robot-solar",
      title: "Multi-Robot Solar-Powered System",
      description: "Developed a cooperative multi-robot system with solar-powered UGVs and UAVs for efficient exploration and coverage. Implemented MARL for coordination and energy-aware path planning.",
      image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["Python", "MARL", "ROS", "Voronoi"],
      icon: <Robot className="w-6 h-6" />,
      link: "https://github.com/BenharJohn/multi-robot-solar"
    },
    {
      id: "ur5-trajectory",
      title: "UR5 Trajectory Planning",
      description: "Advanced trajectory planning system for UR5 robotic arm, implementing smooth continuous motions using parametric equations and polynomial trajectories.",
      image: "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["Python", "ROS", "TRAC-IK", "SciPy"],
      icon: <Box className="w-6 h-6" />,
      link: "https://github.com/BenharJohn/trajectory_planning"
    },
    {
      id: "weather-forecasting",
      title: "Weather Forecasting System",
      description: "Advanced weather forecasting system using LSTM and SARIMA models for accurate predictions. Implemented ensemble learning for improved accuracy.",
      image: "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["Python", "TensorFlow", "SARIMA", "Pandas"],
      icon: <Cloud className="w-6 h-6" />,
      link: "https://github.com/BenharJohn/weather-forecasting"
    },
    {
      id: "smart-home",
      title: "Smart Home Automation",
      description: "IoT-based home automation system with real-time monitoring and control capabilities. Features include temperature control, lighting automation, and security monitoring.",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["React", "Node.js", "MQTT", "MongoDB"],
      icon: <Cpu className="w-6 h-6" />,
      link: "https://github.com/yourusername/smart-home"
    },
    {
      id: "ai-chatbot",
      title: "AI Customer Service Chatbot",
      description: "Advanced chatbot using natural language processing for customer service automation. Integrates with multiple platforms and handles complex conversations.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["Python", "TensorFlow", "NLP", "FastAPI"],
      icon: <Code className="w-6 h-6" />,
      link: "https://github.com/yourusername/ai-chatbot"
    },
    {
      id: "data-analytics",
      title: "Real-time Data Analytics Platform",
      description: "Scalable platform for processing and analyzing large-scale data streams in real-time. Features interactive dashboards and automated reporting.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["Python", "Apache Kafka", "Elasticsearch", "React"],
      icon: <Database className="w-6 h-6" />,
      link: "https://github.com/yourusername/data-analytics"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />
        </div>
        <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="lg:w-2/3">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-7xl font-bold mb-6"
            >
              Benhar John
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2 text-zinc-400 text-lg mb-8"
            >
              <a href="tel:+16233416489" className="hover:text-white transition-colors">+1-623-341-6489</a>
              <span>•</span>
              <a href="mailto:benharej@gmail.com" className="hover:text-white transition-colors">benharej@gmail.com</a>
              <span>•</span>
              <a href="https://linkedin.com/in/benhar-john" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">linkedin.com/in/benhar-john</a>
              <span>•</span>
              <a href="https://github.com/BenharJohn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">github.com/BenharJohn</a>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-zinc-400 mb-8 max-w-2xl"
            >
              Graduate student specializing in Artificial Intelligence and Machine Learning within Robotics and Autonomous Systems. Proficient in Python, TensorFlow, PyTorch, and ROS for developing and deploying AI/ML solutions.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4"
            >
              <a href="#projects" className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors">
                View Projects
              </a>
              <a href="#contact" className="px-6 py-3 border border-zinc-700 rounded-full font-medium hover:bg-zinc-900 transition-colors">
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block pointer-events-none">
          {/*<Scene />*/}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800">
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
                href={`/project/${project.id}`}
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

export default function App() {
  const { scrollY } = useScroll();
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.8]);
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <motion.header
        style={{ opacity: headerOpacity, scale: headerScale }}
        className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div>
            <Link href="/" className="text-lg font-semibold">Benhar John</Link>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/BenharJohn" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/benhar-john" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:benharej@gmail.com" className="hover:text-zinc-300 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </motion.header>

      <HomePage />
    </div>
  );
}

