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
import scooters from "./../images/scooters.jpg";
const InfoPanel = () => {
  return (
    <Grid
      templateColumns="repeat(2, 2fr)"
      gap={["10px", "12px", "14px", "15px", "20px"]}
      marginTop="30px"
    >
      <GridItem>
        <div style={{display:'flex', flexDirection:'row', backgroundColor:'aliceblue'}}>
            <div style={{width:'30%'}}>
                <img src={scooters} style={{objectFit:'fill', height:'100%'}}/>
            </div>
            
            <VStack align='flex-start' padding='20px'>
                <Heading size='sm'>
                    Взрослое отделение
                </Heading>
                <Text>
                    Терапевт, хирургия, кардиология, неврология, хирургия, кардиология, неврология
                </Text>
                <Link color='deepskyblue'>Подробнее</Link>
            </VStack>
        </div>
      </GridItem>
      <GridItem>
        <div style={{display:'flex', flexDirection:'row', backgroundColor:'aliceblue'}}>
            <div style={{width:'30%'}}>
                <img src={scooters} style={{objectFit:'fill', height:'100%'}}/>
            </div>
            
            <VStack align='flex-start' padding='20px'>
                <Heading size='sm'>
                    Взрослое отделение
                </Heading>
                <Text>
                    Терапевт, хирургия, кардиология, неврология, хирургия, кардиология, неврология
                </Text>
                <Link color='deepskyblue'>Подробнее</Link>
            </VStack>
        </div>
      </GridItem>
      <GridItem>
        <div style={{display:'flex', flexDirection:'row', backgroundColor:'aliceblue'}}>
            <div style={{width:'30%'}}>
                <img src={scooters} style={{objectFit:'fill', height:'100%'}}/>
            </div>
            
            <VStack align='flex-start' padding='20px'>
                <Heading size='sm'>
                    Взрослое отделение
                </Heading>
                <Text>
                    Терапевт, хирургия, кардиология, неврология, хирургия, кардиология, неврология
                </Text>
                <Link color='deepskyblue'>Подробнее</Link>
            </VStack>
        </div>
      </GridItem>
      <GridItem>
        <div style={{display:'flex', flexDirection:'row', backgroundColor:'aliceblue'}}>
            <div style={{width:'30%'}}>
                <img src={scooters} style={{objectFit:'fill', height:'100%'}}/>
            </div>
            
            <VStack align='flex-start' padding='20px'>
                <Heading size='sm'>
                    Взрослое отделение
                </Heading>
                <Text>
                    Терапевт, хирургия, кардиология, неврология, хирургия, кардиология, неврология
                </Text>
                <Link color='deepskyblue'>Подробнее</Link>
            </VStack>
        </div>
      </GridItem>
    </Grid>
  );
};
export default InfoPanel;
