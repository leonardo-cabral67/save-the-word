import './globals.css';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-us">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: 'Save the world',
  description:
    // eslint-disable-next-line max-len
    'You can become any marvel character you want. Choose a character and save the world',
};
