'use client';

import { charactersController } from '@controller/character';
import { useEffect, useState, useRef } from 'react';
import CharacterCard from './characterCard';
import ToggleOption from './toggleOption';
import Input from './input';
import CharactersSkeletonLoader from './charactersSkeletonLoader';

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
  const [filter, setFilter] = useState<string>('');
  const [onFilter, setOnFilter] = useState<boolean>(true);
  const isLoading = characters.length === 0;

  const filteredCharacters = charactersController.filterCharacters<Character>({
    filterSearch: filter,
    characters: characters,
  });

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
          <Input
            placeholder="Filter character by name"
            onChange={(e) => setFilter(e.target.value)}
          />
        ) : (
          <Input placeholder="Search character by name" />
        )}
      </section>

      {filter.length > 0 && (
        <div className="flex flex-col items-center -mt-24">
          <h3
            className="mb-12 text-center text-3xl text-white font-semibold
        drop-shadow-choose-character font-bangers -tracking-tighter"
          >
            Current filter: {filter}
          </h3>
          <span
            className="text-lg text-white font-semibold -mt-3 mb-4
             font-bangers -tracking-tighter"
          >
            Total results: {` ${filteredCharacters.length}`}
          </span>
        </div>
      )}

      {isLoading && (
        <ul className="grid grid-cols-fluid gap-6 justify-items-center">
          <CharactersSkeletonLoader cards={20} />
        </ul>
      )}

      <ul className="grid grid-cols-fluid gap-6 justify-items-center">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </section>
  );
}
