import { Image, VStack, HStack, Text, Heading, Stack } from "@chakra-ui/react";
import map from "./../images/map.png";
import logo from "./../images/back.png";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { Element } from "react-scroll";
import useWindowDimensions from "../hooks/window_dimensions";
const MapBlock = () => {
  const { width, height } = useWindowDimensions();
  return (
    <Stack
      width="95%"
      justify="space-around"
      align="flex-start"
      direction={width >= 768 ? "row" : "column"}
    >
      <VStack
        backgroundColor="white"
        boxShadow="0px 7px 4px 3px rgba(0, 0, 0, 0.25)"
        borderRadius="20px"
        align="flex-start"
        padding="50px"
        width={width >= 768 ? "30%" : "100%"}
      >
        <Element id="contacts" className="element" />
        <Image src={logo} width="60%" />
        <Text marginTop={"30px"}>7:30 - 20:00</Text>
        <Text>сб-вс: 7:30 - 18:00</Text>
        <Text fontWeight={700}>Ульяновск, Минаева, 48А</Text>
        <Text marginTop={"50px"}>Телефон:</Text>
        <Text fontWeight={700}>+7 (8422) 73-78-78</Text>
      </VStack>
      <YMaps>
        <Map
          width={width >= 768 ? "60%" : "100%"}
          height="500px"
          defaultState={{ center: [54.306686, 48.390358], zoom: 15 }}
        >
          <Placemark geometry={[54.306686, 48.390358]} />
        </Map>
      </YMaps>
    </Stack>
  );
};
export default MapBlock;
