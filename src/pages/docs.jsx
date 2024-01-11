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
  Grid
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

const Docs = () => {
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

      <Footer />
    </VStack>
  );
};
export default Docs;
