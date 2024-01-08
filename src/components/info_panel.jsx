import {
  Grid,
  GridItem,
  Card,
  CardBody,
  Text,
  Image,
  HStack,
  VStack,
  Heading,
  Link,
} from "@chakra-ui/react";
import ginecolog from "./../images/ginecolog.svg";
import urolog from "./../images/urolog.svg";
import cardiolog from "./../images/cardio.svg";
import pediatr from "./../images/pediatr.svg";
import hirurg from "./../images/chirurg.svg";
import iv from "./../images/iv-1.svg";
import uzi from "./../images/uzi.svg";
import neurolog from "./../images/neuro.svg";
import terapy from "./../images/terapy.svg";
import analysis from "./../images/analys.svg";
import endo from "./../images/endo.svg";
import ckecku from "./../images/check-up.svg";
import str from "./../images/str.svg";
import shadowlogo from "./../images/shadowlogo.svg";
import useWindowDimensions from "../hooks/window_dimensions";
const InfoPanel = () => {
  const { width, height } = useWindowDimensions();
  return (
    <Grid
      templateColumns={width <= 512 ? " repeat(2, 2fr)" : " repeat(4, 2fr)"}
      gap={["35px", "42px", "44px", "45px", "60px"]}
      marginTop="30px"
      width="80%"
    >
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="stretch"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
          <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              Гинекология<br />
              <Link color="#15AD92" zIndex={5} href='#/ginekolog'>
              <HStack spacing="3px">
                  <Text>Подробнее</Text>
                  <Image src={str} width={"5%"} />
                </HStack>
                <HStack justify="right">
                  <Image src={ginecolog} width={"30%"} />
                </HStack>

              </Link>
          </Text>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="stretch"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              Кардиология<br />
              <Link color="#15AD92" zIndex={5} href='#/cardio'>
                <HStack spacing="3px">
                  <Text>Подробнее</Text>
                  <Image src={str} width={"5%"} />
                </HStack>
                
                <HStack justify="right">
                  <Image src={cardiolog} width={"50%"} />
                </HStack>

              </Link>
            </Text>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="stretch"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              Терапия<br />
              <Link color="#15AD92" zIndex={5} href='#/terapy'>
              <HStack spacing="3px">
                  <Text>Подробнее</Text>
                  <Image src={str} width={"5%"} />
                </HStack>
                <HStack justify="right">
                  <Image src={terapy} width={"50%"} />
                </HStack>

              </Link>
            </Text>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="stretch"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              Анализы<br />
              <Link color="#15AD92" zIndex={5} href='#/analys'>
              <HStack spacing="3px">
                  <Text>Подробнее</Text>
                  <Image src={str} width={"5%"} />
                </HStack>
                <HStack justify="right">
                  <Image src={analysis} width={"50%"} />
                </HStack>

              </Link>
            </Text>
        </VStack>
      </GridItem>
      
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="stretch"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              IV-терапия<br />
              <Link color="#15AD92" zIndex={5} href='#/iv'>
              <HStack spacing="3px">
                  <Text>Подробнее</Text>
                  <Image src={str} width={"5%"} />
                </HStack>
                <HStack justify="right">
                  <Image src={iv} width={"50%"} />
                </HStack>

              </Link>
            </Text>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="stretch"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              Check-Up<br />
              <Link color="#15AD92" zIndex={5} href='#/checkup'>
              <HStack spacing="3px">
                  <Text>Подробнее</Text>
                  <Image src={str} width={"5%"} />
                </HStack>
                <HStack justify="right">
                  <Image src={ckecku} width={"50%"} />
                </HStack>

              </Link>
            </Text>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="stretch"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              Педиатрия<br />
              <Link color="#15AD92" zIndex={5} href='#/pediatr'>
              <HStack spacing="3px">
                  <Text>Подробнее</Text>
                  <Image src={str} width={"5%"} />
                </HStack>
                <HStack justify="right">
                  <Image src={pediatr} width={"50%"} />
                </HStack>

              </Link>
            </Text>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="stretch"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              Неврология<br />
              <Link color="#15AD92" zIndex={5} href='#/neuro'>
              <HStack spacing="3px">
                  <Text>Подробнее</Text>
                  <Image src={str} width={"5%"} />
                </HStack>
                <HStack justify="right">
                  <Image src={neurolog} width={"50%"} />
                </HStack>

              </Link>
            </Text>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="stretch"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              УЗИ<br />
              <Link color="#15AD92" zIndex={5} href='#/uzi'>
              <HStack spacing="3px">
                  <Text>Подробнее</Text>
                  <Image src={str} width={"5%"} />
                </HStack>
                <HStack justify="right">
                  <Image src={uzi} width={"50%"} />
                </HStack>

              </Link>
            </Text>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="stretch"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              Хирургия<br />
              <Link color="#15AD92" zIndex={5} href='#/hirurgia'>
              <HStack spacing="3px">
                  <Text>Подробнее</Text>
                  <Image src={str} width={"5%"} />
                </HStack>
                <HStack justify="right">
                  <Image src={hirurg} width={"50%"} />
                </HStack>

              </Link>
            </Text>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="stretch"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              Урология<br />
              <Link color="#15AD92" zIndex={5} href='#/uro'>
              <HStack spacing="3px">
                  <Text>Подробнее</Text>
                  <Image src={str} width={"5%"} />
                </HStack>
                <HStack justify="right">
                  <Image src={urolog} width={"60%"} />
                </HStack>

              </Link>
            </Text>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="stretch"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              Эндокринология<br />
              <Link color="#15AD92" zIndex={5} href='#/endo'>
              <HStack spacing="3px">
                  <Text>Подробнее</Text>
                  <Image src={str} width={"5%"} />
                </HStack>
                <HStack justify="right">
                  <Image src={endo} width={"50%"} />
                </HStack>

              </Link>
            </Text>
        </VStack>
      </GridItem>
    </Grid>
  );
};
export default InfoPanel;
