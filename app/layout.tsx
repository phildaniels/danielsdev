import React from 'react';
import NavBar from '@/components/navbar/navbar';
import './globals.css';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import ThemeSlider from '@/components/theme-slider/theme-slider';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'DanielsDev',
  description: 'A portfolio website for Phil Daniels',
};

export type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <main className="flex h-screen bg-gray-900 sm:flex-row flex-col">
            <NavBar />
            <div className="flex-grow p-10">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
