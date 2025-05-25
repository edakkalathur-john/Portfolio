// app/page.jsx or HomePage.jsx

'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  Github,
  Mail,
  Linkedin,
  ArrowRight,
  Video,
  ChevronsDown,
  Sun,
} from 'lucide-react';

import { Education } from '@/app/components/Education';
import { Experience } from '@/app/components/Experience';
import { Skills } from '@/app/components/Skills';

// Dynamically load SplineWrapper on client only
const SplineWrapper = dynamic(() => import('@/app/components/SplineWrapper'), {
  ssr: false,
  loading: () => (
    <p className="text-sm font-['Space_Mono',monospace] uppercase tracking-wide">
      Loading 3D model...
    </p>
  ),
});

const projects = [
  // ...project entries...
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-white font-['Space_Mono',monospace]">

      {/* Site Header */}
      <header>
        <div className="w-full flex items-center justify-between py-4">
          <div className="text-lg uppercase tracking-wide pl-4">[BENHAR JOHN]</div>
          <nav className="hidden md:flex space-x-16 uppercase tracking-wide text-sm">
            <Link href="#work">WORK ©</Link>
            <Link href="#about">ABOUT</Link>
            <Link href="#contact">REACH OUT</Link>
          </nav>
          <div className="flex items-center space-x-4 uppercase tracking-wide text-sm pr-4">
            <span className="bg-yellow-300 text-black px-4 py-1 rounded-full">MEL [AU] 06:46 PM</span>
            <button aria-label="Toggle dark mode"><Sun className="w-6 h-6" /></button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-start justify-items-center gap-12 lg:gap-24 min-h-[80vh] w-full">

          {/* Left: About Me */}
          <div className="justify-self-start w-full max-w-sm text-sm uppercase tracking-wide pl-4">
            <div className="p-6 bg-white/20 dark:bg-black/60 rounded-lg leading-relaxed">
              Graduate student specializing in AI and machine learning within robotics and autonomous systems. Proficient in Python, TensorFlow, PyTorch, and ROS.
            </div>
          </div>

          {/* Center: Model with Overlapping Title */}
          <div className="relative justify-self-center w-full max-w-3xl h-[600px] flex items-center justify-center">
            {/* Background Title */}
            <h1 className="absolute top-1/2 transform -translate-y-1/2 text-6xl md:text-8xl lg:text-9xl font-extrabold text-gray-200 dark:text-gray-800 whitespace-nowrap z-0">
              Robotics Engineer
            </h1>
            {/* 3D Model on top */}
            <div className="relative z-10 w-full h-full">
              <SplineWrapper scene="/models/scene.splinecode" className="w-full h-full" />
            </div>
          </div>

          {/* Right: Contact Icons */}
          <div className="justify-self-end w-full max-w-sm flex flex-col items-end space-y-4 text-sm uppercase tracking-wide pr-4">
            <a href="mailto:benharej@gmail.com" className="flex items-center hover:opacity-80">
              <Mail className="w-5 h-5 mr-3" /> benharej@gmail.com
            </a>
            <a href="https://linkedin.com/in/benhar-john" className="flex items-center hover:opacity-80" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-3" /> LinkedIn
            </a>
            <a href="https://github.com/BenharJohn" className="flex items-center hover:opacity-80" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-3" /> GitHub
            </a>
          </div>

        </section>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
          {/* Projects Section */}
          <section id="work" className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
              Selected Work ©
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {projects.map((proj) => (
                <Link href={proj.link} key={proj.id} className="group">
                  <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-8 hover:bg-gray-100 dark:hover:bg-gray-900 transition flex flex-col h-full">
                    <div className="relative w-full h-56 overflow-hidden rounded mb-6">
                      <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <span className="uppercase tracking-wide text-base text-gray-500 dark:text-gray-400 mb-3">{proj.title}</span>
                    <p className="text-gray-700 dark:text-gray-300 flex-grow mb-6">{proj.description}</p>
                    <div className="uppercase tracking-wide flex items-center text-gray-600 dark:text-gray-500 group-hover:text-gray-800 transition-colors">
                      View Project <ArrowRight className="w-5 h-5 ml-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* About & Resume Section */}
          <section id="about" className="space-y-12">
            <Education />
            <Experience />
            <Skills />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center uppercase tracking-wide text-sm">
        <a href="#" className="flex items-center hover:opacity-80">
          <Video className="w-5 h-5 mr-3" /> [VIDEO TITLE] [00:00] WATCH <ArrowRight className="w-5 h-5 ml-3 transform -rotate-45" />
        </a>
        <div className="hover:opacity-80 flex items-center space-x-3">
          <span>SCROLL</span> <ChevronsDown className="w-5 h-5 animate-bounce" />
        </div>
        <a href="mailto:benharej@gmail.com" className="flex items-center bg-black text-white px-8 py-3 rounded-full hover:opacity-80">
          BOOK A CALL
        </a>
      </footer>
    </div>
  );
}

