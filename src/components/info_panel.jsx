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
import shadowlogo from "./../images/shadowlogo.svg";
import useWindowDimensions from "../hooks/window_dimensions";
const InfoPanel = () => {
  const { width, height } = useWindowDimensions();
  return (
    <Grid
      templateColumns={width <= 512 ? " repeat(2, 2fr)" : " repeat(4, 2fr)"}
      gap={["15px", "22px", "24px", "25px", "40px"]}
      marginTop="30px"
      width="70%"
    >
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="flex-start"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
          <VStack align="flex-start">
            <Text fontStyle='' zIndex={5} fontWeight={700} color={"#138B96"}>
              Гинекология
            </Text>
            <Link href="#/ginekolog" color="#15AD92" zIndex={5}>
              Подробнее
            </Link>
          </VStack>
          <HStack width={"100%"} justify={"right"}>
            <Image src={ginecolog} width="30%" />
          </HStack>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="flex-start"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
          <VStack align="flex-start">
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              Кардиология
            </Text>
            <Link color="#15AD92" zIndex={5} href='#/cardio'>
              Подробнее
            </Link>
          </VStack>
          <HStack width={"100%"} justify={"right"}>
            <Image src={cardiolog} width="30%" />
          </HStack>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="flex-start"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
          <VStack align="flex-start">
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              Терапия
            </Text>
            <Link href="#/terapy" color="#15AD92" zIndex={5}>
              Подробнее
            </Link>
          </VStack>
          <HStack width={"100%"} justify={"right"}>
            <Image src={terapy} width="30%" />
          </HStack>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="flex-start"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
          <VStack align="flex-start">
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              Анализы
            </Text>
            <Link href="#/analys" color="#15AD92" zIndex={5}>
              Подробнее
            </Link>
          </VStack>
          <HStack width={"100%"} justify={"right"}>
            <Image src={analysis} width="30%" />
          </HStack>
        </VStack>
      </GridItem>
      
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="flex-start"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
          <VStack align="flex-start">
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              IV-терапия
            </Text>
            <Link href="#/iv" color="#15AD92" zIndex={5}>
              Подробнее
            </Link>
          </VStack>
          <HStack width={"100%"} justify={"right"}>
            <Image src={iv} width="30%" />
          </HStack>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="flex-start"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
          <VStack align="flex-start">
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              Check-Up
            </Text>
            <Link href="#/checkup"color="#15AD92" zIndex={5}>
              Подробнее
            </Link>
          </VStack>
          <HStack width={"100%"} justify={"right"}>
            <Image src={ckecku} width="30%" />
          </HStack>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="flex-start"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
          <VStack align="flex-start">
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              Педиатрия
            </Text>
            <Link href="#/pediatr" color="#15AD92" zIndex={5}>
              Подробнее
            </Link>
          </VStack>
          <HStack width={"100%"} justify={"right"}>
            <Image src={pediatr} width="30%" />
          </HStack>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="flex-start"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
          <VStack align="flex-start">
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              Неврология
            </Text>
            <Link href="#/neuro" color="#15AD92" zIndex={5}>
              Подробнее
            </Link>
          </VStack>
          <HStack width={"100%"} justify={"right"}>
            <Image src={neurolog} width="30%" />
          </HStack>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="flex-start"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
          <VStack align="flex-start">
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              УЗИ
            </Text>
            <Link href="#/uzi" color="#15AD92" zIndex={5}>
              Подробнее
            </Link>
          </VStack>
          <HStack width={"100%"} justify={"right"}>
            <Image src={uzi} width="30%" />
          </HStack>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="flex-start"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
          <VStack align="flex-start">
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              Хирургия
            </Text>
            <Link href="#/hirurgia"color="#15AD92" zIndex={5}>
              Подробнее
            </Link>
          </VStack>
          <HStack width={"100%"} justify={"right"}>
            <Image src={hirurg} width="30%" />
          </HStack>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="flex-start"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
          <VStack align="flex-start">
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              Урология
            </Text>
            <Link href="#/uro" color="#15AD92" zIndex={5}>
              Подробнее
            </Link>
          </VStack>
          <HStack width={"100%"} justify={"right"}>
            <Image src={urolog} width="30%" />
          </HStack>
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 2px 30px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="flex-start"
          padding="25px"
          position={"relative"}
          height={"100%"}
        >
          <img
            src={shadowlogo}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
          <VStack align="flex-start">
            <Text zIndex={5} fontWeight={700} color={"#138B96"}>
              Эндокринология
            </Text>
            <Link href="#/endo"color="#15AD92" zIndex={5}>
              Подробнее
            </Link>
          </VStack>
          <HStack width={"100%"} justify={"right"}>
            <Image src={endo} width="30%" />
          </HStack>
        </VStack>
      </GridItem>
    </Grid>
  );
};
export default InfoPanel;
