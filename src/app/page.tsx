
'use client';

import Header from '@/app/components/Header';
import {
  Github,
  Mail,
  Linkedin,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Education } from '@/app/components/Education';
import { Experience } from '@/app/components/Experience';
import { Skills } from '@/app/components/Skills';
import Link from 'next/link';

const projects = [
  {
    id: 'autonomous-chess-robot',
    title: 'Project Arc: Autonomous Chess-Playing Robot',
    description:
      'Developed an autonomous robot designed to play chess using computer vision and deep learning techniques. Achieved 95% accuracy in move identification.',
    image:
      'https://placehold.co/600x400.png',
    tech: ['Python', 'YOLO', 'OpenCV', 'CNNs'],
    link: 'https://github.com/BenharJohn/chess-robot',
    dataAiHint: 'chess robot'
  },
  {
    id: 'gesture-control',
    title: 'Assistive Robot Control System',
    description:
      'A system for controlling a robotic arm through hand gestures, achieving 98% accuracy in real-time gesture recognition using MediaPipe.',
    image:
      'https://placehold.co/600x400.png',
    tech: ['MediaPipe', 'Python', 'Machine Learning', '3D Printing'],
    link: 'https://github.com/BenharJohn/gesture-control',
    dataAiHint: 'robotic arm'
  },
  {
    id: 'multi-robot-solar',
    title: 'Multi-Robot Solar-Powered System',
    description:
      'Developed a cooperative multi-robot system with solar-powered UGVs and UAVs for efficient exploration and coverage. Implemented MARL for coordination and energy-aware path planning.',
    image:
      'https://placehold.co/600x400.png',
    tech: ['Python', 'MARL', 'ROS', 'Voronoi'],
    link: 'https://github.com/BenharJohn/multi-robot-solar',
    dataAiHint: 'solar robot'
  },
  {
    id: 'ur5-trajectory',
    title: 'UR5 Trajectory Planning',
    description:
      'Advanced trajectory planning system for UR5 robotic arm, implementing smooth continuous motions using parametric equations and polynomial trajectories.',
    image:
      'https://placehold.co/600x400.png',
    tech: ['Python', 'ROS', 'TRAC-IK', 'SciPy'],
    link: 'https://github.com/BenharJohn/trajectory_planning',
    dataAiHint: 'robotic arm'
  },
  {
    id: 'weather-forecasting',
    title: 'Weather Forecasting System',
    description:
      'Advanced weather forecasting system using LSTM and SARIMA models for accurate predictions. Implemented ensemble learning for improved accuracy.',
    image:
      'https://placehold.co/600x400.png',
    tech: ['Python', 'TensorFlow', 'SARIMA', 'Pandas'],
    link: 'https://github.com/BenharJohn/weather-forecasting',
    dataAiHint: 'weather forecast'
  },
  {
    id: 'smart-home',
    title: 'Smart Home Automation',
    description:
      'IoT-based home automation system with real-time monitoring and control capabilities. Features include temperature control, lighting automation, and security monitoring.',
    image:
      'https://placehold.co/600x400.png',
    tech: ['React', 'Node.js', 'MQTT', 'MongoDB'],
    link: 'https://github.com/yourusername/smart-home',
    dataAiHint: 'smart home'
  },
];

export default function HomePage() {
  return (
    <div className="bg-background text-foreground font-mono">
      <Header />
      <main className="container max-w-7xl mx-auto px-4 py-8 md:py-16">
        
        <section className="grid md:grid-cols-[2fr_1fr] gap-8 items-start mb-16 md:mb-24 min-h-[calc(100vh-200px)] md:min-h-0">
          {/* Left Column: About Me & 3D Model Placeholder */}
          <div className="flex flex-col items-start justify-start md:justify-center h-full">
            <p className="text-xs md:text-sm uppercase tracking-wider leading-relaxed max-w-md mb-8 md:mb-16">
              Graduate student specializing in AI and Machine Learning within Robotics and Autonomous Systems. I am proficient in Python, TensorFlow, PyTorch, and ROS for developing and deploying AI/ML solutions.
            </p>
            <div className="w-full h-64 md:h-96 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500 dark:text-zinc-400">
              3D Model Placeholder
            </div>
          </div>

          {/* Right Column: Social Links / Accolades */}
          <div className="flex flex-col items-start md:items-end space-y-1 text-xs uppercase tracking-wider pt-0 md:pt-[calc(2rem+1em)]">
            <a href="mailto:benharej@gmail.com" aria-label="Email" className="hover:opacity-75 transition-opacity flex items-center">
              <Mail className="w-3 h-3 mr-2 opacity-70" /> [EMAIL]
            </a>
            <a
              href="https://linkedin.com/in/benhar-john"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-75 transition-opacity flex items-center"
            >
              <Linkedin className="w-3 h-3 mr-2 opacity-70" /> [LINKEDIN]
            </a>
            <a
              href="https://github.com/BenharJohn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className="hover:opacity-75 transition-opacity flex items-center"
            >
              <Github className="w-3 h-3 mr-2 opacity-70" /> [GITHUB]
            </a>
          </div>
        </section>
          
        {/* Work Section */}
        <section id="work" className="mb-16 md:mb-24">
          <h2 className="text-xl md:text-2xl font-bold mb-8 uppercase tracking-widest">
            Selected Work ©
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(project => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="border border-foreground/10 rounded-lg p-4 md:p-6 bg-background hover:bg-foreground/5 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2 text-xs uppercase text-foreground/60">
                  <span>{project.title}</span>
                  {/* <span>{project.tech.join(' / ')}</span> */}
                </div>
                <p className="text-sm md:text-base mb-3 text-foreground/80">{project.description}</p>
                <Link
                  href={`/project/${project.id}`}
                  className="text-xs uppercase tracking-wider text-foreground/80 group-hover:text-foreground transition-colors flex items-center"
                >
                  View Project <ChevronRight className="w-3 h-3 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about">
          <Education />
          <Experience />
          <Skills />
        </section>
      </main>
      <footer id="contact" className='text-center py-8 text-xs text-foreground/60 font-mono uppercase tracking-wider'>
        © {new Date().getFullYear()} BENHAR JOHN. REACH OUT VIA EMAIL OR LINKEDIN.
      </footer>
    </div>
  );
}
