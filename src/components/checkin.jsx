import { HStack, VStack, Image, Text, Heading, Button } from "@chakra-ui/react";

import scooters from "./../images/scooters.jpg";
import checkin from "./../images/checkin.png";

const Checkin = () => {
  return (
    <HStack padding="40px" backgroundColor='white' borderRadius='13px' width='100%' justify='space-between'>
      <VStack width='30vw' align='flex-start' spacing='30px'>
        <Heading size="lg" color="#085D65">
          Запишитесь на прием к высококвалифицированным специалистам
        </Heading>
        <Button borderRadius="30px" backgroundColor="#D3253A" color="white">
          Записаться на прием
        </Button>
      </VStack>
      <Image src={checkin} />
    </HStack>
  );
};
export default Checkin;
