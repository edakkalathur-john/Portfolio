'use client';

import React from 'react';
import {Github, Mail, Linkedin, ChevronRight} from 'lucide-react';
import {Education} from './components/Education';
import {Experience} from './components/Experience';
import {Skills} from './components/Skills';
import {motion} from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section >
        <div className="hero-container">
          <div className="badge">Hello, I'm Benhar 🔥</div>
           <h1 className="hero-h1">
              Robotics Engineer <span className="light-gray">designing</span>
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
 
+ export default HomePage;
+ 
+ 
+ 
