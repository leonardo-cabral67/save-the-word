export default function Header() {
  return (
    <header className="mt-3 mb-5 flex flex-col justify-center items-center">
      <div className=" w-40 bg-white m-auto flex justify-center items-center rounded-sm">
        <h1 className="text-5xl text-center text-red-3 font-bangers px-1 uppercase">
          Marvel
        </h1>
      </div>
      <span className="text-white text-2xl font-bangers tracking-widest uppercase">
        Comics
      </span>
    </header>
  );
}
