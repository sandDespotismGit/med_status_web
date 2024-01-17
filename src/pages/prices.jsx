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
import { useEffect } from "react";
import { GoDownload } from "react-icons/go";

const Price = () => {
    const [price, setPrice] = useState(null);
    useEffect(() => {
      fetch("https://admin.медстатус73.рф/api/prices?populate=deep")
        .then((response) => response.json())
        .then(function (commits) {
          let data = commits.data;
          let buffer = [];
          for (let elem of data) {
            buffer.push(
              elem.attributes ? (
                <Tr>
                    <Td>{elem.attributes.name}</Td>
                    <Td>{elem.attributes.price} руб.</Td>
                </Tr>
              ) : null
            );
          }
          setPrice(buffer);
        });
    }, []);
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
        Цены
      </Heading>
    <TableContainer width="80%">
      <Table variant='striped' colorScheme='blackAlpha' size='lg'>
        <Thead>
          <Tr>
            <Th>Услуга</Th>
            <Th>Цена</Th>
          </Tr>
        </Thead>
        <Tbody>
            {price}
        </Tbody>
      </Table>
</TableContainer>
      <Footer />
    </VStack>
  );
};
export default Price;
