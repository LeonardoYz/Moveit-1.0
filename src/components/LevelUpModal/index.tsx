import Modal from "react-modal"
import { IconContext } from "@react-icons/all-files"

import { useChallenges } from "../../hooks/useChallenges";

import { CgClose } from "@react-icons/all-files/cg/CgClose"
import { IoLogoTwitter } from "@react-icons/all-files/io/IoLogoTwitter"

import { LevelUpModalStyles } from "./styles"

interface LevelUpModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function LevelUpModal({ isOpen, onRequestClose }: LevelUpModalProps) {
  const { level } = useChallenges()
  Modal.setAppElement('body');

  return (
    <>
      <LevelUpModalStyles />
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="modal__overlay"
        className="modal__content"
        closeTimeoutMS={300}
      >
        <button 
          type="button" 
          className="modal__close--button"
          onClick={onRequestClose}
        >
          <IconContext.Provider
            value={{ size: "22", className: "modal__close--icon" }}
          >
            <CgClose />
          </IconContext.Provider>
        </button>

        <div className="modal__image">
          <strong className="modal__level">{level}</strong>
        </div>

        <div className="modal__text">
          <h2 className="modal__title">Parabéns</h2>
          <p className="modal__paragraph">Você alcançou um novo level!</p>
        </div>

        <a href="#" className="modal__button">
          Compartilhar no twitter
          <IoLogoTwitter size={20} color="#ffffff"/>
        </a>
      </Modal>
    </>
  )
}

function componentWillMount() {
  throw new Error("Function not implemented.");
}
