import { ButtonHTMLAttributes } from 'react';

interface PreviousAndNextParams
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPrevious: boolean;
  onClick: () => void;
}

export default function PreviousAndNext({
  isPrevious,
  onClick,
  ...rest
}: PreviousAndNextParams) {
  return (
    <button
      onClick={onClick}
      {...rest}
      className={`w-0 h-0
    border-l-[20px] border-l-transparent
    border-b-[30px] border-b-blue-1
    border-r-[20px] border-r-transparent
    disabled:cursor-not-allowed
    ${isPrevious ? '-rotate-90' : 'rotate-90'}
    `}
    ></button>
  );
}
