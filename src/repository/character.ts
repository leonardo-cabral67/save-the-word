/* eslint-disable no-console */
import { marvelAPI } from '../../services/marvel';
import { apiEndpoints } from './utils/apiEndpoints';

interface Character {
  id: number;
  name: string;
  description?: string;
  thumbnail?: {
    path?: string;
    extension?: string;
  };
}

interface CharactersData {
  data: {
    results: Array<Character>;
    total: number;
  };
}

async function getCharacters(page: number): Promise<CharactersData> {
  const data = await marvelAPI<CharactersData>(
    apiEndpoints.getHeros,
    `limit=20&offset=${page}`
  );

  return data;
}

export const herosRepository = {
  getCharacters,
};
