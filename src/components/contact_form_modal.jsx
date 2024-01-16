// ContactFormModal.js
import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import EmailSender from "./contact_form";

const ContactFormModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={'#085D65'}>Запишитесь на прием</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <EmailSender />
        </ModalBody>
        {/* <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Закрыть
          </Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};

export default ContactFormModal;
