import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export default function Input({ placeholder, ...rest }: InputProps) {
  return (
    <input
      className="w-full py-4 text-md font-bold text-gray-950 text-center rounded
  focus:outline-none tracking-tight uppercase"
      type="text"
      placeholder={placeholder}
      {...rest}
    />
  );
}
