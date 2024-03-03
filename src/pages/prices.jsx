import PageHeader from "../components/page_header";
import Footer from "../components/footer";
import {
    Heading,
    VStack,
    Text,
    Button,
    List,
    ListItem,
    Card,
    CardBody,
    HStack,
    GridItem,
    Grid,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Link
  } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { useState } from "react";
import { useLayoutEffect  } from "react";
import { GoDownload } from "react-icons/go";
import uuid from 'react-uuid';
import { GiButterflyFlower } from "react-icons/gi";
import { RiLoader2Line } from "react-icons/ri";

const Price = () => {
  const [state, setState] = useState(false);
    const usePrice = () => {
      const [price, setPrice] = useState(null);
      useLayoutEffect(() => {
        fetch("https://admin.медстатус73.рф/api/danns")
          .then((response) => response.json())
          .then(function (commits) {
            let data = commits.data;
            let buffer = [];
            for (let elem of data) {
              let bufferData = [];
              fetch("https://admin.медстатус73.рф/api/prices?populate=deep&filters[napravleniya_v_czeny][dir]=" + elem.attributes.dir)
                .then((response) => response.json())
                .then(function (commits) {
                  let dataС = commits.data;
                  for (let elemC of dataС) {
                    bufferData.push(
                      elemC.attributes ? (
                        <Tr key={uuid()}>
                            <Td>{elemC.attributes.name}</Td>
                            <Td>{elemC.attributes.price} руб.</Td>
                        </Tr>
                      ) : null
                    );
                  }
                  buffer.push(
                      <Table key={uuid()} variant='striped' colorScheme='blackAlpha' size='lg'>
                        <Thead>
                          <Tr><Text fontWeight={"bold"} color="#085D65" style={{marginTop: '25px'}}>{elem.attributes.dir}</Text></Tr>
                          <Tr>
                            <Th>Услуга</Th>
                            <Th>Цена</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                            {bufferData}
                        </Tbody>
                      </Table>)
                   setPrice(buffer);
                })
            }
           
          });
          
      }, []);
      setTimeout(() => { setState(true);}, 8000)
      if (state){
        return price;
      }
      
    };
    
  return (
    <VStack
      width="100%"
      paddingLeft={["0px", "10px", "25px", "40px", "200px"]}
      paddingRight={["0px", "10px", "25px", "40px", "200px"]}
      backgroundColor="#E7F1EE"
      spacing="30px"
      minHeight="100vh"
      justify="space-between"
    >
      <PageHeader />
      <Heading size="lg" color="#085D65">
        {state ? 'Цены' : "Загрузка..."}

      </Heading>
      <TableContainer key={uuid()} width="80%">{usePrice()}</TableContainer>
      <Footer />
    </VStack>
  );
};
export default Price;
