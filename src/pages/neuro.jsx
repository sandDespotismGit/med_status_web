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
const Neuro = () => {
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
      Неврология
      </Heading>
      <Card borderRadius='15px'>
        <CardBody>
          <Text>
        Отделение неврологии в нашем медицинском центре «Медстатус» в Ульяновске специализируется на диагностике, лечении и реабилитации пациентов с различными заболеваниями нервной системы. Невролог может помочь в случае болезней и состояний, таких как:
        <br></br><br></br>
        1. Мигрень и другие виды головной боли.
        <br></br>2. Эпилепсия и другие пароксизмальные состояния.
        <br></br>3. Ишемический и геморрагический инсульт.
        <br></br>4. Паркинсонизм и другие двигательные нарушения.
        <br></br>5. Деменция и другие когнитивные расстройства.
        <br></br>6. Периферические невропатии и радикулопатии.
        <br></br>7. Мышечные заболевания, такие как миастения гравис.
        <br></br>8. Неврологические проявления системных заболеваний, таких как ревматоидный артрит или сахарный диабет.
        <br></br><br></br>
        Пациентам следует обратиться к неврологу при следующих симптомах:
        <br></br><br></br>
        <br></br>1. Острый головной боли, особенно если он сопровождается рвотой, расстройством зрения, изменением в психическом состоянии или судорогами.
        <br></br>2. Онемение, покалывание или слабость в какой-либо части тела.
        <br></br>3. Потеря сознания или нарушение координации.
        <br></br>4. Изменения в памяти, мышлении или поведении.
        <br></br>5. Неожиданные изменения в мышечном тонусе или движениях.
        <br></br>6. Сильные или усиливающиеся боли в шее, спине или других частях тела.
        <br></br>7. Постоянная усталость, сонливость или бессонница без очевидной причины.
        <br></br><br></br>
        В случае возникновения указанных симптомов рекомендуется срочно обратиться к неврологу  для проведения диагностики и назначения необходимого лечения.
          </Text>
        </CardBody>
      </Card>

      <Footer />
    </VStack>
  );
};
export default Neuro;