import { HStack, VStack, Heading, Text, Image } from "@chakra-ui/react";
import profile from "./../images/profile.jpg";
import { MdOutlineStar } from "react-icons/md";

const Reviews = () => {
  return (
    <VStack marginTop="30px" align="center" marginBottom="30px">
      <Heading size="lg" marginBottom="30px" color="#085D65">
        Отзывы
      </Heading>
      <HStack justify="space-between">
        <VStack
          width="30%"
          align="flex-start"
          textAlign="left"
          backgroundColor="white"
          padding="15px"
          borderRadius="12px"
          spacing="20px"
        >
          <Heading size="sm">Владимир</Heading>
          <HStack>
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
          </HStack>
          <Text marginBottom="5px">
            <q>Лучшая клиника! Врачам безмерное уважение!</q>
          </Text>
          <HStack
            justify="space-between"
            width="100%"
            borderTop="2px solid"
            paddingTop="5px"
          >
            <Heading size="sm">Врач:</Heading>
            <Text>Владимир Владимирович</Text>
          </HStack>
        </VStack>
        <VStack
          width="30%"
          align="flex-start"
          textAlign="left"
          backgroundColor="white"
          padding="15px"
          borderRadius="12px"
          spacing="20px"
        >
          <Heading size="sm">Ирина</Heading>
          <HStack>
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
          </HStack>
          <Text marginBottom="5px">
            <q>Лучшая клиника! Врачам безмерное уважение!</q>
          </Text>
          <HStack
            justify="space-between"
            width="100%"
            borderTop="2px solid"
            paddingTop="5px"
          >
            <Heading size="sm">Врач:</Heading>
            <Text>Владимир Владимирович</Text>
          </HStack>
        </VStack>
        <VStack
          width="30%"
          align="flex-start"
          textAlign="left"
          backgroundColor="white"
          padding="15px"
          borderRadius="12px"
          spacing="20px"
        >
          <Heading size="sm">Анатолий</Heading>
          <HStack>
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
          </HStack>
          <Text marginBottom="5px">
            <q>Лучшая клиника! Врачам безмерное уважение!</q>
          </Text>
          <HStack
            justify="space-between"
            width="100%"
            borderTop="2px solid"
            paddingTop="5px"
          >
            <Heading size="sm">Врач:</Heading>
            <Text>Владимир Владимирович</Text>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};
export default Reviews;
