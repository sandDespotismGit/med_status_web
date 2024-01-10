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
const Ginekolog = () => {
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
        Отделение акушерства и гинекологии
      </Heading>
      <Card borderRadius='15px'>
        <CardBody>
          <Text>
          Добро пожаловать в отделение акушерства и гинекологии медицинского центра «МЕДСТАТУС» в городе Ульяновске.<br></br>
          <br></br>
          <br></br>
            Наши врачи на протяжение многих лет предоставляют экспертную помощь в сфере женского здоровья. Медицинский центр «МЕДСТАТУС» стремится обеспечить комфортную и профессиональную атмосферу для всех наших Пациенток. Мы позаботились о том, чтобы визит к гинекологу был комфортным для Вас: носочки ( чтобы не ходили по холодному полу), одноразовые юбочки для удобного осмотра, в туалете вы найдете все необходимое для интимной гигиены.
            <br></br><br></br>
            <br></br>
            Одна из наших ключевых специализаций – оперативная малоинвазивная гинекология. Медицинский центр « МЕДСТАТУС» оснащен современной операционной, оборудованной по последнему слову техники, что позволяет нам проводить широкий спектр оперативных вмешательств с использованием передовых методик и технологий. Наш опытный медицинский персонал обеспечивает высокий уровень безопасности и эффективности процедур.
            <br></br><br></br>
            Мы проводим такие оперативные вмешательства в гинекологической сфере как:
            <br></br><br></br>
            Диагностические. Такие вмешательства направлены на оценку состояния маточных труб и яичников, выявление причины бесплодия, определение причины болей, нарушения менструаций;
            <br></br>Оперативное лечение бесплодия;
            <br></br>Удаление доброкачественных образований (кисты,миомы);
            <br></br>Оперативные вмешательства при эндометриозе;
            <br></br>Вмешательства при злокачественных новообразованиях;
            <br></br>Устранение опущения и выпадения внутренних половых органов.
            <br></br><br></br>
            <br></br>Наша команда включает в себя выдающихся акушеров и гинекологов, готовых оказать медицинскую помощь в различных областях, начиная от ежегодных профилактических осмотров и заканчивая сложными хирургическими вмешательствами. Мы уделяем особое внимание индивидуальным потребностям каждой пациентки, стремясь обеспечить высочайший уровень ухода и внимания.
            <br></br>
            <br></br>Мы рады предложить нашим пациенткам высококлассную медицинскую помощь в дружественной среде, где забота о вашем здоровье стоит на первом месте. Обращайтесь к нам, и вы получите индивидуальный подход, опирающийся на передовые медицинские практики и теплое отношение к каждой пациентке.
            <br></br><br></br>
            <br></br>Мы лечим такие гинекологические заболевания в Ульяновске как: 
            <br></br>воспалительные заболевания органов малого таза;
            <br></br>нарушение менструального цикла;
            <br></br>кисты, поликистоз;
            <br></br>бесплодие; опущение матки;
            <br></br>гормональные нарушения;
            <br></br>ЗППП и др.
            <br></br>эндометриоз;
            <br></br>
            <br></br>Когда необходимо обратиться к гинекологу «МЕДСТАТУС»:
            <br></br>боли внизу живота
            <br></br>нарушение менструального цикла;
            <br></br>межменструальное кровотчение
            <br></br>жжение, покраснение,зуд,сыпь, раздражительность в области половых органов
            <br></br>появление непрятного запаха
            <br></br>нехарактерные выделения: слизистых, гнойных, кровянистых
            <br></br>жжение и рези при мочеиспусканий
            <br></br><br></br>
            <br></br>Опытный гинеколог в Ульяновске приглашает на прием жительниц  города и области. Своевременно обращайтесь к врачам.  Меицинский центр  «МЕДСТАТУС» ждет Вас.

          </Text>
        </CardBody>
      </Card>

      <Footer />
    </VStack>
  );
};
export default Ginekolog;
