import Link from 'next/link';
import Header from './header';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="w-11/12 mx-auto mb-8 flex-grow flex-shrink-0 basis-auto">
        <section
          className="flex flex-col justify-center items-center gap-4 text-center text-3xl
        text-white font-semibold
          font-bangers -tracking-tighter"
        >
          <h2>
            When you were born, you got the power to become anyone you want ...
          </h2>
          <h2>now the world is on dangerous.</h2>
          <h2>
            You need choose a character and become him. Then you save the world
          </h2>
          <h2>YOU HAVE TO DO IT NOW!!!</h2>
          <Link href="/characters">
            <button
              className="mt-6 bg-blue-1 text-2xl w-48 py-4 rounded-md shadow-md
              shadow-white hover:bg-red-3 hover:shadow-lg hover:shadow-white
              tracking-widest"
            >
              SEE Characters
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}
