import './globals.css';
import { ReactNode } from 'react';
import { Inter, Bangers } from 'next/font/google';

const InterFont = Inter({
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const BangersFont = Bangers({
  variable: '--font-bangers',
  weight: '400',
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-us"
      className={`${InterFont.className} ${BangersFont.variable}`}
    >
      <body className="bg-gradient-to-b from-red-1 to-red-900 bg-no-repeat h-screen">
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Save the world',
  description:
    // eslint-disable-next-line max-len
    'You can become any marvel character you want. Choose a character and save the world',
};
