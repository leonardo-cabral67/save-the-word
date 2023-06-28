interface CharactersSkeletonLoaderProps {
  cards: number;
}

export default function CharactersSkeletonLoader({
  cards,
}: CharactersSkeletonLoaderProps) {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        className="w-64 h-72 bg-red-0 opacity-80 relative animate-pulse"
      >
        <div
          className="w-32 h-72 absolute top-0 -left-2 bg-gradient-to-r
         from-red-0  opacity-50
         via-red-500 animate-[blade_1.5s_infinite]"
        ></div>
      </div>
    ));
}
