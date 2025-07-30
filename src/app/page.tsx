'use client';

import React, { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowDown, Github, Linkedin, ArrowRight, ChevronsDown, Sun, Moon, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { LiquidGlass } from '@/components/ui/liquid-glass';

// Import centralized data
import { projects } from '@/data/projects';
import { educationData } from '@/data/education';
import { experienceData } from '@/data/experience';
import { skillsData } from '@/data/skills';

// Lazy-load 3D model only on client

const SplineWrapper = dynamic(() => import('@/app/components/SplineWrapper'), {
  ssr: false,
});

// --- Education Section ---
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
          >
            <LiquidGlass 
              className="rounded-xl overflow-hidden"
              color="#4f46e5"
              opacity={0.2}
            >
              <div className="border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
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
              </div>
            </LiquidGlass>
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
    role: 'Volunteer Research Assistant',
    company: 'RISE Lab, Arizona State University',
    years: 'Oct 2024 – Present',
    responsibilities: [
      'Collaborated with PhD students to design advanced trajectory planning algorithms for the UR5 robotic arm, implementing smooth circular and multi-waypoint trajectories using Python.',
      'Simulated robotic motions in ROS and Gazebo to validate the stability, precision, and efficiency of planned trajectories.',
      'Integrated TRAC-IK for inverse kinematics, enabling precise real-time control of robotic end-effectors in teleoperation tasks.',
    ],
  },
  {
    id: 2,
    role: 'Robotics & Automation Intern',
    company: 'K-Tech Centre of Excellence in Aerospace',
    years: 'May 2023 – Aug 2023',
    responsibilities: [
      'Modeled and simulated a robotic arm for quality checks using CATIA, SIMULIA, and DELMIA, resulting in a 15% improvement in task accuracy.',
      'Contributed to optimizing the robotic arm\'s design, leading to a 10% reduction in energy consumption and a 5% decrease in cycle time.',
      'Developed simulation models to proactively identify operational issues, enhancing the arm\'s reliability and reducing downtime by 20%.',
    ],
  },
  {
    id: 3,
    role: 'Robotics Club President',
    company: 'Srinivas University Institute of Engineering and Technology',
    years: '2023 - 2024',
    responsibilities: [
      'Led a team of over 20 students in designing, building, and programming competitive robots for national-level competitions.',
      'Organized and conducted technical workshops on ROS, Python, and Arduino, improving club members\' practical skills.',
      'Successfully secured annual funding through university grants and managed the club\'s budget and resources.',
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
          >
            <LiquidGlass 
              className="rounded-xl overflow-hidden"
              color="#06b6d4"
              opacity={0.2}
            >
              <div className="border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
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
              </div>
            </LiquidGlass>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// --- Skills Section ---
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
          >
            <LiquidGlass 
              className="rounded-xl overflow-hidden"
              color="#10b981"
              opacity={0.2}
            >
              <div className="border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
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
              </div>
            </LiquidGlass>
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
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-widest text-center text-neutral-900 dark:text-white mb-2 break-words">
            Robotics Engineer
          </h1>
          <div className="relative w-full h-[600px] sm:h-[750px] md:h-[900px] lg:h-[1100px] mx-auto -mt-64">
            <Suspense fallback={<p className="text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Loading 3D model…</p>}>
              <SplineWrapper scene="/models/scene.splinecode" className="w-full h-full scale-75" />
            </Suspense>
          </div>
        </section>

        <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-center text-neutral-900 dark:text-white mb-12">
            Selected Work 
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj, index) => (
              <motion.div
                key={proj.id}
                href={`/project/${proj.id}`}
                className="group block relative overflow-hidden rounded-xl border border-neutral-200/20 dark:border-neutral-800/80 shadow-lg hover:shadow-yellow-500/10 dark:hover:shadow-yellow-400/10 transition-all duration-300 h-60"

              >
                <LiquidGlass 
                  className="rounded-xl overflow-hidden h-60"
                  color={index % 3 === 0 ? "#8b5cf6" : index % 3 === 1 ? "#06b6d4" : "#f59e0b"}
                  opacity={0.3}
                >
                  <Link
                    href={proj.link}
                    className="group block relative overflow-hidden rounded-xl border border-neutral-200/20 dark:border-neutral-800/80 shadow-lg hover:shadow-yellow-500/10 dark:hover:shadow-yellow-400/10 transition-all duration-300 h-60"
                  >
                    {/* Blurred Background Image */}
                    <div
                      style={{ backgroundImage: `url(${proj.image})` }}
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 blur-sm"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60 dark:bg-black/70 group-hover:bg-black/50 dark:group-hover:bg-black/60 transition-colors duration-300" />

                    {/* Content */}
                    <div className="relative flex flex-col h-full p-6 sm:p-8 backdrop-blur-sm">
                      <div className="flex-grow">
                        <h3 className="uppercase tracking-wider text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                          {proj.title}
                        </h3>
                        <p className="text-neutral-300 dark:text-neutral-400 text-base leading-relaxed tracking-tight font-sans">
                          {proj.description}
                        </p>
                      </div>
                      <span className="uppercase tracking-wider text-sm flex items-center text-yellow-500 dark:text-yellow-400 font-semibold mt-4">
                        View Project <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </LiquidGlass>
              </motion.div>
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