import { CharactersData } from 'src/interfaces/character';
import { charactersRepository } from '../repository/character';

async function getCharacters(page: number): Promise<CharactersData> {
  const pageNumber = page - 1;
  const offset = pageNumber * 20;
  const response = await charactersRepository.getCharacters(offset);
  return response;
}

async function searchCharactersByName(search: string): Promise<CharactersData> {
  const nameStartsWith: string = encodeURIComponent(
    search.toLowerCase().trim()
  );
  const response = await charactersRepository.getCharacterByName(
    nameStartsWith
  );
  return response;
}

function filterCharacters<TypeCharacter>({
  filterSearch,
  characters,
}: {
  filterSearch: string;
  characters: Array<TypeCharacter & { name: string }>;
}): TypeCharacter[] {
  return characters.filter((character) => {
    const filterSearchNormalized = filterSearch.toLowerCase().trim();
    const nameNormalized = character.name.toLowerCase().trim();
    const results = nameNormalized.includes(filterSearchNormalized);
    return results;
  });
}

async function getCharacterById(id: string) {
  const response = await charactersRepository.getCharacterById(id);
  return response;
}

export const charactersController = {
  getCharacters,
  filterCharacters,
  searchCharactersByName,
  getCharacterById,
};
