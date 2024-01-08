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
const Chirurg = () => {
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
      <Header />
      <Heading size="lg" color="#085D65">
        Хирургия
      </Heading>
      <Card borderRadius='15px'>
        <CardBody>
          <Text>
          Хирургия – это направление медицины, которое занимается оперативным лечением различных заболеваний и травм, требующих хирургического вмешательства. Врачи-хирурги нашего медицинского центра «МЕДСТАТУС» обладают высочайшим профессионализмом, опытом и техническими навыками, необходимыми для успешного проведения хирургических операций.
<br></br><br></br>
Наша хирургическая служба предоставляет широкий спектр медицинских услуг: общая хирургия, гинекологическая и урологическая хирургия. Мы специализируемся на выполнении как стандартных, так и сложных оперативных вмешательств, предоставляя высококачественную медицинскую помощь.
При обращении к нам вы можете быть уверены в профессиональном подходе к каждому пациенту. Мы уделяем особое внимание предоперационной подготовке, проведению безопасных операций и последующему послеоперационному уходу. Наши врачи-хирурги обладают огромным опытом и работают с использованием передовых методик и оборудования.
<br></br><br></br>
Если вам необходимо хирургическое вмешательство по любым причинам, обратитесь в наш медицинский центр, где вас ждет высококвалифицированная помощь. Наша цель – обеспечить безопасное и эффективное лечение для каждого пациента."

          </Text>
        </CardBody>
      </Card>

      <Footer />
    </VStack>
  );
};
export default Chirurg;
