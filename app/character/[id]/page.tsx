'use client';

import { charactersController } from '@controller/character';
import { Character } from '@interfaces/character';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import DescriptionCamp from './descriptionCamp';

export default function CharacterPage() {
  const idParam = useParams().id;
  const [character, setCharacter] = useState<Array<Character>>([]);

  const [characterInfo] = character;
  const thumbnail = characterInfo?.thumbnail;
  const image = `${thumbnail?.path}/portrait_xlarge.${thumbnail?.extension}`;

  useEffect(() => {
    charactersController
      .getCharacterById(idParam)
      .then(({ data }) => {
        setCharacter(data.results);
      })
      .catch((error) => console.error(error));
  }, [idParam]);

  return (
    <section className="mx-auto w-72 flex flex-col justify-center items-center">
      <div className=""></div>
      <img src={image} className="w-72 mb-2" />
      <DescriptionCamp
        title="Name"
        description={characterInfo?.name as string}
      />
      <DescriptionCamp
        title="Description"
        description={characterInfo?.description || 'none'}
      />
    </section>
  );
}
