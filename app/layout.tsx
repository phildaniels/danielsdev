import NavBar from '@/components/navbar';
import './globals.css';
import { Roboto } from 'next/font/google';

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

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="dark">
      <body className={roboto.className}>
        <main className="flex h-screen bg-gray-900 sm:flex-row flex-col">
          <NavBar />
          <div className="flex-1 p-10">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
