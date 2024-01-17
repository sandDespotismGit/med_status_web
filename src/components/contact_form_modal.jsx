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
  Text
} from "@chakra-ui/react";
import EmailSender from "./contact_form";

const ContactFormModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={'#085D65'} ><Text fontWeight={"bold"}>Записаться на прием</Text></ModalHeader>
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
