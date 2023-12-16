import Header from "../components/header";
import Carousel from "../components/carousel";
import InfoPanel from "../components/info_panel";
import OurDocs from "../components/our_docs";
import AboutUs from "../components/about_us";
import Reviews from "../components/reviews";
import MapBlock from "../components/map";
import Benefits from "../components/benefits";
import Checkin from "../components/checkin";
import Licenses from "../components/licenses";
import Footer from "../components/footer";
import { Heading, VStack, Text, Button } from "@chakra-ui/react";
const MainPage = () => {
  return (
    <VStack
      width="100%"
      paddingLeft={["10px", "15px", "30px", "45px", "60px"]}
      paddingRight={["10px", "15px", "30px", "45px", "60px"]}
      backgroundColor="#E7F1EE"
      spacing="30px"
    >
      <Header />
      <Carousel />
      <VStack width="30%" align="center" textAlign="center">
        <Heading size="lg" color="#085D65">
          Наши направления
        </Heading>
        <Text>
          У нас вы найдете все услуги, необходимые для поддержания здоровья
          вашей семьи
        </Text>
      </VStack>
      <InfoPanel />
      <VStack width="30%" align="center" textAlign="center">
        <Heading size="lg" color="#085D65">
          Наши врачи
        </Heading>
        <Text>С вами рядом будут высококвалифицированные специалисты</Text>
      </VStack>
      <OurDocs />
      {/* <VStack align="center" marginTop="30px" marginBottom="30px">
        <Button
          borderRadius="30px"
          borderColor="#138b96"
          borderStyle="solid"
          borderWidth="3px"
          color="black"
          background="transparent"
        >
          Все врачи
        </Button>
      </VStack> */}
      <AboutUs />
      <Benefits />
      <Reviews />
      <Checkin />
      <Licenses />
      <MapBlock />
      <Footer />
    </VStack>
  );
};
export default MainPage;
