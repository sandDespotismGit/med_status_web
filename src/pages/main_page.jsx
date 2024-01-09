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
import { Heading, VStack, Text, Button, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@chakra-ui/icons';
const MainPage = () => {
  const { width, height } = useWindowDimensions();
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <VStack width="100%" overflowX='hidden'>
      {isVisible && (
        <Box
          onClick={scrollToTop}
          position='fixed'
          bottom='20px'
          right={['16px', '84px']}
          zIndex={3}>
          <Button
            size={'sm'}
            rightIcon={<ArrowUpIcon />}
            colorScheme='green'
            variant='solid'>
            Наверх
          </Button>
        </Box>
      )}
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
