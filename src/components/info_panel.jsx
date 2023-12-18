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
import ginecolog from "./../images/ginecolog.png";
import urolog from "./../images/urolog.png";
import cardiolog from "./../images/cardiolog.png";
import pediatr from "./../images/pediatr.png";
import diet from "./../images/dietolog.png";
import av from "./../images/av.png";
import uzi from "./../images/uzi.png";
import neurolog from "./../images/neurolog.png";
import terapy from "./../images/terapist.png";
import cosmetolog from "./../images/cosmetolog.png";
import analysis from "./../images/analiz.png";
import shadowlogo from "./../images/shadowlogo.png";
const InfoPanel = () => {
  return (
    <Grid
      templateColumns="repeat(4, 2fr)"
      gap={["10px", "12px", "14px", "15px", "20px"]}
      marginTop="30px"
      width="80%"
    >
      <GridItem>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          boxShadow="0px 7px 4px 0px rgba(0, 0, 0, 0.25)"
          spacing="15px"
          align="flex-start"
          padding="10px"
        >
          <VStack align="flex-start">
            <Text>Гинекология</Text>
            <Link color="#085D65">Подробнее</Link>
          </VStack>
          <HStack>
            <Image
              src={shadowlogo}
              position="relative"
              bottom="-30px"
              left="-30px"
            />
            <Image src={ginecolog} />
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
          padding="10px"
        >
          <VStack align="flex-start">
            <Text>Урология</Text>
            <Link color="#085D65">Подробнее</Link>
          </VStack>
          <HStack>
            <Image
              src={shadowlogo}
              position="relative"
              bottom="-30px"
              left="-30px"
            />
            <Image src={urolog} />
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
          padding="10px"
        >
          <VStack align="flex-start">
            <Text>Кардиология</Text>
            <Link color="#085D65">Подробнее</Link>
          </VStack>
          <HStack>
            <Image
              src={shadowlogo}
              position="relative"
              bottom="-30px"
              left="-30px"
            />
            <Image src={cardiolog} />
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
          padding="10px"
        >
          <VStack align="flex-start">
            <Text>Педиатрия</Text>
            <Link color="#085D65">Подробнее</Link>
          </VStack>
          <HStack>
            <Image
              src={shadowlogo}
              position="relative"
              bottom="-30px"
              left="-30px"
            />
            <Image src={pediatr} />
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
          padding="10px"
        >
          <VStack align="flex-start">
            <Text>Диетолог</Text>
            <Link color="#085D65">Подробнее</Link>
          </VStack>
          <HStack>
            <Image
              src={shadowlogo}
              position="relative"
              bottom="-30px"
              left="-30px"
            />
            <Image src={diet} />
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
          padding="10px"
        >
          <VStack align="flex-start">
            <Text>AV-терапия</Text>
            <Link color="#085D65">Подробнее</Link>
          </VStack>
          <HStack>
            <Image
              src={shadowlogo}
              position="relative"
              bottom="-30px"
              left="-30px"
            />
            <Image src={av} />
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
          padding="10px"
        >
          <VStack align="flex-start">
            <Text>Неврология</Text>
            <Link color="#085D65">Подробнее</Link>
          </VStack>
          <HStack>
            <Image
              src={shadowlogo}
              position="relative"
              bottom="-30px"
              left="-30px"
            />
            <Image src={neurolog} />
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
          padding="10px"
        >
          <VStack align="flex-start">
            <Text>УЗИ 7-8</Text>
            <Link color="#085D65">Подробнее</Link>
          </VStack>
          <HStack>
            <Image
              src={shadowlogo}
              position="relative"
              bottom="-30px"
              left="-30px"
            />
            <Image src={uzi} />
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
          padding="10px"
        >
          <VStack align="flex-start">
            <Text>Терапия</Text>
            <Link color="#085D65">Подробнее</Link>
          </VStack>
          <HStack>
            <Image
              src={shadowlogo}
              position="relative"
              bottom="-30px"
              left="-30px"
            />
            <Image src={terapy} />
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
          padding="10px"
        >
          <VStack align="flex-start">
            <Text>Косметолог</Text>
            <Link color="#085D65">Подробнее</Link>
          </VStack>
          <HStack>
            <Image
              src={shadowlogo}
              position="relative"
              bottom="-30px"
              left="-30px"
            />
            <Image src={cosmetolog} />
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
          padding="10px"
        >
          <VStack align="flex-start">
            <Text>Анализы</Text>
            <Link color="#085D65">Подробнее</Link>
          </VStack>
          <HStack>
            <Image
              src={shadowlogo}
              position="relative"
              bottom="-30px"
              left="-30px"
            />
            <Image src={analysis} />
          </HStack>
        </VStack>
      </GridItem>
    </Grid>
  );
};
export default InfoPanel;
