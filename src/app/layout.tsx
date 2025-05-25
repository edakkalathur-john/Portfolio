'use client';
import type { Metadata } from 'next';
// Removed Geist font imports as they were causing issues and system fonts are used as fallback.
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { ThemeProvider } from 'next-themes'; // Using next-themes directly

// Metadata export works best from Server Components.
// If RootLayout must be 'use client', consider moving metadata to a parent Server Component or page.tsx

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply font variables if Geist fonts are re-introduced and working:
    // className={`${GeistSans.variable} ${GeistMono.variable}`}
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground font-display tracking-widest antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
