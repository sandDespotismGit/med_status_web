import { Image, VStack, HStack, Text, Heading } from "@chakra-ui/react";
import map from "./../images/map.jpg";
const MapBlock = () => {
  return (
    <VStack
    marginTop={0}
      padding="30px"
      backgroundImage={map}
      width="100%"
      height='50vh'
      align="flex-start"
      backgroundSize='contain'
    >
      <VStack
        backgroundColor="deepskyblue"
        width="25%"
        color="white"
        align="flex-start"
        textAlign='left'
        padding='20px'
      >
        <Heading size="sm">Контакты</Heading>
        <Text>1231231231231231</Text>
        <Text>1231231231231231</Text>
        <Text>1231231231231231</Text>
        <Text>1231231231231231</Text>
      </VStack>
    </VStack>
  );
};
export default MapBlock;