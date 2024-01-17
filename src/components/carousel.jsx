import Slider from "react-slick";
import { VStack, Text, Heading, Button, Image } from "@chakra-ui/react";
import scooters from "./../images/action.jpg";
import { Element} from 'react-scroll';
import { useState } from "react";
import { useEffect } from "react";

const Carousel = () => {
  const [link, setLink] = useState(null);
  useEffect(() => {
    fetch("https://admin.медстатус73.рф/api/mains?populate=deep")
      .then((response) => response.json())
      .then(function (commits) {
        let data = commits.data;
        let buffer = [];
        for (let elem of data) {
          buffer.push(<Image src={"https://admin.медстатус73.рф" + elem.attributes.image.data.attributes.url} width={'100%'}/>);
        }
        setLink(buffer);
      });
  }, []);
  return (
    <VStack
      width="100%"
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
      {link}
      <Element id="info_panel" className="element"/>
    </VStack>
  );
};
export default Carousel;
