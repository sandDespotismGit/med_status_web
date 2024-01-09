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
const IV = () => {
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
        IV-терапия 
      </Heading>
      <Card borderRadius='15px'>
        <CardBody>
          <Text>
          IV-терапия (внутривенная терапия) - это передовой метод медицинского вмешательства, позволяющий доставлять питательные вещества, витамины, минералы и лекарственные препараты непосредственно в организм через вену. В нашем медицинском центре «МЕДСТАТУС» мы специализируемся на IV-терапии как средстве для усиления организма, укрепления иммунной системы, а также для лечения различных состояний и заболеваний.
<br></br><br></br>
Мы предлагаем широкий спектр IV-терапии, включая восстановительные коктейли, детоксикацию, поддержание здоровья и красоты, а также лечебные IV-терапии для различных медицинских состояний. Наши врачи специализируются на индивидуальном подходе к каждому пациенту, разрабатывая персонализированные программы IV-терапии в соответствии с их медицинскими потребностями.
<br></br>Мы стремимся обеспечить максимальный комфорт и безопасность для наших пациентов при проведении IV-терапии. Наши высококвалифицированные специалисты осуществляют тщательный мониторинг процедуры, гарантируя правильное введение препаратов и оптимальную реакцию организма. Мы также уделяем особое внимание выбору инфузионных растворов, гарантируя их качество и эффективность.
<br></br><br></br>
Если вы заинтересованы в IV-терапии для поддержания здоровья, восстановления после тяжелых нагрузок, укрепления иммунитета или лечения конкретных заболеваний, обратитесь в наш медицинский центр для консультации с нашими специалистами. Мы готовы помочь вам почувствовать себя лучше.

          </Text>
        </CardBody>
      </Card>

      <PageFooter />
    </VStack>
  );
};
export default IV;