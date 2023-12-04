import { HStack, VStack, Image, Text, Heading } from "@chakra-ui/react";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import about_us from "./../images/aboutUs.jpg";

const AboutUs = () => {
  return (
    <VStack width="100%" backgroundColor="aliceblue">
      <HStack justify="space-between" padding="30px" align="flex-start">
        <VStack width="40%" align="flex-start" spacing="20px">
          <Heading size="sm">О нас</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </VStack>
        <div style={{ width: "35%" }}>
          <img src={about_us} style={{ objectFit: "fill" }} />
        </div>
      </HStack>
      <HStack padding="30px" width="100%" justify='space-between' marginBottom='30px'>
        <VStack width="20%" align="flex-start" spacing="20px">
          <MdOutlineHealthAndSafety size="2em" />
          <Heading size="sm">22 года работы</Heading>
          <Text>Огромный опыт в лечении ваших проблем</Text>
        </VStack>
        <VStack width="20%" align="flex-start" spacing="20px">
          <MdOutlineHealthAndSafety size="2em" />
          <Heading size="sm">22 года работы</Heading>
          <Text>Огромный опыт в лечении ваших проблем</Text>
        </VStack>
        <VStack width="20%" align="flex-start" spacing="20px">
          <MdOutlineHealthAndSafety size="2em" />
          <Heading size="sm">22 года работы</Heading>
          <Text>Огромный опыт в лечении ваших проблем</Text>
        </VStack>
        <VStack width="20%" align="flex-start" spacing="20px">
          <MdOutlineHealthAndSafety size="2em" />
          <Heading size="sm">22 года работы</Heading>
          <Text>Огромный опыт в лечении ваших проблем</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};
export default AboutUs;
