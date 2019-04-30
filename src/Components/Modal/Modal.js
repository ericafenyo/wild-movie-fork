import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Modal.css';

class ModalAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div className="modalAbout">
        <i className="material-icons icon-help" onClick={this.toggle}>help</i>
        <div className="modalStyle">
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>About</ModalHeader>
            <ModalBody>
              Version 0.1 <br />
              Contributors: Anaïs Chevallier, Alexandre Coutant, Tristan Olivier, Eric Afenyo et Jennifer Boultareau<br />
              Technology:HTML, CSS, JavaScript, React, Reactstrap
          </ModalBody>
            <ModalFooter classname="modalFooter">
              <Button onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default ModalAbout;