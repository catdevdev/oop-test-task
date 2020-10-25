import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

const ModalInfo = ({ isOpen, close, text }) => {
  return (
    <Modal isOpen={isOpen} toggle={close}>
      <ModalHeader toggle={close}>Modal title</ModalHeader>
      <ModalBody>{text}</ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={close}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalInfo
