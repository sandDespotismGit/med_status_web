import Slider from "react-slick";
import { VStack, Text, Heading, Button } from "@chakra-ui/react";
import scooters from "./../images/back.jpg";
import "swiper/css";

const Carousel = () => {
  return (
    <VStack
      width="100%"
      backgroundImage={scooters}
      padding="50px"
      backgroundSize="contain"
    >
      <VStack align='center' justify='space-between' spacing='30px'> 
        <Heading color="white">Бесплатная вакцинация от гриппа</Heading>
        <Text color="white">
          Сезон вакцинации от гриппа открыт. Успейте защитить себя и свою семью.
        </Text>
        <Button borderRadius="30px" borderColor="#2AABEE" borderStyle='solid' borderWidth='3px' color="white" background='transparent'>
          Записаться
        </Button>
      </VStack>
    </VStack>
  );
};
export default Carousel;
