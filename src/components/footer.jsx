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
import { Link } from "react-router-dom";
import telegram from "./../images/telegram.png";
import { useNavigate } from "react-router";

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
            <Link to='/cardio' >О нас</Link>
          </GridItem>
          <GridItem>
          <Link to='/cardio' >Направления</Link>
          </GridItem>
          <GridItem>
          <Link to='/cardio' >Врачи</Link>
          </GridItem>
          <GridItem>
          <Link to='/cardio' >Цены</Link>
          </GridItem>
          <GridItem>
          <Link to='/cardio' >Отзывы</Link>
          </GridItem>
          <GridItem>
          <Link to='/cardio' >Контакты</Link>
          </GridItem>
          <GridItem>
          <Link to='/cardio' >Документы</Link>
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
            <Image src={vk} />
            <Image src={ok} />
            <Image src={youtube} />
            <Image src={vk} />
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