import { HStack, VStack, Heading, Image } from "@chakra-ui/react";

import license1 from "./../images/license1.png";
import license2 from "./../images/license2.png";

const Licenses = () => {
  return (
    <VStack width="100%" spacing="25px">
      <Heading size="lg" color="#085D65">
        Лицензии
      </Heading>
      <HStack justify="space-around" width='100%'>
        <Image src={license1} />
        <Image src={license2} />
      </HStack>
    </VStack>
  );
};
export default Licenses;
