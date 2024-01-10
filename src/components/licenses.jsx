import { HStack, VStack, Heading, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

const Licenses = () => {
  const [licenses , setLicenses] = useState([null, null])
  useEffect(() => {
    fetch("http://95.214.62.189:1337/api/licenses")
      .then((response) => response.json())
      .then(function (commits) {
        let data = commits.data;
        let buffer = [];
        for (let elem of data) {
          buffer.push(
            
          );
        }
        setLicenses(buffer);
      });
  }, []);
  return (
    <VStack width="100%" spacing="25px">
      <Heading size="lg" color="#085D65">
        Лицензии
      </Heading>
      <HStack justify="space-around" width='30%' spacing={"100px"}>
        <Image  />
        <Image  />
      </HStack>
    </VStack>
  );
};
export default Licenses;
