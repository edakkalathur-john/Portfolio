
'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  const [time, setTime] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateClock = () => {
      const melbourneTime = new Date().toLocaleTimeString('en-AU', {
        timeZone: 'Australia/Melbourne',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setTime(melbourneTime.replace(' ', '').toUpperCase());
    };
    updateClock(); // Initial call
    const intervalId = setInterval(updateClock, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="w-full border-b border-black/10 bg-background text-foreground dark:border-white/10 sticky top-0 z-50 font-display">
      <div className="max-w-7xl mx-auto grid grid-cols-[auto_1fr_auto] items-center px-4 py-3 text-xs tracking-widest uppercase">
        <Link href="/" className="hover:opacity-75 transition-opacity">
          <span className="font-bold">[BENHAR JOHN]</span>
        </Link>
        <nav className="hidden md:flex justify-center items-center gap-x-6 lg:gap-x-8 text-sm tracking-widest">
          <Link href="#work" className="hover:opacity-75 transition-opacity">WORK ©</Link>
          <Link href="#about" className="hover:opacity-75 transition-opacity">ABOUT</Link>
          <Link href="#contact" className="hover:opacity-75 transition-opacity">REACH OUT</Link>
        </nav>
        <div className="flex flex-col items-end"> {/* Changed to flex-col and items-end */}
          <div className="flex items-center justify-end gap-x-4">
            {isClient && time && (
              <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs">
                MEL [AU] {time}
              </span>
            )}
            <ThemeToggle />
          </div>
          <div className="flex flex-col items-end mt-2 space-y-2"> {/* New div for icons */}
            <a href="https://github.com/BenharJohn" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity" aria-label="Github">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/benhar-john" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:benharej@gmail.com" className="hover:opacity-75 transition-opacity" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
