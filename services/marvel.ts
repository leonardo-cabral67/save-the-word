import crypto from 'crypto-js';

const apiInfo = {
  baseUrl: 'https://gateway.marvel.com',
  publicKey: process.env.MARVEL_PUBLIC_KEY as string,
  secretKey: process.env.MARVEL_SECRET_KEY as string,
};

export async function marvelAPI<T>(path: string, param?: string): Promise<T> {
  const { baseUrl, publicKey, secretKey } = apiInfo;

  const ts = new Date().getTime();
  const hash = crypto.MD5(ts + secretKey + publicKey).toString();

  const data = await fetch(
    `${baseUrl}${path}${
      param ? `?${param}&` : '?'
    }apikey=${publicKey}&ts=${ts}&hash=${hash}`
  );

  if (!data.ok) {
    throw new Error('Could not get a response from api');
  }

  const dataToJson = await data.json();
  return dataToJson;
}
