import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import './Modal.css';

const ModalAbout = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const handleKeyDown = () => {};

  return (
    <div>
      <i
        className="material-icons icon-help my-4"
        onClick={toggle}
        onKeyDown={handleKeyDown}
        role="button"
      >
        help
      </i>
      <div className="modalStyle">
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>About</ModalHeader>
          <ModalBody>
            Version 0.1
            {' '}
            <br />
            Contributors: Anaïs Chevallier, Alexandre Coutant, Tristan
             Olivier, Eric Afenyo et Jennifer Boultareau
            <br />
            Technology:HTML, CSS, JavaScript, React, Reactstrap
          </ModalBody>
          <ModalFooter classname="modalFooter">
            <Button onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default ModalAbout;
