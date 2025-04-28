'use client';

import Header from '@/app/components/Header';
import {
  Github,
  Mail,
  Linkedin,
  ChevronRight as ChessKnight,
  Hand,
  Notebook as Robot,
  Cloud,
  Box,
  Code,
} from 'lucide-react';
import {motion} from 'framer-motion';
import {Education} from '@/app/components/Education';
import {Experience} from '@/app/components/Experience';
import {Skills} from '@/app/components/Skills';
import Link from 'next/link';

const projects = [
  {
    id: 'chess-robot',
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
    icon: <Hand className="w-6 h-6" />,
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
    icon: <Robot className="w-6 h-6" />,
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
    icon: <Box className="w-6 h-6" />,
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
    icon: <Cloud className="w-6 h-6" />,
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
    icon: <Code className="w-6 h-6" />,
    link: 'https://github.com/yourusername/smart-home',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans transition-colors duration-300">
      <Header />
      <main className="max-w-6xl mx-auto px-4 pt-16">
        <div className="flex justify-between items-center mt-8 mb-12">
          <div>Robotics Grad Student</div>

          <div className="flex gap-4">
            <a href="mailto:benharej@gmail.com" aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/benhar-john"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/BenharJohn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
        {/* Work Section */}
        <section id="work" className="mb-24">
          <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest">
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
                <div className="font-bold text-lg mb-1">{project.description}</div>
                <Link
                  href={`/project/${project.id}`}
                  className="text-black underline text-xs dark:text-white"
                >
                  View Project →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
