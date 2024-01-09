import { HStack, VStack, Heading, Text, Image } from "@chakra-ui/react";
import profile from "./../images/profile.jpg";
import { MdOutlineStar } from "react-icons/md";
import Carousel from "nuka-carousel";
import { useState } from "react";
import { useEffect } from "react";

const Reviews = () => {
  const [carousel, setCarousel] = useState(null);
  const [slides, setSlides] = useState(null);
  useEffect(() => {
    fetch("https://admin.xn--73-6kcpe5bybbhbl.xn--p1ai/api/reviews")
      .then((response) => response.json())
      .then(function (commits) {
        let data = commits.data;
        let buffer = [];
        for (let elem of data) {
          buffer.push(
            <VStack
              
              align="flex-start"
              textAlign="left"
              backgroundColor="white"
              padding="15px"
              height={'30vh'}
              justify="space-between"
              borderRadius="12px"
              spacing="20px"
            >
              <Heading size="sm">{elem.attributes.name}</Heading>
              <HStack color={'yellow'}>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </HStack>
              <Text marginBottom="5px">
                <q>{elem.attributes.review}</q>
              </Text>
              <HStack
                justify="space-between"
                width="100%"
                borderTop="2px solid"
                paddingTop="5px"
              >
                <Heading size="sm">Врач:</Heading>
                <Text>{elem.attributes.doctor}</Text>
              </HStack>
            </VStack>
          );
        }
        setCarousel(buffer);
        setSlides(buffer.length / 2);
      });
  }, []);
  return (
    <VStack marginTop="30px" align="center" marginBottom="30px">
      <Heading size="lg" marginBottom="30px" color="#085D65">
        Отзывы
      </Heading>
      <HStack justify="space-between">
        <Carousel slidesToShow={2} cellAlign="center" cellSpacing={100} withoutControls={true}>
          {carousel}
        </Carousel>
      </HStack>
    </VStack>
  );
};
export default Reviews;
