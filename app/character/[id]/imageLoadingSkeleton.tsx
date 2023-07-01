export default function ImageLoadingSkeleton() {
  return (
    <div className="w-72 h-96 bg-red-0 opacity-80 relative animate-pulse">
      <div
        className="w-36 h-96 absolute top-0 -left-2 bg-gradient-to-r
      from-red-0  opacity-50
      via-red-500 animate-[blade_1.5s_infinite]"
      ></div>
    </div>
  );
}
