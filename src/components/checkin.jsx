import {
  HStack,
  VStack,
  Image,
  Text,
  Heading,
  Button,
  Stack,
} from "@chakra-ui/react";

import ContactFormModal from "./contact_form_modal";
import { useState } from "react";

import scooters from "./../images/scooters.jpg";
import checkin from "./../images/checkin.png";
import useWindowDimensions from "../hooks/window_dimensions";
const Checkin = () => {
  const { width, height } = useWindowDimensions();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Stack
      padding={["10px", "20px", "40px"]}
      backgroundColor="white"
      borderRadius="13px"
      width="95%"
      justify="space-between"
      align={"center"}
      direction={width >= 520 ? "row" : "column"}
    >
      <VStack
        width="30vw"
        align={width >= 520 ? "flex-start" : "center"}
        spacing="30px"
      >
        <Heading
          size="lg"
          color="#085D65"
          zIndex={99}
          textAlign={width >= 520 ? "left" : "center"}
        >
          Запишитесь на прием к высококвалифицированным специалистам
        </Heading>
        <Button
          borderRadius="30px"
          backgroundColor="#D3253A"
          color="white"
          zIndex={99}
          onClick={handleOpenModal}
        >
          Записаться на прием
        </Button>
        <ContactFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </VStack>
      <Image src={checkin} width={"30vw"} />
    </Stack>
  );
};
export default Checkin;
