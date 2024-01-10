import PageHeader from "../components/page_header";
import PageFooter from "../components/pagefooter";
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
      paddingLeft={["10px", "15px", "30px", "45px", "225px"]}
      paddingRight={["10px", "15px", "30px", "45px", "225px"]}
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

      <PageFooter />
    </VStack>
  );
};
export default Cardiologia;
