import {
  HStack,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  Divider,
  Stack,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { GiHealthNormal } from "react-icons/gi";
import logo from "./../images/back.png";
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
import useWindowDimensions from "../hooks/window_dimensions";

const Header = () => {
  const navigate = useNavigate();
  const { width, height } = useWindowDimensions();
  return (
    <VStack
      align="center"
      width="100%"
      color="#0B646C"
      backgroundColor="white"
      borderBottomRadius="15px"
      boxShadow="0px 7px 4px 0px rgba(0, 0, 0, 0.25)"
    >
      <HStack
        width="100%"
        padding={width >= 768 ? "10px 25px 15px 25px" : "5px 10px 8px 10px"}
        align="center"
        justify="space-between"
      >
        <HStack
          spacing={["5px", "10px", "10px", "15px", "20px"]}
          align="center"
        >
          <Text to="/#">
            <Image
              src={logo}
              height={["30px", "30px", "40px", "50px", "60px"]}
            />
          </Text>
          <VStack
            align="flex-start"
            spacing={["5px", "10px", "10px", "15px", "20px"]}
          >
            <Text
              fontWeight={700}
              fontSize={["10px", "10px", "14px", "16px", "18px"]}
            >
              пн-пт | cб-вс
            </Text>
            <Text fontSize={["10px", "10px", "14px", "16px", "18px"]}>
              08:00-20:00 | 7:30-18:00
            </Text>
          </VStack>
        </HStack>
        <Stack
          align="center"
          spacing={["5px", "10px", "10px", "15px", "20px"]}
          direction={width >= 768 ? "row" : "column"}
        >
          <VStack align="flex-end">
            <Text
              fontWeight={700}
              fontSize={["10px", "10px", "14px", "16px", "18px"]}
            >
              +7 (8422) 73-78-78
            </Text>
            <Text fontSize={["10px", "10px", "14px", "16px", "18px"]}>
              г. Ульяновск, ул. Минаева, 48А
            </Text>
          </VStack>
          <VStack height="100%" justify="center">
            <Button
              borderRadius="30px"
              backgroundColor="#D3253A"
              color="white"
              fontSize={["10px", "10px", "14px", "16px", "18px"]}
            >
              Записаться на прием
            </Button>
          </VStack>
        </Stack>
      </HStack>
      <Divider borderColor={"#A0A0A0"} />
      <HStack
        width="100%"
        height="100%"
        justify="center"
        spacing={["3px", "4px", "5px", "10px", "10px"]}
        padding={width >= 768 ? "10px 25px 15px 25px" : "5px 10px 8px 10px"}
      >
        <Link
          activeClass="active"
          to="about_us"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <Text fontSize={["10px", "10px", "14px", "16px", "18px"]}>О нас</Text>
        </Link>
        <Link
          activeClass="active"
          to="info_panel"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <Text fontSize={["10px", "10px", "14px", "16px", "18px"]}>
            Направления
          </Text>
        </Link>
        <Link
          activeClass="active"
          to="docs"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <Text fontSize={["10px", "10px", "14px", "16px", "18px"]}>Врачи</Text>
        </Link>
        <LinkReact to="/#">
          <Text fontSize={["10px", "10px", "14px", "16px", "18px"]}>Цены</Text>
        </LinkReact>
        <Link
          activeClass="active"
          to="review"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <Text fontSize={["10px", "10px", "14px", "16px", "18px"]}>
            Отзывы
          </Text>
        </Link>
        <Link
          activeClass="active"
          to="contacts"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <Text fontSize={["10px", "10px", "14px", "16px", "18px"]}>
            Контакты
          </Text>
        </Link>
        <Link
          activeClass="active"
          to="lic"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <Text fontSize={["10px", "10px", "14px", "16px", "18px"]}>
            Документация
          </Text>
        </Link>
      </HStack>
    </VStack>
  );
};
export default Header;
