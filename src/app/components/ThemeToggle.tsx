'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // On the server, or before hydration, render a placeholder or nothing
    // to prevent mismatch. A button shell helps maintain layout.
    return <button aria-label="Toggle theme" className="p-2" />;
  }

  // resolvedTheme will be 'light' or 'dark' once mounted
  const current = resolvedTheme || theme;

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
      className="p-2"
    >
      {current === 'dark' ? (
        <Sun size={20} className="lucide lucide-sun" />
      ) : (
        <Moon size={20} className="lucide lucide-moon" />
      )}
    </button>
  );
}
