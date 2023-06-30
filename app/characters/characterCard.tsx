'use client';

import { Character } from '@interfaces/character';
import Link from 'next/link';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const { name, thumbnail, id } = character;
  const image = `${thumbnail?.path}/portrait_xlarge.${thumbnail?.extension}`;
  return (
    <Link href={`/character/${id}`}>
      <li
        style={{ backgroundImage: `url(${image})` }}
        className="w-64 h-72 bg-no-repeat relative border-2
      shadow-white bg-cover rounded-sm hover:shadow-2xl
      hover:shadow-white cursor-pointer"
      >
        <div
          className="absolute bottom-0 m-auto w-full h-20
       bg-black opacity-60 hover:opacity-90 z-10"
        >
          <h3 className="text-center text-white py-5">{name}</h3>
        </div>
      </li>
    </Link>
  );
}
