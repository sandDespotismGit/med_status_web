import { HStack, VStack, Heading, Image, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import license1 from "./../images/license1.jpg";
import license2 from "./../images/license2.jpg";
import useWindowDimensions from "../hooks/window_dimensions";

const Licenses = () => {
  const {width, height} = useWindowDimensions();
  return (
    <VStack width="100%" spacing="25px">
      <Heading size="lg" color="#085D65">
        Лицензии
      </Heading>
      <Stack justify="center" align={'center'} width="95%" spacing={"10px"} direction={width >= 820 ? 'row' : 'column'}>
        <Image src={license1} width={width >= 820 ? '45%' : '95%'}/>
        <Image src={license2} width={width >= 820 ? '45%' : '95%'}/>
      </Stack>
    </VStack>
  );
};
export default Licenses;
