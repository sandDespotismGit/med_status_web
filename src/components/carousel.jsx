import Slider from "react-slick";
import { VStack, Text, Heading, Button } from "@chakra-ui/react";
import scooters from "./../images/action.jpg";


const Carousel = () => {
  return (
    <VStack
      width="100%"
      backgroundImage={scooters}
      padding="50px"
      backgroundSize='contain'
      height={'340px'}
      borderRadius="5px"
      boxShadow="0px 7px 4px 0px rgba(0, 0, 0, 0.25)"
    >
      {/* <VStack align="center" justify="space-between" spacing="30px">
        <Heading color="#085D65">Бесплатная вакцинация от гриппа</Heading>
        <Button
          borderRadius="30px"
          borderColor="#085D65"
          borderStyle="solid"
          borderWidth="3px"
          color="white"
          background="transparent"
        >
          Записаться
        </Button>
      </VStack> */}
    </VStack>
  );
};
export default Carousel;
