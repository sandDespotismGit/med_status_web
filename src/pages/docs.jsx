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
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { GoDownload } from "react-icons/go";

const Docs = () => {
  const [docs, setDocs] = useState(null);
  useEffect(() => {
    fetch("https://admin.медстатус73.рф/api/doc?populate=deep")
      .then((response) => response.json())
      .then(function (commits) {
        let data = commits.data;
        let buffer = [];
        for (let elem of data) {
          buffer.push(
            elem.attributes.file.data[0].attributes ? (
              <HStack
                padding={"15px"}
                color={"#085D65"}
                borderRadius={"13px"}
                border={"1px solid gray"}
                textShadow={"0px 4px 40px rgba(0, 0, 0, 0.25)"}
                fontSize={"14px"}
                width={"100%"}
                _hover={{ borderRadius: "13px", border: "1px solid #0F939F" }}
                justify={"space-between"}
              >
                <Text>{elem.attributes.name}</Text>

                <a
                  download
                  target="_blank"
                  href={
                    "https://admin.%D0%BC%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D1%82%D1%83%D1%8173.%D1%80%D1%84" +
                    elem.attributes.file.data[0].attributes.url
                  }
                >
                  <HStack>
                    <GoDownload color="red" />
                    <Text>Скачать PDF</Text>
                  </HStack>
                </a>
              </HStack>
            ) : null
          );
        }
        setDocs(buffer);
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
        Документация
      </Heading>
      <Card borderRadius="15px" width={"100%"}>
        <CardBody>
          <VStack spacing={"15px"}>{docs}</VStack>
        </CardBody>
      </Card>

      <Footer />
    </VStack>
  );
};
export default Docs;
