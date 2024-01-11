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
  Link
} from "@chakra-ui/react";
import { useState } from 'react';
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
import { Element} from 'react-scroll';
const InfoPanel = () => {
  const { width, height } = useWindowDimensions();
  const [isShown, setIsShown] = useState(false);
  return (
    <Grid
      templateColumns={width <= 832 ? " repeat(2, 2fr)" : " repeat(4, 2fr)"}
      gap={["35px", "42px", "44px", "45px", "60px"]}
      marginTop="30px"
      padding={['10px', '10px', '0px', '0px', '0px']}
      width="100%"
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
          <Text zIndex={5} fontWeight={700} color={"#138B96"} fontSize={width <= 400 ? "xs" : ""}> 
              Гинекология<br />
              <Link color="#15AD92" zIndex={5} href='#/ginekolog' style={{ textDecoration: 'none' }}>
              <HStack 
                spacing="3px"
                onMouseEnter={() => setIsShown({"gin": true})}
                onMouseLeave={() => setIsShown(false)}
              >
                  <Text color={isShown["gin"] && ("red")}>Подробнее</Text>
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
            <Text zIndex={5} fontWeight={700} color={"#138B96"} fontSize={width <= 400 ? "xs" : ""}> 
              Кардиология<br />
              <Link color="#15AD92" zIndex={5} href='#/cardio' style={{ textDecoration: 'none' }}>
                <HStack spacing="3px"
                  onMouseEnter={() => setIsShown({"card": true})}
                  onMouseLeave={() => setIsShown(false)}>
                  <Text color={isShown["card"] && ("red")}>Подробнее</Text>
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
            <Text zIndex={5} fontWeight={700} color={"#138B96"} fontSize={width <= 400 ? "xs" : ""}> 
              Терапия<br />
              <Link color="#15AD92" zIndex={5} href='#/terapy' style={{ textDecoration: 'none' }}>
              <HStack spacing="3px"
                  onMouseEnter={() => setIsShown({"ter": true})}
                  onMouseLeave={() => setIsShown(false)}>
                  <Text color={isShown["ter"] && ("red")}>Подробнее</Text>
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
            <Text zIndex={5} fontWeight={700} color={"#138B96"} fontSize={width <= 400 ? "xs" : ""}> 
              Анализы<br />
              <Link color="#15AD92" zIndex={5} href='#/analys' style={{ textDecoration: 'none' }}>
              <HStack spacing="3px"
                  onMouseEnter={() => setIsShown({"ana": true})}
                  onMouseLeave={() => setIsShown(false)}>
                  <Text color={isShown["ana"] && ("red")}>Подробнее</Text>
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
            <Text zIndex={5} fontWeight={700} color={"#138B96"} fontSize={width <= 400 ? "xs" : ""}> 
              IV-терапия<br />
              <Link color="#15AD92" zIndex={5} href='#/iv' style={{ textDecoration: 'none' }}>
              <HStack spacing="3px"
                  onMouseEnter={() => setIsShown({"iv": true})}
                  onMouseLeave={() => setIsShown(false)}>
                  <Text color={isShown["iv"] && ("red")}>Подробнее</Text>
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
            <Text zIndex={5} fontWeight={700} color={"#138B96"} fontSize={width <= 400 ? "xs" : ""}> 
              Check-Up<br />
              <Link color="#15AD92" zIndex={5} href='#/checkup' style={{ textDecoration: 'none' }}>
              <HStack spacing="3px" onMouseEnter={() => setIsShown({"cu": true})}
                  onMouseLeave={() => setIsShown(false)}>
                  <Text color={isShown["cu"] && ("red")}>Подробнее</Text>
                  <Image src={str} width={"5%"} />
                </HStack>
                <HStack justify="right">
                  <Image src={ckecku} width={"50%"} />
                </HStack>

              </Link>
            </Text>
        </VStack>
      </GridItem>
      {/* <GridItem>
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
            <Text zIndex={5} fontWeight={700} color={"#138B96"} fontSize={width <= 400 ? "xs" : ""}> 
              Педиатрия<br />
              <Link color="#15AD92" zIndex={5} href='#/pediatr' style={{ textDecoration: 'none' }}>
              <HStack spacing="3px" onMouseEnter={() => setIsShown({"pe": true})}
                  onMouseLeave={() => setIsShown(false)}>
                  <Text color={isShown["pe"] && ("red")}>Подробнее</Text>
                  <Image src={str} width={"5%"} />
                </HStack>
                <HStack justify="right">
                  <Image src={pediatr} width={"50%"} />
                </HStack>

              </Link>
            </Text>
        </VStack>
  </GridItem> */}
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
            <Text zIndex={5} fontWeight={700} color={"#138B96"} fontSize={width <= 400 ? "xs" : ""}> 
              Неврология<br />
              <Link color="#15AD92" zIndex={5} href='#/neuro' style={{ textDecoration: 'none' }}>
              <HStack spacing="3px" onMouseEnter={() => setIsShown({"neu": true})}
                  onMouseLeave={() => setIsShown(false)}>
                  <Text color={isShown["neu"] && ("red")}>Подробнее</Text>
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
            <Text zIndex={5} fontWeight={700} color={"#138B96"} fontSize={width <= 400 ? "xs" : ""}> 
              УЗИ<br />
              <Link color="#15AD92" zIndex={5} href='#/uzi' style={{ textDecoration: 'none' }}>
              <HStack spacing="3px" onMouseEnter={() => setIsShown({"uzi": true})}
                  onMouseLeave={() => setIsShown(false)}>
                  <Text color={isShown["uzi"] && ("red")}>Подробнее</Text>
                  <Image src={str} width={"5%"} />
                </HStack>
                <HStack justify="right">
                  <Image src={uzi} width={"50%"} />
                </HStack>

              </Link>
            </Text>
        </VStack>
      </GridItem>
      {/*<GridItem>
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
            <Text zIndex={5} fontWeight={700} color={"#138B96"} fontSize={width <= 400 ? "xs" : ""}> 
              Хирургия<br />
              <Link color="#15AD92" zIndex={5} href='#/hirurgia' style={{ textDecoration: 'none' }}>
              <HStack spacing="3px" onMouseEnter={() => setIsShown({"hir": true})}
                  onMouseLeave={() => setIsShown(false)}>
                  <Text color={isShown["hir"] && ("red")}>Подробнее</Text>
                  <Image src={str} width={"5%"} />
                </HStack>
                <HStack justify="right">
                  <Image src={hirurg} width={"50%"} />
                </HStack>

              </Link>
            </Text>
        </VStack>
      </GridItem> */}
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
            <Text zIndex={5} fontWeight={700} color={"#138B96"} fontSize={width <= 400 ? "xs" : ""}> 
              Урология<br />
              <Link color="#15AD92" zIndex={5} href='#/uro' style={{ textDecoration: 'none' }}>
              <HStack spacing="3px" onMouseEnter={() => setIsShown({"urol": true})}
                  onMouseLeave={() => setIsShown(false)}>
                  <Text color={isShown["urol"] && ("red")}>Подробнее</Text>
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
            <Text zIndex={5} fontWeight={700} color={"#138B96"} fontSize={width <= 400 ? "xs" : ""}> 
              Эндокринология<br />
              <Link color="#15AD92" zIndex={5} href='#/endo' style={{ textDecoration: 'none' }}>
              <HStack spacing="3px" onMouseEnter={() => setIsShown({"endo": true})}
                  onMouseLeave={() => setIsShown(false)}>
                  <Text color={isShown["endo"] && ("red")}>Подробнее</Text>
                  <Image src={str} width={"5%"} />
                </HStack>
                <HStack justify="right">
                  <Image src={endo} width={"50%"} />
                </HStack>

              </Link>
            </Text>
        </VStack>
      </GridItem>
      <Element id="docs" className="element"/>
    </Grid>
  );
};
export default InfoPanel;
