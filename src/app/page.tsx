// app/page.jsx or HomePage.jsx

'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowDown, Github, Linkedin, ArrowRight, Video, ChevronsDown, Sun, Moon, Mail, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion'; // Added framer-motion

// Lazy-load 3D model only on client
const SplineWrapper = dynamic(() => import('@/app/components/SplineWrapper'), {
  ssr: false,
  loading: () => <p className="text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Loading 3D model…</p>,
});

// Project data
const projectDisplayData = {
  'autonomous-chess-robot': {
    title: 'Autonomous Chess-Playing Robot',
    description: 'Vision-driven robotic system autonomously playing chess via deep learning perception and manipulation.',
    image: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg',
  },
  'assistive-robot-control': {
    title: 'Assistive Robot Control System',
    description: 'Vision-based robotic hand control using real-time gesture recognition and machine learning.',
    image: 'https://images.pexels.com/photos/4491601/pexels-photo-4491601.jpeg',
  },
  'multi-robot-solar': {
    title: 'Multi-Robot Solar-Powered System',
    description: 'Cooperative multi-robot system with solar-powered UGVs and UAVs for efficient exploration and coverage.',
    image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg',
  },
  'ur5-trajectory': {
    title: 'UR5 Trajectory Planning',
    description: 'Advanced trajectory planning system for UR5 robotic arm.',
    image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg',
  },
  'weather-forecasting': {
    title: 'Weather Forecasting System',
    description: 'Advanced weather forecasting system using machine learning.',
    image: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg',
  },
  'smart-home': {
    title: 'Smart Home Automation',
    description: 'IoT-based home automation system with real-time monitoring.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
  },
  'ai-chatbot': {
    title: 'AI Customer Service Chatbot',
    description: 'NLP-powered customer service automation system.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
  },
  'data-analytics': {
    title: 'Real-time Data Analytics Platform',
    description: 'Scalable real-time data processing and analytics system.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
  },
} as const;

const projects = Object.entries(projectDisplayData).map(([id, data]) => ({
  id,
  ...data,
  link: `/projects/${id}`,
}));

// Placeholder data and components for Education, Experience, Skills

// --- Education Section ---
const educationData = [
  {
    id: 1,
    degree: 'Master of Science in Robotics & AI',
    institution: 'University of Advanced Technology',
    years: '2022 - 2024',
    description: 'Specialized in machine learning applications for autonomous systems. Thesis on sensor fusion for drone navigation.',
  },
  {
    id: 2,
    degree: 'Bachelor of Engineering in Mechatronics',
    institution: 'Tech State University',
    years: '2018 - 2022',
    description: 'Focused on embedded systems and control theory. Capstone project: A line-following robot with obstacle avoidance.',
  },
];

