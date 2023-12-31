import { VStack, HStack, Image, Link, Heading } from "@chakra-ui/react";
import google from "./../images/google.png";
import yandex from "./../images/yandex.png";
import prodocs from "./../images/prodocs.png";
const ReviewsAboutUs = () => {
  return (
    <VStack marginTop="30px" align="center" marginBottom="30px" width="100%">
      <Heading size="lg" marginBottom="30px" color="#085D65">
        Отзывы о нас
      </Heading>
      <HStack width="100%" justify={'space-between'}>
        <VStack>
          <Image src={prodocs} width={'200px'} />
          <HStack
            borderRadius="20px"
            boxShadow="0px 2px 40px 0px rgba(0, 0, 0, 0.25)"
            backgroundColor="white"
            padding="20px"
          >
            <Link href="#" color="#085D65">
              Смотреть отзывы
            </Link>
          </HStack>
        </VStack>
        <VStack>
          <Image src={google} width={'200px'} />
          <HStack
            borderRadius="20px"
            boxShadow="0px 2px 40px 0px rgba(0, 0, 0, 0.25)"
            backgroundColor="white"
            padding="20px"
          >
            <Link href="#" color="#085D65">
              Смотреть отзывы
            </Link>
          </HStack>
        </VStack>
        <VStack>
          <Image src={yandex} width={'200px'} />
          <HStack
            borderRadius="20px"
            boxShadow="0px 2px 40px 0px rgba(0, 0, 0, 0.25)"
            backgroundColor="white"
            padding="20px"
          >
            <Link href="#" color="#085D65">
              Смотреть отзывы
            </Link>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};
export default ReviewsAboutUs;
