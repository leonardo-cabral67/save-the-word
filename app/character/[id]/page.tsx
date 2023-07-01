'use client';

import { charactersController } from '@controller/character';
import { Character } from '@interfaces/character';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import DescriptionCamp from './descriptionCamp';
import Modal from './modal';
import ImageLoadingSkeleton from './imageLoadingSkeleton';

export default function CharacterPage() {
  const idParam = useParams().id;
  const [character, setCharacter] = useState<Array<Character>>([]);

  const [characterInfo] = character;
  const thumbnail = characterInfo?.thumbnail;
  const image = `${thumbnail?.path}/portrait_xlarge.${thumbnail?.extension}`;

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const isImageLoaded = character.length > 0;

  useEffect(() => {
    charactersController
      .getCharacterById(idParam)
      .then(({ data }) => {
        setCharacter(data.results);
      })
      .catch((error) => console.error(error));
  }, [idParam]);

  return (
    <>
      <section
        className="mx-auto w-72 flex flex-col justify-center items-center
      relative"
      >
        <div className=""></div>
        {isImageLoaded ? (
          <img src={image} className="w-72 h-96 mb-2" />
        ) : (
          <ImageLoadingSkeleton />
        )}
        <DescriptionCamp
          title="Name"
          description={characterInfo?.name as string}
        />
        <DescriptionCamp
          title="Description"
          description={characterInfo?.description || 'none'}
        />
        <button
          onClick={() => {
            setModalIsOpen(!modalIsOpen);
            if (!modalIsOpen) {
              window.scrollTo(0, 0);
            }
          }}
          className="text-2xl  text-white rounded font-bangers bg-blue-2 mt-6 py-4 px-2
          hover:bg-blue-1 hover:shadow-lg hover:shadow-white
          "
        >
          Choose Character
        </button>
        <Modal isOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)} />
      </section>
    </>
  );
}
