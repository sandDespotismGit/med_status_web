import { HStack, VStack, Heading, Text, Image } from "@chakra-ui/react";
import profile from "./../images/profile.jpg";

const Reviews = () => {
  return (
    <VStack marginTop="30px" align='center' marginBottom='30px'>
      <Heading size="lg" marginBottom="30px">
        Отзывы
      </Heading>
      <HStack justify='space-between'>
        <VStack width="30%" align='center' textAlign='center'>
          <Image
            src={profile}
            width="100px"
            height="100px"
            borderRadius="50%"
          />
          <Heading size="sm">Владимир</Heading>
          <Text>Лучшая клиника! Врачам безмерное уважение!</Text>
        </VStack>
        <VStack width="30%" align='center' textAlign='center'>
          <Image
            src={profile}
            width="100px"
            height="100px"
            borderRadius="50%"
          />
          <Heading size="sm">Владимир</Heading>
          <Text>Лучшая клиника! Врачам безмерное уважение!</Text>
        </VStack>
        <VStack width="30%" align='center' textAlign='center'>
          <Image
            src={profile}
            width="100px"
            height="100px"
            borderRadius="50%"
          />
          <Heading size="sm">Владимир</Heading>
          <Text>Лучшая клиника! Врачам безмерное уважение!</Text>
        </VStack>
         
      </HStack>
    </VStack>
  );
};
export default Reviews;
