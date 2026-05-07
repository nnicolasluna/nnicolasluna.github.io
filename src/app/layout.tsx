import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { portfolioData } from '@/data/portfolio';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const { personal } = portfolioData;

export const metadata: Metadata = {
  title: `${personal.name} — ${personal.titleHighlight}`,
  description: personal.summary,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-gray-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}
