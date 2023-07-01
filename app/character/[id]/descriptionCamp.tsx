interface DescriptionCampProps {
  title: string;
  description: string;
}

export default function DescriptionCamp({
  title,
  description,
}: DescriptionCampProps) {
  return (
    <div className="w-full flex flex-col items-center justify-around text-center">
      <h2 className="text-4xl text-white font-bangers">{title}:</h2>
      <p className="text-sm text-white">{description}</p>
    </div>
  );
}
