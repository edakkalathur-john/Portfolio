'use client';

import React from 'react';
import {Github, Mail, Linkedin, ChevronRight} from 'lucide-react';
import {Education} from './components/Education';
import {Experience} from './components/Experience';
import {Skills} from './components/Skills';
import {motion} from 'framer-motion';
import Link from 'next/link';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div>
            <Link href="/" className="text-lg font-semibold">
              Benhar John
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/BenharJohn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/benhar-john"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:benharej@gmail.com"
              className="hover:text-zinc-300 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </header>
<HomePage />
      </div>
    );
  }
  
  function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="badge">Hello, I'm Benhar 🔥</div>
           <h1 className="hero-h1">
              Robotics Engineer designing 
            </h1>
            <h2 className="hero-subtext">AI-powered intelligent systems</h2>
            <a href="mailto:benharej@gmail.com" className="cta-button">Contact me →</a>
        </div>
       </section>
 
         <Education />
         <Experience />
         <Skills />
       </>
     );
   }
