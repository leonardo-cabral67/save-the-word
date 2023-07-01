interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function Modal({ isOpen, closeModal }: ModalProps) {
  return (
    isOpen && (
      <div
        className="absolute top-24 h-72 w-80 sm:w-96 bg-blue-900 font-bangers
      shadow-lg shadow-red-3"
      >
        <button
          className="cursor-pointer text-2xl pl-2 mb-4"
          onClick={closeModal}
        >
          X
        </button>
        <div
          className=" flex flex-col justify-center gap-8
        text-center text-3xl text-white"
        >
          <h2>I wish you a good luck</h2>
          <h2>you will need...</h2>
          <h2>Now, save our world!!!</h2>
        </div>
      </div>
    )
  );
}
