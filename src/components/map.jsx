import { Image, VStack, HStack, Text, Heading } from "@chakra-ui/react";
import map from "./../images/map.png";
import logo from "./../images/back.png";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
const MapBlock = () => {
  return (
    <HStack width="100%" justify="space-around" align='flex-start'>
      <VStack
        backgroundColor="white"
        boxShadow="0px 7px 4px 3px rgba(0, 0, 0, 0.25)"
        borderRadius="20px"
        align="flex-start"
        padding="25px"
        width="30%"
        height={'30vh'}
      >
        <Image src={logo} width="30%" />
        <Text>Ежедневно с 8:00 до 20:00</Text>
        <Text fontWeight={700}>Ульяновск, Минаева, 48А</Text>
        <Text>Телефон:</Text>
        <Text fontWeight={700}>+7 (8422) 73-78-78</Text>
      </VStack>
      <YMaps>
        <Map width="800px" height="500px" defaultState={{ center: [54.306686, 48.390358], zoom: 15 }}>
          <Placemark geometry={[54.306686, 48.390358]} />
        </Map>
      </YMaps>
    </HStack>
  );
};
export default MapBlock;
