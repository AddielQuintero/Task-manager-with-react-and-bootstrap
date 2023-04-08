import Modal from 'react-bootstrap/Modal'

export const CustomModal = (props) => {
  return (
    <Modal
      className={props.className ?? ''}
      show={props.show}
      onHide={props.onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{props.children[0]}</Modal.Body>

      <Modal.Footer>{props.children[1]}</Modal.Footer>
    </Modal>
  )
}
