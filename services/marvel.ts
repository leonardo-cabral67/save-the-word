import crypto from 'crypto-js';

const apiInfo = {
  baseUrl: 'https://gateway.marvel.com',
  publicKey: process.env.MARVEL_PUBLIC_KEY as string,
  secretKey: process.env.MARVEL_SECRET_KEY as string,
};

export async function marvelAPI<T>(path: string): Promise<T> {
  const { baseUrl, publicKey, secretKey } = apiInfo;

  const ts = new Date().getTime();
  const hash = crypto.MD5(ts + secretKey + publicKey).toString();

  const data = await fetch(
    `${baseUrl}${path}?apikey=${publicKey}&ts=${ts}&hash=${hash}`
  );

  const dataToJson = await data.json();
  return dataToJson;
}