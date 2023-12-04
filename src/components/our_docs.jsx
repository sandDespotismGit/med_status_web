import { HStack, Heading, VStack, Text } from "@chakra-ui/react";
import profile from "./../images/profile.jpg";
const OurDocs = () => {
  return (
    <HStack justify="center" align="center" textAlign="left" spacing="20px">
      <VStack backgroundColor="aliceblue" width="20%" align="flex-start">
        <img src={profile} />
        <VStack padding="20px" align="flex-start">
          <Heading size="sm">Владимир Иванов</Heading>
          <Text>Врач-хирург, невролог</Text>
        </VStack>
      </VStack>
      <VStack backgroundColor="aliceblue" width="20%" align="flex-start">
        <img src={profile} />
        <VStack padding="20px" align="flex-start">
          <Heading size="sm">Владимир Иванов</Heading>
          <Text>Врач-хирург, невролог</Text>
        </VStack>
      </VStack>
      <VStack backgroundColor="aliceblue" width="20%" align="flex-start">
        <img src={profile} />
        <VStack padding="20px" align="flex-start">
          <Heading size="sm">Владимир Иванов</Heading>
          <Text>Врач-хирург, невролог</Text>
        </VStack>
      </VStack>
      <VStack backgroundColor="aliceblue" width="20%" align="flex-start">
        <img src={profile} />
        <VStack padding="20px" align="flex-start">
          <Heading size="sm">Владимир Иванов</Heading>
          <Text>Врач-хирург, невролог</Text>
        </VStack>
      </VStack>
    </HStack>
  );
};
export default OurDocs;
