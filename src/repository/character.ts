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
  };
}

async function getCharacters(): Promise<Array<Character>> {
  const { data } = await marvelAPI<CharactersData>(apiEndpoints.getHeros);
  const results: Array<Character> = data.results;
  return results;
}

export const herosRepository = {
  getCharacters,
};
