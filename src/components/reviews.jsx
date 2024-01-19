import { HStack, VStack, Heading, Text, Image } from "@chakra-ui/react";
import profile from "./../images/profile.jpg";
import { MdOutlineStar } from "react-icons/md";
import Carousel from "nuka-carousel";
import { useState } from "react";
import { useEffect } from "react";
import useWindowDimensions from "../hooks/window_dimensions";
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa";

const Reviews = () => {
  const [carousel, setCarousel] = useState(null);
  const [slides, setSlides] = useState(null);
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    fetch("https://admin.xn--73-6kcpe5bybbhbl.xn--p1ai/api/reviews")
      .then((response) => response.json())
      .then(function (commits) {
        let data = commits.data;
        let buffer = [];
        for (let elem of data) {
          buffer.push(
            <VStack
              align={width > 570 ? "flex-start" : "center"}
              textAlign="left"
              backgroundColor="white"
              padding="15px"
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
              <Text width={width > 570 ? "100%" : "50%"} marginBottom="5px">
                <q>{elem.attributes.review}</q>
              </Text>
              <HStack
                justify="space-between"
                width={width > 570 ? "100%" : "50%"}
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
        <Carousel 
        withoutControls={width > 570 ? false : true}
        slidesToShow={width > 570 ? 2 : 1} cellSpacing={width > 570 ? 100 : 10} renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide}>
            <FaArrowLeft />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide}>
            <FaArrowRight />
          </button>
        )}>
          {carousel}
        </Carousel>
      </HStack>
    </VStack>
  );
};
export default Reviews;
