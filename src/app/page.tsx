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
      <section className="min-h-screen relative flex items-center justify-center bg-black text-white px-4 font-inter">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black" />
        </div>
        <div className="relative max-w-5xl mx-auto w-full text-center py-20">
           <motion.div
             className="inline-block bg-zinc-800 text-zinc-300 rounded-full px-4 py-2 mb-6 text-sm"
           >
             Hello, I'm Benhar 🔥
           </motion.div>
            <motion.h1
              className="font-semibold leading-tight text-white"
              style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
            >
              Robotics Engineer <span className="font-normal" style={{color:'#a3a3a3'}}>designing</span>
            </motion.h1>
            <motion.h2
              className="text-gray-400 font-normal leading-snug mt-1"
              style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
            >
              AI-powered intelligent systems
            </motion.h2>
          <motion.div
            className="flex justify-center mt-8"
           >
              <a
               href="mailto:benharej@gmail.com"
               className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 rounded-full font-medium hover:bg-zinc-900 transition-colors"
             >
              Contact me <ChevronRight className="w-4 h-4" />
            </a>
           </motion.div>
         </div>
       </section>
 
         <Education />
         <Experience />
         <Skills />
       </>
     );
   }
