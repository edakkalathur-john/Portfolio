'use client'; // Still needed if ThemeProvider itself makes this a client boundary, or for font variables if re-enabled.

import { ThemeProvider } from 'next-themes';
import './globals.css';
// Assuming GeistSans and GeistMono are not strictly needed on <html> if body uses font-display
// If you still need them for other parts of the app, ensure they are correctly imported and configured.
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // className on html can be used for global font variables if needed, e.g.
    // className={`${GeistSans.variable} ${GeistMono.variable}`}
    <html lang="en" suppressHydrationWarning>
      <body className="font-display bg-white text-black dark:bg-black dark:text-white antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false} // Set to false if you want defaultTheme to always take precedence over system initially
          disableTransitionOnChange // Prevents flashes on theme change
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
