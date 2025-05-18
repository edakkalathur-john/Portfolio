'use client';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import type { useEffect, useState } from 'react'; // These imports are not used but were in existing file.

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
