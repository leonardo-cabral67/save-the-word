// import { charactersRepository } from '@repository/character';
import { charactersRepository } from '../repository/character';

async function getCharacters(page: number) {
  const pageNumber = page === 1 ? 0 : 20 * (page - 1);
  const response = await charactersRepository.getCharacters(pageNumber);
  return response;
}

export const charactersController = {
  getCharacters,
};
