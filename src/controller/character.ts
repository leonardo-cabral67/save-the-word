// import { charactersRepository } from '@repository/character';
import { CharactersData } from 'src/interfaces/character';
import { charactersRepository } from '../repository/character';

async function getCharacters(page: number): Promise<CharactersData> {
  const pageNumber = page === 1 ? 0 : 20 * (page - 1);
  const response = await charactersRepository.getCharacters(pageNumber);
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

export const charactersController = {
  getCharacters,
  filterCharacters,
};
