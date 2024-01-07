import Header from "../components/header";
import Footer from "../components/footer";
import { Heading, VStack, Text, Button } from "@chakra-ui/react";
const Pediatria = () => {
  return (
    <VStack
      width="100%"
      paddingLeft={["10px", "15px", "30px", "45px", "225px"]}
      paddingRight={["10px", "15px", "30px", "45px", "225px"]}
      backgroundColor="#E7F1EE"
      spacing="30px"
    >
      <Header />

      <Footer />
    </VStack>
  );
};
export default Pediatria;