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
} from 'lucide-react';

import Header from '@/app/components/Header';
import { Education } from '@/app/components/Education';
import { Experience } from '@/app/components/Experience';
import { Skills } from '@/app/components/Skills';

const SplineWrapper = dynamic(
  () => import('@/app/components/SplineWrapper'),
  {
    ssr: false,
    loading: () => <p>Loading 3D model…</p>,
  }
);

const projects = [
  {
    id: 'autonomous-chess-robot',
    title: 'Project Arc: Autonomous Chess-Playing Robot',
    description:
      'Developed an autonomous robot designed to play chess using computer vision and deep learning techniques. Achieved 95% accuracy in move identification.',
    image: 'https://placehold.co/600x400.png',
    tech: ['Python', 'YOLO', 'OpenCV', 'CNNs'],
    link: '/project/autonomous-chess-robot',
    dataAiHint: 'chess robot',
  },
  // …other projects
];

export default function HomePage() {
  return (
    <div className="bg-background text-foreground font-mono flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container max-w-7xl mx-auto px-4 py-8 md:py-16">
        {/* Hero Section */}
        <section
          className="grid md:grid-cols-[1fr_auto_1fr] gap-x-4 lg:gap-x-8 items-start
                      mb-16 md:mb-24 min-h-[calc(80vh)] md:min-h-[calc(100vh-200px)]"
        >
          {/* About */}
          <div className="order-2 md:order-1 pt-0 md:pt-[calc(var(--header-height,_4rem)+2rem)]">
            <p className="text-xs md:text-sm uppercase tracking-wider leading-relaxed max-w-md">
              Graduate student specializing in AI and Machine Learning within
              Robotics and Autonomous Systems. Proficient in Python, TensorFlow,
              PyTorch, and ROS.
            </p>
          </div>

          {/* 3D Model */}
          <div className="order-1 md:order-2 w-full h-64 md:h-96 lg:h-[500px] flex items-center justify-center">
            <SplineWrapper
              scene="/models/scene.splinecode"
              className="w-full h-full"
            />
          </div>

          {/* Social & Accolades */}
          <div className="order-3 md:order-3 pt-0 md:pt-[calc(var(--header-height,_4rem)+2rem)]
                          flex flex-col items-start md:items-end space-y-1 text-xs uppercase tracking-wider"
          >
            <div className="flex items-center">
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2" />
              <span>[YOUR ACCOMPLISHMENT]</span>
            </div>
            <span>[YOUR SKILL / INFO]</span>
            <span>[ANOTHER PIECE OF INFO]</span>

            <a
              href="mailto:benharej@gmail.com"
              className="mt-4 flex items-center hover:opacity-75 transition-opacity"
            >
              <Mail className="w-3 h-3 mr-2 opacity-70" /> benharej@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/benhar-john"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-75 transition-opacity"
            >
              <Linkedin className="w-3 h-3 mr-2 opacity-70" /> LinkedIn
            </a>
            <a
              href="https://github.com/BenharJohn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-75 transition-opacity"
            >
              <Github className="w-3 h-3 mr-2 opacity-70" /> GitHub
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="mb-16 md:mb-24 scroll-mt-20">
          <h2 className="text-xl md:text-2xl font-bold mb-8 uppercase tracking-widest">
            Selected Work ©
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj) => (
              <Link
                href={proj.link}
                key={proj.id}
                className="block group"
              >
                <div className="border border-foreground/10 rounded-lg p-6 bg-background
                                hover:bg-foreground/5 transition-colors flex flex-col h-full"
                >
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform
                                 duration-300 group-hover:scale-105"
                      data-ai-hint={proj.dataAiHint}
                    />
                  </div>
                  <span className="text-xs uppercase text-foreground/60 mb-2">
                    {proj.title}
                  </span>
                  <p className="text-sm md:text-base text-foreground/80 flex-grow mb-3">
                    {proj.description}
                  </p>
                  <div className="text-xs uppercase tracking-wider flex items-center
                                  text-foreground/80 group-hover:text-foreground">
                    View Project <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* About / Resume Sections */}
        <section id="about" className="scroll-mt-20">
          <Education />
          <Experience />
          <Skills />
        </section>
      </main>

      {/* Footer / Contact CTA */}
      <footer
        id="contact"
        className="container max-w-7xl mx-auto px-4 py-8 text-xs uppercase tracking-wider
                   font-mono border-t border-black/10 dark:border-white/10 flex justify-between items-center"
      >
        <a href="#" className="flex items-center hover:opacity-75 transition-opacity">
          <Video className="w-4 h-4 mr-2" /> [VIDEO TITLE] [00:00] WATCH{' '}
          <ArrowRight className="w-3 h-3 ml-1 inline-block transform -rotate-45" />
        </a>
        <div className="hover:opacity-75 transition-opacity">
          SCROLL <ChevronsDown className="w-4 h-4 inline-block animate-bounce" />
        </div>
        <a
          href="mailto:benharej@gmail.com"
          className="flex items-center bg-foreground text-background px-3 py-1.5 rounded-full
                     hover:opacity-75 transition-opacity"
        >
          <img
            src="https://placehold.co/24x24.png"
            alt="User Avatar"
            className="w-4 h-4 rounded-full mr-2"
            data-ai-hint="avatar person"
          />
          BOOK A CALL
        </a>
      </footer>
    </div>
  );
}
