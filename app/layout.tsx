import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import CookieNotice from '@/components/CookieNotice';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cre8tiveStudio - Creative Automations by Motivated Generationz',
  description: 'Automate, optimize, and grow your creative business with AI.',
  openGraph: { /* OG tags */ },
  // JSON-LD schema in <script> tag
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar logoSrc="/logo.png" />
        {children}
        <Footer />
        <Chatbot />
        <CookieNotice />
      </body>
    </html>
  );
}
