import Header from 'app/header';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header backLink="/" />
      <main className="w-11/12 mx-auto mb-8 flex-grow flex-shrink-0 basis-auto">
        {children}
      </main>
    </>
  );
}
