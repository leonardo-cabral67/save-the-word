import { CharactersData } from 'src/interfaces/character';
import { marvelAPI } from '../../services/marvel';
import { apiEndpoints } from './utils/apiEndpoints';

async function getCharacters(offset: number): Promise<CharactersData> {
  const data = await marvelAPI<CharactersData>(
    apiEndpoints.getHeros,
    `limit=20&offset=${offset}`
  );

  return data;
}

async function getCharacterByName(name: string): Promise<CharactersData> {
  const data = await marvelAPI<CharactersData>(
    apiEndpoints.getHeros,
    `nameStartsWith=${name}`
  );

  return data;
}

export const charactersRepository = {
  getCharacters,
  getCharacterByName,
};
