import Header from "../components/header";
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
const Cardiologia = () => {
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
      <Header />
      <Heading size="lg" color="#085D65">
        Кардиология
      </Heading>
      <Card borderRadius='15px'>
        <CardBody>
          <Text>
            Медицинский центр «МЕДСТАТУС» специализируемся на предоставлении
            высококачественной медицинской помощи пациентам с заболеваниями
            сердечно-сосудистой системы. Наша команда кардиологов обладает
            широким опытом в диагностике, лечении и реабилитации пациентов с
            различными заболеваниями сердца и сосудов. Врач кардиолог - это
            специалист, который специализируется на диагностике, лечении и
            профилактике заболеваний сердца и сосудов. Он проводит комплексное
            обследование пациентов с целью выявления возможных
            сердечно-сосудистых заболеваний и разрабатывает индивидуальные
            программы лечения и реабилитации.
          </Text>
        </CardBody>
      </Card>

      <Footer />
    </VStack>
  );
};
export default Cardiologia;
