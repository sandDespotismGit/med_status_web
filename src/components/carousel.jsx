import Slider from "react-slick";
import { VStack, Text, Heading, Button, Image } from "@chakra-ui/react";
import scooters from "./../images/action.jpg";
import { Element} from 'react-scroll';

const Carousel = () => {
  return (
    <VStack
      width="80%"
      backgroundSize='contain'
      borderRadius="5px"
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
      <Image src={scooters} width={'100%'}/>
      <Element id="info_panel" className="element"/>
    </VStack>
  );
};
export default Carousel;
