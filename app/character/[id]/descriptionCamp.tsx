interface DescriptionCampProps {
  title: string;
  description: string;
}

export default function DescriptionCamp({
  title,
  description,
}: DescriptionCampProps) {
  return (
    <div className="w-full flex items-center justify-around">
      <h2 className="text-4xl text-white font-bangers">{title}:</h2>
      <p className="text-lg text-white">{description}</p>
    </div>
  );
}
