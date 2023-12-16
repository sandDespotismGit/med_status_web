import {
  HStack,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  Divider,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { GiHealthNormal } from "react-icons/gi";
import logo from "./../images/back.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <VStack
      align="center"
      width="100%"
      color="#0B646C"
      backgroundColor="white"
      borderTopRadius="15px"
      boxShadow="0px 7px 4px 0px rgba(0, 0, 0, 0.25)"
    >
      <HStack
        width="100%"
        height="100%"
        justify="center"
        spacing="10px"
        padding="15px 25px 10px 25px"
      >
        <Link>О нас</Link>
        <Divider orientation="vertical" />
        <Link>Направления</Link>
        <Divider orientation="vertical" />
        <Link>Врачи</Link>
        <Divider orientation="vertical" />
        <Link>Цены</Link>
        <Divider orientation="vertical" />
        <Link>Отзывы</Link>
        <Divider orientation="vertical" />
        <Link>Контакты</Link>
        <Divider orientation="vertical" />
        <Link>Документация</Link>
      </HStack>
      <Divider></Divider>
      <HStack
        width="100%"
        padding="10px 25px 10px 25px"
        align="center"
        justify="space-between"
      >
        <HStack spacing="20px" align="center">
          <Image src={logo} height="60px" />
          <VStack align="flex-start">
            <Text fontWeight={700}>пн-пт</Text>
            <Text>08:00-20:00</Text>
          </VStack>
        </HStack>
        <HStack align="center" spacing="20px">
          <VStack align="flex-end">
            <Text fontWeight={700}>+7 (8422) 73-78-78</Text>
            <Text>г. Ульяновск, ул. Минаева, 48А</Text>
          </VStack>
          <VStack height="100%" justify="center">
            <Button borderRadius="30px" backgroundColor="#D3253A" color="white">
              Записаться на прием
            </Button>
          </VStack>
        </HStack>
      </HStack>
    </VStack>
  );
};
export default Footer;
