'use client';

import { charactersController } from '@controller/character';
import { useEffect, useState, useRef } from 'react';
import CharacterCard from './characterCard';
import ToggleOption from './toggleOption';
import Input from './input';

interface Character {
  id: number;
  name: string;
  thumbnail?: {
    path?: string;
    extension?: string;
  };
}

export default function CharacterPage() {
  const completeInitialLoad = useRef(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [onFilter, setOnFilter] = useState<boolean>(true);

  function toggleOnFilter() {
    setOnFilter(!onFilter);
  }

  useEffect(() => {
    if (!completeInitialLoad.current) {
      charactersController
        .getCharacters(2)
        .then(({ data }) => {
          setCharacters(data.results);
        })
        .catch((err) => console.error(err))
        .finally(() => (completeInitialLoad.current = true));
    }
  }, []);

  return (
    <section>
      <h2
        className="mb-12 text-center text-5xl text-white font-semibold
        drop-shadow-choose-character font-bangers -tracking-tighter"
      >
        Please, Choose fast a character!
      </h2>
      <section className="w-72 mx-auto mb-32 flex flex-col items-center gap-6">
        <div className="w-3/4 flex flex-row justify-between">
          <ToggleOption
            name="FILTER"
            isChosen={onFilter}
            onClick={toggleOnFilter}
          />
          <ToggleOption
            name="SEARCH"
            isChosen={!onFilter}
            onClick={toggleOnFilter}
          />
        </div>
        {onFilter ? (
          <Input placeholder="Filter character by name" />
        ) : (
          <Input placeholder="Search character by name" />
        )}
      </section>

      <ul className="grid grid-cols-fluid gap-6 justify-items-center">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </section>
  );
}
