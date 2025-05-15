
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';

// GeistSans and GeistMono are imported as font definition objects.
// We don't need to call them as functions here.
// Their 'variable' property can be accessed directly.

export const metadata: Metadata = {
  title: 'Portfolio Pro',
  description: 'AI/ML Robotics Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-background text-foreground font-mono antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
