
'use client';

import Link from 'next/link';
import {
  Github,
  Mail,
  Linkedin,
  ArrowRight,
  Video,
  ChevronsDown,
  Star,
  Figma,
  Palette,
} from 'lucide-react';
import Header from '@/app/components/Header'; // Ensure Header is imported
import { Education } from '@/app/components/Education';
import { Experience } from '@/app/components/Experience';
import { Skills } from '@/app/components/Skills';
import SplineWrapper from '@/app/components/SplineWrapper';


const projects = [
  {
    id: 'autonomous-chess-robot',
    title: 'Project Arc: Autonomous Chess-Playing Robot',
    description:
      'Developed an autonomous robot designed to play chess using computer vision and deep learning techniques. Achieved 95% accuracy in move identification.',
    image:
      'https://images.pexels.com/photos/411195/pexels-photo-411195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tech: ['Python', 'YOLO', 'OpenCV', 'CNNs'],
    icon: <ArrowRight className="w-6 h-6" />, // Changed to a generic icon
    link: 'https://github.com/BenharJohn/chess-robot',
    dataAiHint: "chess robot",
  },
  {
    id: 'gesture-control',
    title: 'Assistive Robot Control System',
    description:
      'A system for controlling a robotic arm through hand gestures, achieving 98% accuracy in real-time gesture recognition using MediaPipe.',
    image:
      'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tech: ['MediaPipe', 'Python', 'Machine Learning', '3D Printing'],
    icon: <ArrowRight className="w-6 h-6" />, // Changed to a generic icon
    link: 'https://github.com/BenharJohn/gesture-control',
    dataAiHint: "gesture control",
  },
  {
    id: 'multi-robot-solar',
    title: 'Multi-Robot Solar-Powered System',
    description:
      'Developed a cooperative multi-robot system with solar-powered UGVs and UAVs for efficient exploration and coverage. Implemented MARL for coordination and energy-aware path planning.',
    image:
      'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tech: ['Python', 'MARL', 'ROS', 'Voronoi'],
    icon: <ArrowRight className="w-6 h-6" />, // Changed to a generic icon
    link: 'https://github.com/BenharJohn/multi-robot-solar',
    dataAiHint: "robot solar",
  },
  {
    id: 'ur5-trajectory',
    title: 'UR5 Trajectory Planning',
    description:
      'Advanced trajectory planning system for UR5 robotic arm, implementing smooth continuous motions using parametric equations and polynomial trajectories.',
    image:
      'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tech: ['Python', 'ROS', 'TRAC-IK', 'SciPy'],
    icon: <ArrowRight className="w-6 h-6" />, // Changed to a generic icon
    link: 'https://github.com/BenharJohn/trajectory_planning',
    dataAiHint: "trajectory planning",
  },
  {
    id: 'weather-forecasting',
    title: 'Weather Forecasting System',
    description:
      'Advanced weather forecasting system using LSTM and SARIMA models for accurate predictions. Implemented ensemble learning for improved accuracy.',
    image:
      'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tech: ['Python', 'TensorFlow', 'SARIMA', 'Pandas'],
    icon: <ArrowRight className="w-6 h-6" />, // Changed to a generic icon
    link: 'https://github.com/BenharJohn/weather-forecasting',
    dataAiHint: "weather forecast",
  },
  {
    id: 'smart-home',
    title: 'Smart Home Automation',
    description:
      'IoT-based home automation system with real-time monitoring and control capabilities. Features include temperature control, lighting automation, and security monitoring.',
    image:
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tech: ['React', 'Node.js', 'MQTT', 'MongoDB'],
    icon: <ArrowRight className="w-6 h-6" />, // Changed to a generic icon
    link: 'https://github.com/yourusername/smart-home',
    dataAiHint: "smart home",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white text-black font-display flex flex-col min-h-screen dark:bg-black dark:text-white tracking-widest">
      <Header />
      <main className="flex-grow pt-4 pb-8 md:pb-16">
        {/* Hero Section */}
        <section className="grid md:grid-cols-[1fr_auto_1fr] gap-x-8 items-start mb-hero md:mb-hero min-h-[80vh] max-w-7xl mx-auto px-4">
          {/* Left Column: About Me */}
          <div className="justify-self-start w-full max-w-sm text-xs uppercase tracking-widest order-2 md:order-1 mt-8 md:mt-0 font-bold">
            <div className="p-6 bg-white/20 dark:bg-black/60 rounded-lg leading-relaxed">
              Graduate student specializing in AI and Machine Learning within Robotics and Autonomous Systems. Proficient in Python, TensorFlow, PyTorch, and ROS.
            </div>
          </div>

          {/* Central 3D Model */}
          <div className="relative justify-self-center w-full max-w-3xl h-[600px] flex items-center justify-center order-1 md:order-2">
            <h1 className="sr-only">Benhar John - 3D Interactive Portfolio</h1>
            <div className="relative z-10 w-full h-full">
               <SplineWrapper scene="/models/scene.splinecode" className="w-full h-full" />
            </div>
          </div>

          {/* Right Column: Accolades / Social Links - Now handled by Header */}
          <div className="justify-self-end w-full max-w-sm flex flex-col items-end space-y-4 text-xs uppercase tracking-widest order-3 mt-8 md:mt-0">
            {/* Placeholder for accolades if needed later */}
            {/* <div className="flex items-center space-x-2">
              <Star size={14} className="text-yellow-400" />
              <span>GOOD DESIGN AWARD WINNER</span>
            </div>
            <div className="flex items-center space-x-2">
              <Palette size={14} />
              <span>BEST UI/UX 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Figma size={14} />
              <span>FIGMA COMMUNITY AWARD</span>
            </div> */}
          </div>
        </section>

        {/* Sections below the hero */}
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
          {/* Work Section */}
          <section id="work" className="space-y-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 uppercase tracking-widest">
              Selected Work
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {projects.map(project => (
                <Link
                  href={project.link || '#'}
                  key={project.id}
                  className="group block outline-none border border-black/10 dark:border-white/10 rounded-lg p-6 md:p-8 bg-white dark:bg-zinc-900 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-full h-52 sm:h-64 overflow-hidden rounded-lg mb-5 bg-neutral-200 dark:bg-neutral-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = 'https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Not+Found';
                      }}
                      loading="lazy"
                      data-ai-hint={project.dataAiHint}
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white mb-2 group-hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors leading-snug uppercase tracking-widest">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed flex-grow mb-5 tracking-widest">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-xs text-neutral-700 dark:text-neutral-300 tracking-widest"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm flex items-center text-yellow-600 dark:text-yellow-500 group-hover:underline font-semibold uppercase tracking-widest">
                    View Project <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section id="about" className="space-y-12">
            <Education />
            <Experience />
            <Skills />
          </section>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-4 py-10 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center uppercase text-xs space-y-6 sm:space-y-0 text-neutral-600 dark:text-neutral-400 bg-white dark:bg-black tracking-widest">
        <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
          <Video className="w-4 h-4 mr-2" /> [DEMO REEL] [02:30] <span className="ml-1 hidden sm:inline">WATCH</span> <ArrowRight className="w-4 h-4 ml-2 transform -rotate-45 group-hover:rotate-0 transition-transform" />
        </a>
        <div className="hover:opacity-80 flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span>SCROLL TO TOP</span> <ChevronsDown className="w-4 h-4 transform rotate-180" />
        </div>
        <a href="mailto:benharej@gmail.com" className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2.5 rounded-full transition-colors font-semibold">
          BOOK A CALL
        </a>
      </footer>
    </div>
  );
}
