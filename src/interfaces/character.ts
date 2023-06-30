export interface Character {
  id: number;
  name: string;
  description?: string;
  thumbnail?: {
    path?: string;
    extension?: string;
  };
}

export interface CharactersData {
  data: {
    results: Array<Character>;
    total: number;
  };
}

export interface DataCharacter {
  data: {
    results: Character;
  };
}
