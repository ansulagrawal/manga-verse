import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Manga Verse',
  description: 'Manga Verse is an app to read manga online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900`}>
        <Navbar />
        <div className='mt-[80px] p-4'>{children}</div>
      </body>
    </html>
  );
}
