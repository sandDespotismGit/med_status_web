import {
  HStack,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  Divider,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { GiHealthNormal } from "react-icons/gi";
import logo from "./../images/back.png";
import vk from "./../images/vk.png";
import ok from "./../images/ok.png";
import youtube from "./../images/youtube.png";
import whatsapp from "./../images/whatsapp.png";
import { Link as LinkReact } from "react-router-dom";
import telegram from "./../images/telegram.png";
import { useNavigate } from "react-router";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { useState } from "react";
import ContactFormModal from "./contact_form_modal";
import useWindowDimensions from "../hooks/window_dimensions";

const Footer = () => {
  const { width, height } = useWindowDimensions();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <VStack width="100%">
      <HStack
        backgroundColor="white"
        width="100%"
        justify="space-between"
        padding={["10px", "15px", "20px", "25px"]}
      >
        <Grid
          templateColumns={
            width >= 940
              ? "repeat(3, 1fr)"
              : width >= 768
              ? "repeat(2, 1fr)"
              : "repeat(2, 2fr)"
          }
          gap={["10px", "12px", "14px", "15px", "20px"]}
          marginTop={["5px", "10px", "15px", "20px", "25px"]}
          width="25%"
        >
          <GridItem>
            <Link
              activeClass="active"
              to="about_us"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              О нас
            </Link>
          </GridItem>
          <GridItem>
            <Link
              activeClass="active"
              to="info_panel"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Направления
            </Link>
          </GridItem>
          <GridItem>
            <Link
              activeClass="active"
              to="docs"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Врачи
            </Link>
          </GridItem>
          <GridItem>
            <LinkReact to="/#">Цены</LinkReact>
          </GridItem>
          <GridItem>
            <Link
              activeClass="active"
              to="review"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Отзывы
            </Link>
          </GridItem>
          <GridItem>
            <Link
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Контакты
            </Link>
          </GridItem>
        </Grid>
        {width >= 940 ? (
          <HStack justify={"space-between"} width={"50%"}>
            <VStack
              justifySelf={"flex-end"}
              align={"flex-start"}
              alignSelf={"flex-end"}
            >
              <Text
                fontSize={["10px", "10px", "14px", "16px", "18px"]}
                fontWeight={700}
              >
                Мы в соцсетях
              </Text>
              <HStack>
                <LinkReact to="https://vk.com/medstatus_clinica">
                  <Image src={vk} />
                </LinkReact>
                <Image src={whatsapp} />
                <Image src={telegram} />
              </HStack>
            </VStack>
            <VStack alignSelf={"flex-end"} align={"flex-end"}>
              <Text
                fontWeight={700}
                fontSize={["10px", "10px", "14px", "16px", "18px"]}
              >
                +7 (8422) 73-78-78
              </Text>
              <Text
                fontWeight={700}
                fontSize={["10px", "10px", "14px", "16px", "18px"]}
              >
                г. Ульяновск, ул. Минаева, 48А
              </Text>
              <Button
                borderRadius="30px"
                backgroundColor="#D3253A"
                color="white"
                fontSize={["10px", "10px", "14px", "16px", "18px"]}
                onClick={handleOpenModal}
              >
                Записаться на прием
              </Button>
              <ContactFormModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                setIsModalOpen={setIsModalOpen}
              />
            </VStack>
          </HStack>
        ) : (
          <VStack>
            <VStack
              justifySelf={"flex-end"}
              align={"flex-end"}
              alignSelf={"flex-end"}
            >
              <Text
                fontSize={["10px", "10px", "14px", "16px", "18px"]}
                fontWeight={700}
              >
                Мы в соцсетях
              </Text>
              <HStack>
                <LinkReact to="https://vk.com/medstatus_clinica">
                  <Image src={vk} />
                </LinkReact>
              </HStack>
            </VStack>
            <VStack alignSelf={"flex-end"} align={"flex-end"}>
              <Text
                fontWeight={700}
                fontSize={["10px", "10px", "14px", "16px", "18px"]}
              >
                +7 (8422) 73-78-78
              </Text>
              <Text
                fontWeight={700}
                fontSize={["10px", "10px", "14px", "16px", "18px"]}
              >
                г. Ульяновск, ул. Минаева, 48А
              </Text>
              <Button
                borderRadius="30px"
                backgroundColor="#D3253A"
                color="white"
                fontSize={["10px", "10px", "14px", "16px", "18px"]}
                onClick={handleOpenModal}
              >
                Записаться на прием
              </Button>
              <ContactFormModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                setIsModalOpen={setIsModalOpen}
              />
            </VStack>
          </VStack>
        )}
      </HStack>
      <HStack
        backgroundColor="#15AD92"
        width="100%"
        justify="space-between"
        padding={"25px"}
      >
        <Text
          color="white"
          fontWeight={700}
          width="35%"
          fontSize={["10px", "10px", "14px", "14px", "16px"]}
        >
          Лицензия. Л041-01188-73/01011638 Выданная : Министерство
          здравоохранения Ульяновской области 29.12.2023
        </Text>
        <VStack>
          <Text
            color="white"
            fontSize={["10px", "10px", "14px", "14px", "16px"]}
            fontWeight={700}
            textAlign={"right"}
          >
            © 2024 «МЕДСТАТУС» <br></br>
            Политика конфиденциальности
          </Text>
        </VStack>
      </HStack>
      <HStack
        backgroundColor="white"
        width="100%"
        padding="5px"
        align="center"
        justify={"center"}
      >
        <Text
          fontSize={["16px", "16px", "20px", "22px", "24px"]}
          fontWeight={700}
          textAlign={"center"}
        >
          Имеются противопоказания. Требуется консультация специалиста
        </Text>
      </HStack>
    </VStack>
  );
};
export default Footer;
