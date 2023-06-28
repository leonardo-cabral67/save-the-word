interface ToggleOptionProps {
  name: string;
  isChosen: boolean;
  onClick: () => void;
}

export default function ToggleOption({
  name,
  isChosen,
  onClick,
}: ToggleOptionProps) {
  return (
    <div className="flex flex-col relative">
      <h4
        className={`cursor-pointer text-white text-base text-center
        border-b-red-3 rounded font-bangers tracking-widest
        ${!isChosen ? 'opacity-60' : 'opacity-100 border-b-4'}`}
        onClick={onClick}
      >
        {name}
      </h4>
    </div>
  );
}
