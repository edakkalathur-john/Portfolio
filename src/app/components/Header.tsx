'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="w-full border-b border-black/10 bg-white text-black dark:bg-[#101010] dark:border-white/10 dark:text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 text-xs tracking-widest uppercase font-mono ">
        
          <span className="font-bold ">[BENHAR JOHN]</span>
        
        
          
            <a href="#work" className="hover:underline hover:bg-zinc-50 dark:hover:bg-zinc-800 px-2 py-1 rounded">Work</a>
            <a href="#about" className="hover:underline hover:bg-zinc-50 dark:hover:bg-zinc-800 px-2 py-1 rounded">About</a>
            <a href="#contact" className="hover:underline hover:bg-zinc-50 dark:hover:bg-zinc-800 px-2 py-1 rounded">Reach Out</a>
          
          
            <span className="bg-yellow-300 text-black dark:bg-zinc-700 dark:text-white px-2 py-1 rounded font-mono ">
              MEL [AU] {new Date().toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit' })}
            </span>
          
          <ThemeToggle />
        
      </div>
    </header>
  );
}
