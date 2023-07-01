import Link from 'next/link';

interface HeaderProps {
  backLink?: string;
}

export default function Header({ backLink }: HeaderProps) {
  return (
    <header className="mt-3 mb-5 flex flex-row justify-center relative">
      {backLink && (
        <nav className="absolute left-2 top-2">
          <Link href={backLink}>
            <button className="text-2xl text-white">{'<--'}</button>
          </Link>
        </nav>
      )}
      <Link
        href={'/'}
        className="flex flex-col justify-center
          items-center self-center"
      >
        <div
          className=" w-40 bg-white flex justify-center
          items-center rounded-sm"
        >
          <h1 className="text-5xl text-center text-red-3 font-bangers px-1 uppercase">
            Marvel
          </h1>
        </div>
        <span
          className="text-white text-2xl font-bangers tracking-widest uppercase
        text-center"
        >
          Comics
        </span>
      </Link>
    </header>
  );
}
