import React from 'react';
import NavBar from '@/components/navbar/navbar';
import './globals.css';
import { Roboto } from 'next/font/google';
import PageWithTransition from '@/components/page-transition/page-with-transition';
import { ThemeProvider } from '@/components/theme-provider';

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
            <div className="flex-1 p-10">{children}</div>
            {/* <div className="flex-1 p-10">
            <PageWithTransition>{children}</PageWithTransition>
          </div> */}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
