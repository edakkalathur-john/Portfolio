'use client'; // Required because ThemeProvider is used

import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';

// GeistSans and GeistMono are imported as font definition objects.
// We don't need to call them as functions here.
// Their 'variable' property can be accessed directly.

// Metadata has been removed from here because 'use client' components cannot export metadata.
// Please move your metadata export (title, description) to your src/app/page.tsx or another Server Component.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground font-mono antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
