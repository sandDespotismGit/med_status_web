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
import urolog from "./../images/urolog.png";
import cardiolog from "./../images/cardio.svg";
import pediatr from "./../images/pediatr.png";
import diet from "./../images/dietolog.png";
import av from "./../images/av.png";
import uzi from "./../images/uzi.png";
import neurolog from "./../images/neurolog.png";
import terapy from "./../images/terapy.svg";
import cosmetolog from "./../images/cosmetolog.png";
import analysis from "./../images/analys.svg";
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
          boxShadow="0px 7px 4px 0px rgba(0, 0, 0, 0.25)"
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
            <Link color="#15AD92" zIndex={5}>
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
          boxShadow="0px 7px 4px 0px rgba(0, 0, 0, 0.25)"
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
            <Link color="#15AD92" zIndex={5}>
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
          boxShadow="0px 7px 4px 0px rgba(0, 0, 0, 0.25)"
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
            <Link color="#15AD92" zIndex={5}>
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
          boxShadow="0px 7px 4px 0px rgba(0, 0, 0, 0.25)"
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
            <Link color="#15AD92" zIndex={5}>
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
          boxShadow="0px 7px 4px 0px rgba(0, 0, 0, 0.25)"
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
            <Link color="#15AD92" zIndex={5}>
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
          boxShadow="0px 7px 4px 0px rgba(0, 0, 0, 0.25)"
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
            <Link color="#15AD92" zIndex={5}>
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
          boxShadow="0px 7px 4px 0px rgba(0, 0, 0, 0.25)"
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
            <Link color="#15AD92" zIndex={5}>
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
          boxShadow="0px 7px 4px 0px rgba(0, 0, 0, 0.25)"
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
            <Link color="#15AD92" zIndex={5}>
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
          boxShadow="0px 7px 4px 0px rgba(0, 0, 0, 0.25)"
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
            <Link color="#15AD92" zIndex={5}>
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
          boxShadow="0px 7px 4px 0px rgba(0, 0, 0, 0.25)"
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
            <Link color="#15AD92" zIndex={5}>
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
          boxShadow="0px 7px 4px 0px rgba(0, 0, 0, 0.25)"
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
            <Link color="#15AD92" zIndex={5}>
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
          boxShadow="0px 7px 4px 0px rgba(0, 0, 0, 0.25)"
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
            <Link color="#15AD92" zIndex={5}>
              Подробнее
            </Link>
          </VStack>
          <HStack width={"100%"} justify={"right"}>
            <Image src={ginecolog} width="30%" />
          </HStack>
        </VStack>
      </GridItem>
    </Grid>
  );
};
export default InfoPanel;
