import React from 'react';
import { Modal } from 'react-bootstrap';
import { node, string, func, bool, oneOfType } from 'prop-types';
import FadeIn from 'react-fade-in';
// import { Close } from '../assets/svgs'; // have to use the cloeButton prop from the react-bootstrap library

const FullScreenModal = ({ show, handleClose, children, title, ...rest }) => {
  return (
    <Modal
      show={show}
      size="lg"
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      {...rest}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <FadeIn>
        <Modal.Body closeButton>{children}</Modal.Body>
      </FadeIn>
    </Modal>
  );
};

FullScreenModal.propTypes = {
  show: bool.isRequired,
  title: string.isRequired,
  handleClose: func.isRequired,
  children: oneOfType([node, string]).isRequired
};

export default FullScreenModal;
