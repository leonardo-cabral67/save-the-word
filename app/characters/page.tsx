'use client';

import { charactersController } from '@controller/character';
import { useEffect, useState, useRef } from 'react';
import CharacterCard from './characterCard';
import ToggleOption from './toggleOption';
import Input from './input';
import CharactersSkeletonLoader from './charactersSkeletonLoader';
import ResultInfos from './resultsInfos';

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
  const completeSearch = useRef(false);

  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchedCharacters, setSearchedCharacters] = useState<Character[]>([]);

  const [filter, setFilter] = useState<string>('');
  const [search, setSearch] = useState<string>('');


  const [onFilter, setOnFilter] = useState<boolean>(true);

  const searchForCharactersInfo = {
    typing: search.length > 0,
    searching: search.length > 0 && !completeSearch.current,
    hasFoundNothing: completeSearch.current && searchedCharacters.length === 0,
    hasFound:
      completeSearch.current &&
      searchedCharacters.length !== 0 &&
      search.length > 0,
  };

  const screenShowCharactersArray = {
    characters:
      !searchForCharactersInfo.hasFound && !searchForCharactersInfo.typing,
    searchedCharacters:
      searchForCharactersInfo.hasFound && searchForCharactersInfo.typing,
  };

  const isLoading =
    characters.length === 0 || searchForCharactersInfo.searching;

  const filteredCharacters = charactersController.filterCharacters<Character>({
    filterSearch: filter,
    characters: characters,
  });

  function toggleFilterOrSearch() {
    setSearch('');
    setFilter('');
    completeSearch.current = false;
    setOnFilter(!onFilter);
  }

  useEffect(() => {
    if (!completeInitialLoad.current) {
      charactersController
        .getCharacters(1)
        .then(({ data }) => {
          setCharacters(data.results);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      completeSearch.current = false;
      charactersController
        .searchCharactersByName(search)
        .then(({ data }) => {
          setSearchedCharacters(data.results);
        })
        .catch((err) => console.error(err))
        .finally(() => (completeSearch.current = true));
    }
  }, [search]);

  return (
    <section className="min-h-screen">
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
            onClick={toggleFilterOrSearch}
          />
          <ToggleOption
            name="SEARCH"
            isChosen={!onFilter}
            onClick={toggleFilterOrSearch}
          />
        </div>
        {onFilter ? (
          <Input
            placeholder="Filter character by name"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          />
        ) : (
          <Input
            placeholder="Search character by name"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        )}
      </section>

      {filter.length > 0 && (
        <ResultInfos<Character>
          searchType={filter}
          title="Filter"
          result={filteredCharacters}
        />
      )}
      {search.length > 0 && (
        <ResultInfos<Character>
          searchType={search}
          title="Search"
          result={searchedCharacters}
        />
      )}

      {isLoading && (
        <ul className="grid grid-cols-fluid gap-6 justify-items-center">
          <CharactersSkeletonLoader cards={20} />
        </ul>
      )}
      <ul className="grid grid-cols-fluid gap-6 justify-items-center">
        {screenShowCharactersArray.searchedCharacters &&
          searchedCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}

        {screenShowCharactersArray.characters &&
          filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
      </ul>
    </section>
  );
}
