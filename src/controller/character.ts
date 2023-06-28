// import { charactersRepository } from '@repository/character';
import { CharactersData } from 'src/interfaces/character';
import { charactersRepository } from '../repository/character';

async function getCharacters(page: number): Promise<CharactersData> {
  const pageNumber = page === 1 ? 0 : 20 * (page - 1);
  const response = await charactersRepository.getCharacters(pageNumber);
  return response;
}

export const charactersController = {
  getCharacters,
};
