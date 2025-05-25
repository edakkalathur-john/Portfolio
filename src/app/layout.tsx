'use client'; // Still needed if ThemeProvider itself makes this a client boundary, or for font variables if re-enabled.

import { ThemeProvider as NextThemesProvider } from 'next-themes'; // Import directly from next-themes
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
        <NextThemesProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem={false} // Temporarily removed for simplification
          // disableTransitionOnChange // Temporarily removed for simplification
        >
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
