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
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

const Cardiologia = () => {
  const [Ntext, setText] = useState(null);
  useEffect(() => {
    fetch("https://admin.медстатус73.рф/api/infos?filters[name][$eq]=Кардиология")
      .then((response) => response.json())
      .then(function (commits) {
        let data = commits.data;
        console.log(data)
        let buffer = [];
        for (let elem of data) {
          setText(elem.attributes.text);
        }
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
      Кардиология
      </Heading>
      <Card borderRadius='15px'>
        <CardBody>
        <Text whiteSpace="pre-line">
          {Ntext}
        </Text>
        </CardBody>
      </Card>

      <Footer />
    </VStack>
  );
};
export default Cardiologia;
