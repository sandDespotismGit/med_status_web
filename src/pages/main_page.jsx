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
import ReviewsAboutUs from "../components/reviews_about_us";
import useWindowDimensions from "../hooks/window_dimensions";
import { Heading, VStack, Text, Button } from "@chakra-ui/react";
const MainPage = () => {
  const { width, height } = useWindowDimensions();
  return (
    <VStack width="100%" overflowX='hidden'>

      <VStack
        width="100%"
        paddingLeft={["10px", "15px", "30px", "45px", "225px"]}
        paddingRight={["10px", "15px", "30px", "45px", "225px"]}
        backgroundColor="#E7F1EE"
        spacing="30px"
        paddingBottom={"30px"}
      >
        <Header />
        <Carousel />
        <VStack width="30%" align="center" textAlign="center">
          <Heading size="lg" color="#085D65">
            Наши направления
          </Heading>
          <Text color="#7E7E7E">
            Мы - многопрофильная клиника, осуществляем комплексное лечение
          </Text>
        </VStack>
        <InfoPanel />
        <VStack width="30%" align="center" textAlign="center">
          <Heading size="lg" color="#085D65">
            Наши врачи
          </Heading>
          <Text color="#7E7E7E">С вами рядом будут высококвалифицированные специалисты</Text>
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
        {width >= 768 ? <ReviewsAboutUs /> : null}

        <Checkin />
        <Licenses />
        <MapBlock />
      </VStack>
      <Footer />
    </VStack>
  );
};
export default MainPage;
