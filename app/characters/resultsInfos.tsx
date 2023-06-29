interface ResultInfosProps<resultType> {
  searchType: string;
  title: string;
  result: resultType[];
}

export default function ResultInfos<resultType>({
  searchType,
  title,
  result,
}: ResultInfosProps<resultType>) {
  return (
    <div className="flex flex-col items-center -mt-24">
      <h3
        className="mb-6 text-center text-3xl text-white font-semibold
drop-shadow-choose-character font-bangers -tracking-tighter"
      >
        {title}: {searchType}
      </h3>
      <span
        className="text-lg text-white font-semibold -mt-3 mb-4
   font-bangers -tracking-tighter"
      >
        Total Results: {result.length}
      </span>
    </div>
  );
}
