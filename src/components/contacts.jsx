import {
  HStack,
  Vstack,
  Heading,
  Text,
  Image,
  VStack,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import clinics from "./../images/clinics.jpg";

const Contacts = () => {
  return (
    <VStack
      align="center"
      backgroundImage={clinics}
      backgroundSize="contain"
      width="100%"
      height="40vh"
      justify="center"
      color="white"
      spacing='20px'
      padding='50px'
      marginBottom={0}
    >
      <VStack width='40%' align='center' textAlign='center'>
        <Heading size="sm">Запишитесь на прием</Heading>
        <Text>
          Оставьте свои контактные данные и наш менеджер свяжется с вами в
          течение пяти минут
        </Text>
      </VStack>

      <FormControl>
        <HStack spacing="20px" justify="center">
          <Input type="text" background="white" width="15%" placeholder="email"></Input>
          <Input type="text" background="white" width="15%" placeholder="+7 962-630-23-03"></Input>
          <Button
            borderRadius="30px"
            backgroundColor="#138b96"
            color="white"
            width="15%"
          >
            Записаться
          </Button>
        </HStack>
      </FormControl>
    </VStack>
  );
};
export default Contacts;
