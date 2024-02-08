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
  Text,
  Heading,
} from "@chakra-ui/react";
import EmailSender from "./contact_form";

const ContactFormModal = ({ isOpen, onClose, setIsModalOpen }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent minWidth={["350px", "550px", "600px", "700px", "850px"]}>
        <ModalHeader color={"#085D65"} px={5}>
          <Heading size={"lg"}>Записаться на прием</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody px={5}>
          <EmailSender setIsModalOpen={onClose} />
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
