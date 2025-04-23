'use client';

import React from 'react';
import {Github, Mail, Linkedin, ChevronRight} from 'lucide-react';
import {Education} from './components/Education';
import {Experience} from './components/Experience';
import {Skills} from './components/Skills';
import {motion} from 'framer-motion';
import Link from 'next/link';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-zinc-950" />
        </div>
        <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="inline-block bg-zinc-800 text-zinc-300 rounded-full px-4 py-2 mb-8"
          >
            Hello, I'm Benhar 👋
          </motion.div>
          <motion.h1
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4"
          >
            Robotics Engineer <span className="text-zinc-400">designing</span>
          </motion.h1>
          <motion.p
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.4}}
            className="text-xl text-zinc-400 mb-8"
          >
            AI-powered intelligent systems
          </motion.p>
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.6}}
          >
            <a
              href="mailto:benharej@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 rounded-full font-medium hover:bg-zinc-900 transition-colors"
            >
              Email me <ChevronRight className="w-4 h-4" />
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
