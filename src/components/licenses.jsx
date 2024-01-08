import { HStack, VStack, Heading, Image } from "@chakra-ui/react";

import license1 from "./../images/license1.jpg";
import license2 from "./../images/license2.jpg";

const Licenses = () => {
  return (
    <VStack width="100%" spacing="25px">
      <Heading size="lg" color="#085D65">
        Лицензии
      </Heading>
      <HStack justify="space-around" width='30%' spacing={"100px"}>
        <Image src={license1} />
        <Image src={license2} />
      </HStack>
    </VStack>
  );
};
export default Licenses;
