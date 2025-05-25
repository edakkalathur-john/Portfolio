
'use client'; // 'use client' is necessary for ThemeProvider at the root

// Removed Geist font imports as they were causing issues and system fonts are used as fallback.
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { ThemeProvider } from 'next-themes'; // Using next-themes directly

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Apply font variables if Geist fonts are re-introduced and working: */}
      {/* className={`${GeistSans.variable} ${GeistMono.variable}`} */}
      <body className="bg-white text-black font-display tracking-widest dark:bg-black dark:text-white antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
