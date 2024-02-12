import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import TitleBar from '@/components/TitleBar';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pizza Pal',
  description: 'Calculators and other utilities for pizza (and other bread!) baking.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-50`}>
        <TitleBar />
        {children}
      </body>
    </html>
  );
}
