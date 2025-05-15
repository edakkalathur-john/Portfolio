'use client';

import {
  Github,
  Mail,
  Linkedin,
  ChevronRight as ChessKnight,
} from 'lucide-react';
import {motion} from 'framer-motion';
import {Education} from '@/app/components/Education';
import {Experience} from '@/app/components/Experience';
import {Skills} from '@/app/components/Skills';
import Link from 'next/link';
import Header from '@/app/components/Header'; // Added import for Header

const projects = [
  {
    id: 'autonomous-chess-robot',
    title: 'Project Arc: Autonomous Chess-Playing Robot',
    description:
      'Developed an autonomous robot designed to play chess using computer vision and deep learning techniques. Achieved 95% accuracy in move identification.',
    image:
      'https://images.pexels.com/photos/411195/pexels-photo-411195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tech: ['Python', 'YOLO', 'OpenCV', 'CNNs'],
    icon: <ChessKnight className="w-6 h-6" />,
    link: 'https://github.com/BenharJohn/chess-robot',
  },
  {
    id: 'gesture-control',
    title: 'Assistive Robot Control System',
    description:
      'A system for controlling a robotic arm through hand gestures, achieving 98% accuracy in real-time gesture recognition using MediaPipe.',
    image:
      'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tech: ['MediaPipe', 'Python', 'Machine Learning', '3D Printing'],
    icon: <ChessKnight className="w-6 h-6" />,
    link: 'https://github.com/BenharJohn/gesture-control',
  },
  {
    id: 'multi-robot-solar',
    title: 'Multi-Robot Solar-Powered System',
    description:
      'Developed a cooperative multi-robot system with solar-powered UGVs and UAVs for efficient exploration and coverage. Implemented MARL for coordination and energy-aware path planning.',
    image:
      'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tech: ['Python', 'MARL', 'ROS', 'Voronoi'],
    icon: <ChessKnight className="w-6 h-6" />,
    link: 'https://github.com/BenharJohn/multi-robot-solar',
  },
  {
    id: 'ur5-trajectory',
    title: 'UR5 Trajectory Planning',
    description:
      'Advanced trajectory planning system for UR5 robotic arm, implementing smooth continuous motions using parametric equations and polynomial trajectories.',
    image:
      'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tech: ['Python', 'ROS', 'TRAC-IK', 'SciPy'],
    icon: <ChessKnight className="w-6 h-6" />,
    link: 'https://github.com/BenharJohn/trajectory_planning',
  },
  {
    id: 'weather-forecasting',
    title: 'Weather Forecasting System',
    description:
      'Advanced weather forecasting system using LSTM and SARIMA models for accurate predictions. Implemented ensemble learning for improved accuracy.',
    image:
      'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tech: ['Python', 'TensorFlow', 'SARIMA', 'Pandas'],
    icon: <ChessKnight className="w-6 h-6" />,
    link: 'https://github.com/BenharJohn/weather-forecasting',
  },
  {
    id: 'smart-home',
    title: 'Smart Home Automation',
    description:
      'IoT-based home automation system with real-time monitoring and control capabilities. Features include temperature control, lighting automation, and security monitoring.',
    image:
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tech: ['React', 'Node.js', 'MQTT', 'MongoDB'],
    icon: <ChessKnight className="w-6 h-6" />,
    link: 'https://github.com/yourusername/smart-home',
  },
];

export default function HomePage() {
  return (
    <div className="bg-white text-black dark:bg-[#101010] dark:text-white">
      
      <Header/>
      <main className="container max-w-7xl mx-auto p-4">
          {/* About Me Section */}
          <section className="mb-12 pt-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg md:text-xl font-geist-sans text-black dark:text-white leading-relaxed">
                Graduate student specializing in AI and Machine Learning within Robotics and Autonomous Systems. I am proficient in Python, TensorFlow, PyTorch, and ROS for developing and deploying AI/ML solutions.
              </p>
            </div>
            <div className="flex md:flex-col items-center justify-center md:items-end md:justify-start space-y-0 md:space-y-4 space-x-4 md:space-x-0">
                <a href="mailto:benharej@gmail.com" aria-label="Email" className="text-black dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/benhar-john"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-black dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/BenharJohn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github"
                  className="text-black dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </section>

          {/* 3D Model Placeholder and Contact */}
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              <div className="h-64 md:h-96 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500 dark:text-zinc-400">
                3D Model Placeholder
              </div>
              <div className="text-left md:text-right">
                 {/* Content moved to About me section or can be a different call to action */}
              </div>
            </div>
          </section>
          
          {/* Work Section */}
          <section id="work" className="mb-24">
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-black dark:text-white">
              Selected Work
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map(project => (
                <div
                  key={project.id}
                  className="border border-black/10 dark:border-white/10 rounded-lg p-6 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
                >
                  <div className="flex items-center justify-between mb-2 text-xs font-mono uppercase text-zinc-500 dark:text-zinc-400">
                    <span>{project.title}</span>
                    <span>{project.tech.join(' / ')}</span>
                  </div>
                  <div className="font-bold text-lg mb-1 text-black dark:text-white">{project.description}</div>
                  <Link
                    href={`/project/${project.id}`}
                    className="text-black underline text-xs dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300"
                  >
                    View Project →
                  </Link>
                </div>
              ))}
            </div>
          </section>
          <Education />
          <Experience />
          <Skills />
      </main>
      <footer className='text-center py-8 text-sm text-zinc-500 dark:text-zinc-400 font-mono'>
        © {new Date().getFullYear()} BENHAR JOHN
      </footer>
    </div>
  );
}
