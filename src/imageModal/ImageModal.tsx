import { useState } from "react";
import Modal from "react-modal";

interface ImageModalProps {
  src: string;
  alt?: string;
}

Modal.setAppElement("#root");

export function ImageModal({ src, alt }: ImageModalProps) {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <>
      <img
        className="image-modal-default"
        src={src}
        alt={alt ?? src}
        onClick={openModal}
      />
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        className="image-modal"
        overlayClassName="image-modal-overlay"
        contentLabel={src}
        preventScroll={true}
      >
        <img className="image-in-modal" src={src} alt={alt ?? src} />
      </Modal>
    </>
  );
}
