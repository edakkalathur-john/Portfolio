'use client';

import Header from './components/Header';
import { Github, Mail, Linkedin, ChevronRight as ChessKnight, Hand, Notebook as Robot, Cloud, Box, Code } from 'lucide-react';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';

const projects = [
  { id: 1, title: 'Project 1', description: 'Description 1', tech: ['Tech 1', 'Tech 2'] },
  { id: 2, title: 'Project 2', description: 'Description 2', tech: ['Tech 3', 'Tech 4'] },
];

export default function HomePage() {
  return (
    <div className="bg-white text-black dark:bg-[#101010] dark:text-white">
      
      <Header/>
      <main className="container max-w-7xl mx-auto p-4">
          {/* Top Honors and Tagline */}
          <section className="mb-12 border-black/10 dark:border-white/10 p-4 border rounded-lg">
            <h2 className="text-xl mb-2">
              Award-winning robotics & AI engineer partnering with global teams to create captivating digital solutions.
            </h2>
            <div className="text-sm dark:text-zinc-400">
              [ASU RISE LAB 2024]<br />
              [4+ years in robotics]<br />
              [AI/ML | ROS | Python]
            </div>
          </section>
          {/* Hero */}
          <section className="mb-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-8">
              <h1 className="text-4xl font-bold mb-4">
                Benhar John
              </h1>
              <h2 className="text-2xl mb-4 dark:text-zinc-400">Robotics Engineer & AI/ML Specialist</h2>
              <div className="flex space-x-4 mb-6">
                <Github className="hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-full p-2" />
                <Mail className="hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-full p-2" />
                <Linkedin className="hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-full p-2" />
              </div>
              <button className="bg-black dark:bg-white dark:text-black text-white px-6 py-3 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800">
                Book a Call
              </button>
            </div>
            {/* Replace with 3D or image as needed */}
            <div className="md:w-1/2 flex justify-center">
              <div className="border-black/10 dark:border-white/10 p-4 border rounded-lg">[3D/Robot Visual]</div>
            </div>
          </section>
          {/* Work Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Selected Work</h2>
            <div className="space-y-4">
              {projects.map(project => (
                <div key={project.id} className="border-black/10 dark:border-white/10 p-4 border rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm dark:text-zinc-400">{project.tech.join(' / ')}</p>
                  <p className="my-2">{project.description}</p>
                  <a href="#" className="text-blue-600 hover:underline">View Project →</a>
                </div>
              ))}
            </div>
          </section>
          {/* About/Experience/Skills Section */}
          <section className='mb-12 space-y-4'>
            <Education />
            <Experience />
            <Skills />
          </section>
          {/* Footer */}
          <footer className='text-center'>© {new Date().getFullYear()} Benhar John</footer>
        </main>
      </div>
  );
}