function EducationSection() {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-center text-neutral-900 dark:text-white mb-12">
        Education
      </h2>
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 bg-white dark:bg-neutral-900 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-yellow-400/20 dark:bg-yellow-500/20 rounded-full mt-1">
                <GraduationCap className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-1">{edu.degree}</h3>
                <p className="text-md text-neutral-600 dark:text-neutral-400 mb-1">{edu.institution}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-3">{edu.years}</p>
                <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed tracking-tight font-sans">
                  {edu.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// --- Experience Section ---
const experienceData = [
  {
    id: 1,
    role: 'AI Research Intern',
    company: 'Innovatech Solutions',
    years: 'Summer 2023',
    responsibilities: [
      'Developed and tested computer vision algorithms for object detection.',
      'Assisted in data collection and preprocessing for machine learning models.',
      'Contributed to a research paper on reinforcement learning for robotic arm manipulation.',
    ],
  },
  {
    id: 2,
    role: 'Robotics Club President',
    company: 'Tech State University Robotics Club',
    years: '2020 - 2022',
    responsibilities: [
      'Led a team of 20+ students in designing and building competitive robots.',
      'Organized workshops on ROS, Python, and Arduino programming.',
      'Secured funding and managed the club\'s budget.',
    ],
  },
];

function ExperienceSection() {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-center text-neutral-900 dark:text-white mb-12">
        Experience
      </h2>
      <div className="space-y-8">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 bg-white dark:bg-neutral-900 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
               <div className="p-2 bg-blue-400/20 dark:bg-blue-500/20 rounded-full mt-1">
                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-1">{exp.role}</h3>
                <p className="text-md text-neutral-600 dark:text-neutral-400 mb-1">{exp.company}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-3">{exp.years}</p>
                <ul className="list-disc list-outside pl-5 space-y-1 text-neutral-600 dark:text-neutral-400 text-base leading-relaxed tracking-tight font-sans">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// --- Skills Section ---
const skillsData = [
  {
    category: 'Programming Languages',
    items: ['Python', 'C++', 'JavaScript', 'ROS (Python/C++)'],
  },
  {
    category: 'AI & Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'YOLO', 'Computer Vision', 'NLP'],
  },
  {
    category: 'Robotics & Tools',
    items: ['ROS', 'Gazebo', 'Arduino', 'Raspberry Pi', 'Git', 'Docker', 'Linux'],
  },
  {
    category: 'Other',
    items: ['Problem Solving', 'Algorithm Design', 'Data Analysis', 'System Integration'],
  }
];

function SkillsSection() {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-center text-neutral-900 dark:text-white mb-12">
        Skills
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skillsData.map((skillCat, index) => (
          <motion.div
            key={skillCat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 bg-white dark:bg-neutral-900 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-1.5 bg-green-400/20 dark:bg-green-500/20 rounded-full">
                <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">{skillCat.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillCat.items.map(item => (
                <span key={item} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-sm font-medium">
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


export default function HomePage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (stored) setTheme(stored);
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) setTheme(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-16 bg-white/80 dark:bg-black/70 backdrop-blur-md border-b border-neutral-200/40 dark:border-neutral-700/50 shadow-sm z-50">
        <div className="w-full flex items-center justify-between py-4">
          <span className="mx-4 text-xl font-bold text-neutral-900 dark:text-white">Benhar John</span>

          <nav className="hidden md:flex space-x-8 lg:space-x-10 uppercase text-xs font-medium text-neutral-600 dark:text-neutral-300">
            <Link href="#work" className="hover:text-yellow-500 dark:hover:text-yellow-400">WORK ©</Link>
            <Link href="#about" className="hover:text-yellow-500 dark:hover:text-yellow-400">ABOUT</Link>
            <a href="mailto:benharej@gmail.com" className="hover:text-yellow-500 dark:hover:text-yellow-400">REACH OUT</a>
          </nav>

          <div className="flex items-center mx-4 space-x-4">
            <a href="https://www.linkedin.com/in/benhar-john" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800">
              <Linkedin className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
            </a>
            <a href="https://github.com/benharjohn" aria-label="GitHub" className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800">
              <Github className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
            </a>
            <button onClick={toggleTheme} aria-label="Toggle dark mode" className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800">
              {theme === 'light' ? <Sun className="w-5 h-5 text-neutral-700" /> : <Moon className="w-5 h-5 text-neutral-300" />}
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16 flex-grow bg-white dark:bg-black">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <h1 className="whitespace-nowrap text-7xl font-extrabold uppercase tracking-widest text-center text-neutral-900 dark:text-white mb-2">
            Robotics Engineer
          </h1>
          <div className="relative w-full h-[600px] sm:h-[750px] md:h-[900px] lg:h-[1100px] mx-auto -mt-64">
            <SplineWrapper scene="/models/scene.splinecode" className="w-full h-full scale-75" />
          </div>
        </section>

        <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-center text-neutral-900 dark:text-white mb-12">
            Selected Work ©
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj) => (
              <Link key={proj.id} href={proj.link} className="group block">
                <div className="border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-600 transition-shadow duration-300 flex flex-col h-full shadow-lg hover:shadow-xl">
                  <div className="relative w-full h-52 sm:h-56 overflow-hidden rounded-lg mb-5 bg-neutral-200 dark:bg-neutral-800">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.onerror=null; e.currentTarget.src='https://placehold.co/600x400?text=No+Image'; }}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="uppercase tracking-wider text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2 group-hover:text-yellow-600">
                    {proj.title}
                  </h3>
                  <p className="flex-grow mb-5 text-neutral-600 dark:text-neutral-400 text-base leading-relaxed tracking-tight font-sans">
                    {proj.description}
                  </p>
                  <span className="uppercase tracking-wider text-sm flex items-center text-yellow-600 dark:text-yellow-500 group-hover:underline font-semibold">
                    View Project <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Updated "About" section with new components */}
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16">
          <EducationSection />
          <ExperienceSection />
          <SkillsSection />
        </section>
      </main>

      <footer id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row justify-between items-center uppercase tracking-wider text-xs space-y-6 sm:space-y-0 text-neutral-600 dark:text-neutral-400">
        <Link href="/resume.pdf" download className="flex items-center hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">
          <ArrowDown className="w-4 h-4 mr-2" /> Download Resume
        </Link>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors flex items-center space-x-2">
          <span>SCROLL TO TOP</span> <ChevronsDown className="w-4 h-4 rotate-180" />
        </button>
        <a href="mailto:benharej@gmail.com" className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2.5 rounded-full font-semibold transition-colors">
          Email Me
        </a>
      </footer>
    </>
  );
}
