import Header from "../components/header";
import HeaderMenu from "../components/header_menu";
import Carousel from "../components/carousel";
import InfoPanel from "../components/info_panel";
import OurDocs from "../components/our_docs";
import AboutUs from "../components/about_us";
import Reviews from "../components/reviews";
import Contacts from "../components/contacts";
import MapBlock from "../components/map";
import { Heading, VStack, Text, Button } from "@chakra-ui/react";
const MainPage = () => {
  return (
    <VStack width="100%" padding={["10px", "15px", "30px", "45px", "60px"]}>
      <Header />
      <HeaderMenu />
      <Carousel />
      <VStack marginTop="30px" width="30%" align="center" textAlign="center">
        <Heading size="lg">Наши услуги</Heading>
        <Text>
          У нас вы найдете все услуги, необходимые для поддержания здоровья
          вашей семьи
        </Text>
      </VStack>
      <InfoPanel />
      <VStack
        marginTop="30px"
        width="30%"
        align="center"
        textAlign="center"
        marginBottom="30px"
      >
        <Heading size="lg">Наши врачи</Heading>
        <Text>
          Каждый год наши врачи проходят дополнительные курсы и повышают
          квалификацию
        </Text>
      </VStack>
      <OurDocs />
      <VStack align="center" marginTop="30px" marginBottom="30px">
        <Button
          borderRadius="30px"
          borderColor="#2AABEE"
          borderStyle="solid"
          borderWidth="3px"
          color="black"
          background="transparent"
        >
          Все врачи
        </Button>
      </VStack>
      <AboutUs />
      <Reviews />
      <Contacts />
      <MapBlock />
    </VStack>
  );
};
export default MainPage;
