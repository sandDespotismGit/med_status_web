import { HStack, Heading, VStack, Text, Image, Button } from "@chakra-ui/react";
import telegina from "./../images/telegina.png";
import minabetdinov from "./../images/minnabetdinov.png";

const OurDocs = () => {
  return (
    <HStack
      justify="center"
      align="center"
      textAlign="left"
      spacing="20px"
      width="100%"
    >
      <VStack
        backgroundColor="white"
        borderRadius="23px"
        boxShadow="0px 7px 4px 3px rgba(0, 0, 0, 0.25);"
        padding="25px"
        textAlign="left"
        align="flex-start"
        width="20%"
        justify="space-between"
        height="65vh"
      >
        <Image src={telegina} />
        <Text fontWeight={700}>Телегина Алена Витальевна</Text>
        <Text color="#89CECA">Гинеколог, акушер, репродуктолог</Text>
        <HStack width="100%" justify="space-between">
          <Text fontSize="14px">Стаж: 12 лет</Text>
          <Text fontSize="14px">Приём: от 1000 руб</Text>
        </HStack>
        <Button backgroundColor="#89CECA" borderRadius="17px" color="white">
          Подробнее
        </Button>
      </VStack>
      <VStack
        backgroundColor="white"
        borderRadius="23px"
        boxShadow="0px 7px 4px 3px rgba(0, 0, 0, 0.25);"
        padding="25px"
        textAlign="left"
        align="flex-start"
        width="20%"
        justify="space-between"
        height="65vh"
      >
        <Image src={minabetdinov} />
        <Text fontWeight={700}>Миннабединов Ильдар Расихович</Text>
        <Text color="#89CECA">Уролог, андролог, врач 1 категории</Text>
        <HStack width="100%" justify="space-between">
          <Text fontSize="14px">Стаж: 10 лет</Text>
          <Text fontSize="14px">Приём: от 1000 руб</Text>
        </HStack>
        <Button backgroundColor="#89CECA" borderRadius="17px" color="white">
          Подробнее
        </Button>
      </VStack>
      <VStack
        backgroundColor="white"
        borderRadius="23px"
        boxShadow="0px 7px 4px 3px rgba(0, 0, 0, 0.25);"
        padding="25px"
        textAlign="left"
        align="flex-start"
        width="20%"
        justify="space-between"
        height="65vh"
      >
        <Image src={telegina} />
        <Text fontWeight={700}>Юнусова Эльвира Рамилевна</Text>
        <Text color="#89CECA">терапевт, невролог</Text>
        <HStack width="100%" justify="space-between">
          <Text fontSize="14px"></Text>
          <Text fontSize="14px">Приём: от 1000 руб</Text>
        </HStack>
        <Button backgroundColor="#89CECA" borderRadius="17px" color="white">
          Подробнее
        </Button>
      </VStack>
      <VStack
        backgroundColor="white"
        borderRadius="23px"
        boxShadow="0px 7px 4px 3px rgba(0, 0, 0, 0.25);"
        padding="25px"
        textAlign="left"
        align="flex-start"
        width="20%"
        justify="space-between"
        height="65vh"
      >
        <Image src={telegina} />
        <Text fontWeight={700}>Степанова Людмила Александровна</Text>
        <Text color="#89CECA">Гинеколог</Text>
        <HStack width="100%" justify="space-between">
          <Text fontSize="14px"></Text>
          <Text fontSize="14px">Приём: от 1000 руб</Text>
        </HStack>
        <Button backgroundColor="#89CECA" borderRadius="17px" color="white">
          Подробнее
        </Button>
      </VStack>
    </HStack>
  );
};
export default OurDocs;
