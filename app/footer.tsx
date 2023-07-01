export default function Footer() {
  return (
    <footer
      className="w-full border-t
      mt-12 border-white mx-auto shrink-0 py-4 text-center"
    >
      <a
        className="text-sm text-white italic"
        href="https://developer.marvel.com/"
      >
        Data provided by Marvel. © 2023 MARVEL
      </a>
      <h4 className="text-white text-xs font-light mx-auto">
        Developed by{' '}
        <a
          className="underline"
          href="https://github.com/leonardo-cabral67"
          rel="noreferrer"
        >
          Leonardo Cabral
        </a>
      </h4>
    </footer>
  );
}
