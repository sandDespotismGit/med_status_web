import { HStack, VStack, Image, Text, Heading, Stack } from "@chakra-ui/react";
import hospital1 from "./../images/hospital1.webp";
import hospital2 from "./../images/hospital2.webp";
import hospital3 from "./../images/hospital3.webp";
import hospital4 from "./../images/hospital4.webp";
import hospital5 from "./../images/hospital5.webp";
import hospital6 from "./../images/hospital6.webp";
import useWindowDimensions from "../hooks/window_dimensions";
import { useState } from "react";
import { Element} from 'react-scroll';

const Benefits = () => {
  const [side_image, setSideImage] = useState(hospital1);
  const { width, height } = useWindowDimensions();
  return (
    <VStack width="100%" spacing="25px" height={'70vh'}>
      <Heading marginTop={"25px"} size="lg" color="#085D65">
        Наши преимущества
      </Heading>
      <Stack
        justify="space-between"
        width="100%"
        align="center"
        direction={width <= 768 ? "column" : "row"}
      >
        <VStack spacing="10px" align="flex-start">
          <HStack>
            <Text
              variant="benefits_green"
              onClick={() => setSideImage(hospital1)}
              onMouseOver={() => setSideImage(hospital1)}
            >
              Эффективное лечение
            </Text>
          </HStack>{" "}
          <HStack>
            <Text
              variant="benefits_green"
              onClick={() => setSideImage(hospital2)}
              onMouseOver={() => setSideImage(hospital2)}
            >
              Высокий уровень обслуживания
            </Text>
          </HStack>
          <HStack>
            <Text
              variant="benefits_green"
              onClick={() => setSideImage(hospital3)}
              onMouseOver={() => setSideImage(hospital3)}
            >
              Удобное расположение в центре города
            </Text>
          </HStack>
          <HStack>
            <Text
              variant="benefits_green"
              onClick={() => setSideImage(hospital4)}
              onMouseOver={() => setSideImage(hospital4)}
            >
              Современная операционная и стационар
            </Text>
          </HStack>
          <HStack>
            <Text
              variant="benefits_green"
              onClick={() => setSideImage(hospital5)}
              onMouseOver={() => setSideImage(hospital5)}
            >
              Современное оборудование от ведущих мировых производителей
            </Text>
          </HStack>
          <HStack>
            <Text
              variant="benefits_green"
              onClick={() => setSideImage(hospital6)}
              onMouseOver={() => setSideImage(hospital6)}
            >
              Высококвалфицированный медицинский персонал
            </Text>
          </HStack>
          <HStack>
            <Text
              variant="benefits_green"
              onClick={() => setSideImage(hospital1)}
              onMouseOver={() => setSideImage(hospital1)}
            >
              Отсутствие очередей и предварительная запись на приём
            </Text>
          </HStack>
        </VStack>
        <Image
          src={side_image}
          borderRadius={"31px"}
          width={width <= 768 ? "100%" : "60vw"}
          // height={width <= 768 ? "auto" : "60vh"}
          style={{
            borderRadius: "31px",
            width: "40vw",
            height: "60vh",
            objectFit: "fill",
          }}
        />
      </Stack>
      <Element id="review" className="element"/>
    </VStack>
  );
};
export default Benefits;
