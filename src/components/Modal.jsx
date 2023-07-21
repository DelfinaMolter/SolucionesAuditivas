import Modal from 'react-bootstrap/Modal';
import './Modal.css';

function ModalTemplate(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      fullscreen={'md-down'}
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body >
        {props.children}
      </Modal.Body>
    </Modal>
  );
}

export default ModalTemplate;