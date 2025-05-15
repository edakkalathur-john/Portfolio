
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Github, Mail, Linkedin, ArrowRight, Video, ChevronsDown, MessageSquare } from 'lucide-react';
import Header from '@/app/components/Header';
import { Education } from '@/app/components/Education';
import { Experience } from '@/app/components/Experience';
import { Skills } from '@/app/components/Skills';

const projects = [
  {
    id: 'autonomous-chess-robot',
    title: 'Project Arc: Autonomous Chess-Playing Robot',
    description:
      'Developed an autonomous robot designed to play chess using computer vision and deep learning techniques. Achieved 95% accuracy in move identification.',
    image:
      'https://placehold.co/600x400.png',
    tech: ['Python', 'YOLO', 'OpenCV', 'CNNs'],
    link: '#', // Updated to a valid placeholder
    dataAiHint: 'chess robot'
  },
  {
    id: 'assistive-robot-control', // Changed from 'gesture-control' to match projectData in ProjectDetail
    title: 'Assistive Robot Control System',
    description:
      'A system for controlling a robotic arm through hand gestures, achieving 98% accuracy in real-time gesture recognition using MediaPipe.',
    image:
      'https://placehold.co/600x400.png',
    tech: ['MediaPipe', 'Python', 'Machine Learning', '3D Printing'],
    link: '#', // Updated to a valid placeholder
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
    link: '#', // Updated to a valid placeholder
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
    link: '#', // Updated to a valid placeholder
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
    link: '#', // Updated to a valid placeholder
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
    link: '#', // Updated to a valid placeholder
    dataAiHint: 'smart home'
  },
];


export default function HomePage() {
  const [activeNav, setActiveNav] = useState('work');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'about', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveNav(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="bg-background text-foreground font-mono flex flex-col min-h-screen">
      <Header activeNav={activeNav} />
      
      <main className="flex-grow container max-w-7xl mx-auto px-4 py-8 md:py-16">
        
        <section className="grid md:grid-cols-[1fr_2fr_1fr] gap-x-4 lg:gap-x-8 items-start mb-16 md:mb-24 min-h-[calc(80vh)] md:min-h-[calc(100vh-200px)]">
          {/* Left Column: About Me */}
          <div className="pt-0 md:pt-[calc(var(--header-height,_4rem)+2rem)] order-2 md:order-1 text-left"> {/* Added text-left */}
            <p className="text-xs md:text-sm uppercase tracking-wider leading-relaxed max-w-md">
              Graduate student specializing in AI and Machine Learning within Robotics and Autonomous Systems. I am proficient in Python, TensorFlow, PyTorch, and ROS for developing and deploying AI/ML solutions.
            </p>
          </div>

          {/* Central 3D Model Placeholder */}
          <div className="flex-grow flex items-center justify-center p-4 lg:p-8 order-1 md:order-2 h-full">
            <div
              className="w-full h-64 md:h-96 lg:h-[500px] rounded-lg border border-zinc-700 overflow-hidden"
            >
              <iframe 
                src='https://my.spline.design/nexbotrobotcharacterconcept-Y2hVv0o07DLhT0Ijg69CWX4s/' 
                frameBorder='0' 
                width='100%' 
                height='100%'
                title="3D Robot Model - Spline Scene"
                className="block" // Ensures iframe behaves like a block element
              ></iframe>
            </div>
          </div>

          {/* Right Column: Social Links / Accolades */}
          <div className="pt-0 md:pt-[calc(var(--header-height,_4rem)+2rem)] flex flex-col items-start md:items-end space-y-1 text-xs uppercase tracking-wider order-3">
            <div className="flex items-center">
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>
              <span>[YOUR ACCOMPLISHMENT]</span>
            </div>
            <span>[YOUR SKILL / INFO]</span>
            <span>[ANOTHER PIECE OF INFO]</span>
             <a href="mailto:benharej@gmail.com" aria-label="Email" className="hover:opacity-75 transition-opacity flex items-center mt-4">
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
        <section id="work" className="mb-16 md:mb-24 scroll-mt-20">
          <h2 className="text-xl md:text-2xl font-bold mb-8 uppercase tracking-widest">
            Selected Work ©
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(project => (
              <Link href={`/project/${project.id}`} key={project.id} className="block group">
                <div
                  className="border border-foreground/10 rounded-lg p-4 md:p-6 bg-background hover:bg-foreground/5 transition-colors h-full flex flex-col"
                >
                  <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={project.dataAiHint}
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2 text-xs uppercase text-foreground/60">
                    <span>{project.title}</span>
                  </div>
                  <p className="text-sm md:text-base mb-3 text-foreground/80 flex-grow">{project.description}</p>
                  <div className="text-xs uppercase tracking-wider text-foreground/80 group-hover:text-foreground transition-colors flex items-center">
                    View Project <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-20">
          <Education />
          <Experience />
          <Skills />
        </section>
      </main>
      
      <footer id="contact" className="container max-w-7xl mx-auto px-4 py-8 text-xs uppercase tracking-wider font-mono border-t border-black/10 dark:border-white/10 flex justify-between items-center scroll-mt-20">
        <a href="#" className="hover:opacity-75 transition-opacity flex items-center">
          <Video className="w-4 h-4 mr-2"/> [VIDEO TITLE] [00:00] [WATCH] <ArrowRight className="w-3 h-3 ml-1 inline-block transform -rotate-45"/>
        </a>
        <div className="hover:opacity-75 transition-opacity">SCROLL <ChevronsDown className="w-4 h-4 inline-block animate-bounce"/></div>
        <a href="mailto:benharej@gmail.com" className="hover:opacity-75 transition-opacity flex items-center bg-foreground text-background px-3 py-1.5 rounded-full">
          <img src="https://placehold.co/24x24.png" alt="User Avatar" className="w-4 h-4 rounded-full mr-2" data-ai-hint="avatar person" />
          BOOK A CALL
        </a>
      </footer>
    </div>
  );
}
