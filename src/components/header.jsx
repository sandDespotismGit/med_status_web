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
import { Link as LinkReact} from "react-router-dom";
import React, { useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Header = () => {
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
        padding="10px 25px 10px 25px"
        align="center"
        justify="space-between"
      >
        <HStack spacing="20px" align="center">
          <LinkReact to='/#' ><Image src={logo} height="60px" /></LinkReact>
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
      <Divider borderColor={'#A0A0A0'}/>
      <HStack
        width="100%"
        height="100%"
        justify="center"
        spacing="10px"
        padding="10px 25px 15px 25px"
      >
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
        <Divider orientation={"vertical"} borderColor={'#A0A0A0'} />
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
        <Divider orientation="vertical" />
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
        <Divider orientation="vertical" />
        <LinkReact>Цены</LinkReact>
        <Divider orientation="vertical" />
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
        <Divider orientation="vertical" />
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
        <Divider orientation="vertical" />
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
      </HStack>
    </VStack>
    
  );
};
export default Header;
