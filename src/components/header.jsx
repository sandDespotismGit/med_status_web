import { HStack, VStack, Heading, Text, Button } from "@chakra-ui/react";
import { color } from "framer-motion";
import { GiHealthNormal } from "react-icons/gi";

const Header = () => {
  return (
    <HStack align='center' justify='space-between' width='100%'>
      <HStack align='center'>
        <GiHealthNormal />
        <Heading>MedsClinic</Heading>
      </HStack>
      <HStack spacing='20px'>
        <Text>88005553535</Text>
        <Button borderRadius='30px' backgroundColor='#2AABEE' color='white'>
            Записаться
        </Button>
      </HStack>
    </HStack>
  );
};
export default Header;
