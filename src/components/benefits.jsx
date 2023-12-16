import { HStack, VStack, Image, Text, Heading } from "@chakra-ui/react";
import personal_icon from "./../images/personal_icon.png";
import effective from "./../images/effective_icon.png";
import query from "./../images/query.png";
import city from "./../images/city.png";
import medics from "./../images/medics.png";
const Benefits = () => {
  return (
    <VStack width="100%" spacing="25px">
      <Heading size="lg" color="#085D65">
        Наши преимущества
      </Heading>
      <HStack width="100%" align="center" justify="space-around">
        <VStack>
          <HStack>
            <Image src={personal_icon} width="50px" height="50px" />
            <HStack
              backgroundColor="white"
              boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              borderRadius="13px"
              padding="10px"
              width="30vw"
            >
              <Text>Высококвалфицированный медицинский персонал</Text>
            </HStack>
          </HStack>
          <HStack>
            <Image src={effective} width="50px" height="50px" />
            <HStack
              backgroundColor="white"
              boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              borderRadius="13px"
              padding="10px"
              width="30vw"
            >
              <Text>Эффективное лечение</Text>
            </HStack>
          </HStack>
          <HStack>
            <Image src={query} width="50px" height="50px" />
            <HStack
              backgroundColor="white"
              boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              borderRadius="13px"
              padding="10px"
              width="30vw"
            >
              <Text>Отсутствие очередей и предварительная запись на прием</Text>
            </HStack>
          </HStack>
          <HStack>
            <Image src={city} width="50px" height="50px" />
            <HStack
              backgroundColor="white"
              boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              borderRadius="13px"
              padding="10px"
              width="30vw"
            >
              <Text>Удобное расположение в центре города</Text>
            </HStack>
          </HStack>
          <HStack>
            <Image src={city} width="50px" height="50px" />
            <HStack
              backgroundColor="white"
              boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              borderRadius="13px"
              padding="10px"
              width="30vw"
            >
              <Text>Современная операционная и стационар</Text>
            </HStack>
          </HStack>
        </VStack>
        <VStack>
          <HStack>
            <Image src={medics} width="50px" height="50px" />
            <HStack
              backgroundColor="white"
              boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              borderRadius="13px"
              padding="10px"
              width="30vw"
            >
              <Text>
                Современное оборудование от ведущих мировых производителей
              </Text>
            </HStack>
          </HStack>
          <HStack>
            <Image src={medics} width="50px" height="50px" />
            <HStack
              backgroundColor="white"
              boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              borderRadius="13px"
              padding="10px"
              width="30vw"
            >
              <Text>Постоянное обучение и развитие специалистов</Text>
            </HStack>
          </HStack>
          <HStack>
            <Image src={medics} width="50px" height="50px" />
            <HStack
              backgroundColor="white"
              boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              borderRadius="13px"
              padding="10px"
              width="30vw"
            >
              <Text>Уютная атмосфера</Text>
            </HStack>
          </HStack>
          <HStack>
            <Image src={medics} width="50px" height="50px" />
            <HStack
              backgroundColor="white"
              boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              borderRadius="13px"
              padding="10px"
              width="30vw"
            >
              <Text>Высокий уровень обслуживания</Text>
            </HStack>
          </HStack>
          <HStack>
            <Image src={medics} width="50px" height="50px" />
            <HStack
              backgroundColor="white"
              boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              borderRadius="13px"
              padding="10px"
              width="30vw"
            >
              <Text>Высокий уровень обслуживания</Text>
            </HStack>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};
export default Benefits;
