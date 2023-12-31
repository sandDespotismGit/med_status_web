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
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <VStack width="100%">
      <HStack
        backgroundColor="white"
        width="100%"
        justify="space-between"
        padding="25px"
      >
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={["10px", "12px", "14px", "15px", "20px"]}
          marginTop="30px"
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
          <LinkReact to='/#' >Цены</LinkReact>
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
          <GridItem>
          <Link 
          activeClass="active" 
          to="lic" 
          spy={true} 
          smooth={true} 
          offset={50} 
          duration={500} 
        >
          Документация
        </Link>
          </GridItem>
        </Grid>
        <VStack
          justifySelf={"flex-end"}
          align={"flex-start"}
          alignSelf={"flex-end"}
        >
          <Text fontSize="16px" fontWeight={700}>
            Мы в соцсетях
          </Text>
          <HStack>
          <LinkReact to="https://vk.com/id783380624">
            <Image src={vk} />
          </LinkReact>
            <Image src={whatsapp} />
            <Image src={telegram} />
          </HStack>
        </VStack>
        <VStack alignSelf={"flex-end"} align={"flex-end"}>
          <Text fontWeight={700}>+7 (8422) 73-78-78</Text>
          <Text fontWeight={700}>г. Ульяновск, ул. Минаева, 48А</Text>
          <Button borderRadius="30px" backgroundColor="#D3253A" color="white">
            Записаться на прием
          </Button>
        </VStack>
      </HStack>
      <HStack
        backgroundColor="#15AD92"
        width="100%"
        justify="space-between"
        padding={"25px"}
      >
        <Text color="white" fontSize={"13px"} fontWeight={700} width="35%">
          Лицензия. Л041-01188-73/01011638 Выданная : Министерство здравоохранения Ульяновской области 29.12.2023
        </Text>
        <VStack>
          <Text fontSize={"13px"} fontWeight={700}>
            © 2023 «МЕДСТАТУС»
          </Text>
          <Text fontSize={"13px"} fontWeight={700}>
            Политика конфиденциальности
          </Text>
        </VStack>
      </HStack>
      <HStack backgroundColor="white" width="100%" padding="5px" align="center" justify={'center'}>
        <Text fontSize={"24px"} fontWeight={700} textAlign={"center"}>
          Имеются противопоказания. Требуется консультация специалиста
        </Text>
      </HStack>
    </VStack>
  );
};
export default Footer;
