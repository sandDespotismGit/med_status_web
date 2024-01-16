import PageHeader from "../components/page_header";
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
  HStack,
  GridItem,
  Grid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Link
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { GoDownload } from "react-icons/go";
import useWindowDimensions from "../hooks/window_dimensions";
import MapBlock from "../components/map"

const Docs = () => {
  const { width, height } = useWindowDimensions();
  const [docs, setDocs] = useState(null);
  useEffect(() => {
    fetch("https://admin.медстатус73.рф/api/doc?populate=deep")
      .then((response) => response.json())
      .then(function (commits) {
        let data = commits.data;
        let buffer = [];
        for (let elem of data) {
          buffer.push(
            elem.attributes.file.data[0].attributes ? (
              <HStack
                padding={"15px"}
                color={"#085D65"}
                borderRadius={"13px"}
                border={"1px solid gray"}
                textShadow={"0px 4px 40px rgba(0, 0, 0, 0.25)"}
                fontSize={"14px"}
                width={"100%"}
                _hover={{ borderRadius: "13px", border: "1px solid #0F939F" }}
                justify={"space-between"}
              >
                <Text>{elem.attributes.name}</Text>

                <a
                  download
                  target="_blank"
                  href={
                    "https://admin.%D0%BC%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D1%82%D1%83%D1%8173.%D1%80%D1%84" +
                    elem.attributes.file.data[0].attributes.url
                  }
                >
                  <HStack>
                    <GoDownload color="red" />
                    <Text>Скачать PDF</Text>
                  </HStack>
                </a>
              </HStack>
            ) : null
          );
        }
        setDocs(buffer);
      });
  }, []);
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
      <PageHeader />
      <Heading size="xl" color="#085D65">
        Контакты
      </Heading>
      <MapBlock />
      <Heading size="lg" color="#085D65">
        О медицинской организации
      </Heading>
      <Accordion allowMultiple w="full">
        <AccordionItem bg="white" borderRadius={"15px"}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text
                color="#085D65"
                fontSize={['md', 'lg', 'xl']}
                fontWeight="bold"
              >
                О медицинской организации
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack w="full" align="start" p={0} m={0}>
              <Text color="#085D65" fontSize={['xs', 'sm', 'md']}>
              Общество с ограниченной ответственностью ООО «МЕДСТАТУС» <br />
              ООО «МЕДСТАТУС» <br />
              432000, Ульяновская обл., г. Ульяновск, ул. Минаева, д.48А,  этаж 1, помещение 146-148
              </Text>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem bg="white">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text
                color="#085D65"
                fontSize={['md', 'lg', 'xl']}
                fontWeight="bold"
              >
                Режим и график работы
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack w="full" align="start" p={0} m={0}>
              <Text color="#085D65" fontSize={['xs', 'sm', 'md']}>
              График работы<br /><br />понедельник-пятница с 7.30 до 20.00 <br />
              суббота - воскресенье с 7.30 до 18.00 <br /> <br />
              контактные телефоны, номера телефонов справочных служб, адреса электронной почты; <br />
              +78422737878 <br />
              medstatus73@yandex.ru почта директора
              </Text>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem bg="white" borderRadius={"0px"}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text
                color="#085D65"
                fontSize={['md', 'lg', 'xl']}
                fontWeight="bold"
              >
                График приема граждан руководителем медицинской организации и иными уполномоченными лицами с указанием телефона, адреса электронной почты
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack w="full" align="start" p={0} m={0}>
              <Text color="#085D65" fontSize={['xs', 'sm', 'md']}>
              Прием директором клиники по понедельникам с 11:00 до 13:00<br />по предварительной записи по телефону +7 8422 73 78 78
              <br />medstatus73@yandex.ru - почта директора
              </Text>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem bg="white" borderRadius={"0px"}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text
                color="#085D65"
                fontSize={['md', 'lg', 'xl']}
                fontWeight="bold"
              >
                О медицинской деятельности организации
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack w="full" align="start" p={0} m={0}>
              <Text color="#085D65" fontSize={['xs', 'sm', 'md']}>
              Регистрационный номер лицензии: Л041-01188-73/01011638 <br/>
              Дата предоставление лицензии: 29.12.2023<br/><br/>
              Выполняемые работы, оказываемые услуги:<br/>
              Приказ 866н;<br/>
              При оказании первичной медико-санитарной помощи организуются и выполняются
              следующие работы (услуги):<br/>
              при оказании первичной доврачебной медико-санитарной помощи в амбулаторных условиях по:<br/>
              - акушерскому делу;<br/>
              - анестезиологии и реаниматологии;<br/>
              - сестринскому делу;<br/>
              - функциональной диагностике;<br/>
              при оказании первичной врачебной медико-санитарной помощи в условиях дневного стационара по:<br/>
              организации здравоохранения и общественному здоровью, эпидемиологии;<br/>
              при оказании первичной специализированной медико-санитарной помощи в
              амбулаторных условиях по:<br/>
              - акушерству и гинекологии (за исключением использования вспомогательных
              репродуктивных технологий и искусственного прерывания беременности);<br/>
              - акушерству и гинекологии (искусственному прерыванию беременности);<br/>
              - анестезиологии и реаниматологии;<br/>
              - кардиологии;<br/>
              - неврологии;<br/>
              - организации здравоохранения и общественному здоровью, эпидемиологии;<br/>
              - оториноларингологии (за исключением кохлеарной имплантации);<br/>
              - ультразвуковой диагностике;<br/>
              - урологии;<br/>
              - функциональной диагностике;<br/>
              - эндокринологии;<br/>
              при оказании первичной специализированной медико-санитарной помощи в условиях<br/>
              дневного стационара по:<br/>
              - акушерству и гинекологии (за исключением использования вспомогательных репродуктивных технологий и искусственного прерывания беременности);<br/>
              - акушерству и гинекологии (искусственному прерыванию беременности);<br/>
              - анестезиологии и реаниматологии;<br/>
              - организации здравоохранения и общественному здоровью, эпидемиологии;<br/>
              - урологии;<br/>
              При проведении медицинских экспертиз организуются и выполняются следующие<br/>
              работы (услуги) по:<br/>
              - экспертизе временной нетрудоспособности.
              </Text>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem bg="white" borderRadius={"15px"}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text
                color="#085D65"
                fontSize={['md', 'lg', 'xl']}
                fontWeight="bold"
              >
                График работы и часы приема медицинского работника
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack w="full" align="start" p={0} m={0}>
              <Text color="#085D65" fontSize={['xs', 'sm', 'md']}>
              График работы: <br />
              понедельник-пятница с 7.30 до 20.00 <br />
              суббота - воскресенье с 7.30 до 18.00
              </Text>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Heading size="lg" color="#085D65">
        Контролирующие органы
      </Heading>
      <Grid
      templateColumns={width <= 832 ? " repeat(1, 2fr)" : " repeat(3, 2fr)"}
      gap={["35px", "42px", "44px", "45px", "60px"]}
      marginTop="30px"
      padding={['10px', '10px', '0px', '0px', '0px']}
      width="100%"
    >
      <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          spacing="15px"
          align="stretch"
          padding="25px"
          position={"relative"}
          height={"100%"}
        > 
          <Text color="#085D65" fontWeight={"bold"}>
            Управление Роспотребнадзора по Ульяновской области <br /></Text>
            <Text color="#085D65">+7 (8422) 44-29-41 <br />
            <Link href="http://73.rospotrebnadzor.ru">73.rospotrebnadzor.ru</Link>
            
          </Text>
        </VStack>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          spacing="15px"
          align="stretch"
          padding="25px"
          position={"relative"}
          height={"100%"}
        > 
          <Text color="#085D65" fontWeight={"bold"}>
          ТЕРРИТОРИАЛЬНЫЙ ОРГАН РОСЗДРАВНАДЗОРА ПО УЛЬЯНОВСКОЙ ОБЛАСТИ <br /></Text>
          <Text color="#085D65">+7 (8422) 27-89-56 <br />
            <Link href="https://roszdravnadzor.gov.ru">roszdravnadzor.gov.ru</Link>
            
          </Text>
        </VStack>
        <VStack
          borderRadius="16px"
          border="0px solid #000"
          background="#FFF"
          spacing="15px"
          align="stretch"
          padding="25px"
          position={"relative"}
          height={"100%"}
        > 
          <Text color="#085D65" fontWeight={"bold"}>
          Министерство здравоохранения Ульяновской области <br /></Text>
          <Text color="#085D65">+7 (8422) 42-08-69 <br />
          +7 (8422) 42-08-69 <br />
          
            <Link href="http://med.ulgov.ru">med.ulgov.ru</Link>
          </Text>
          
        </VStack>
      </Grid>
      <Heading size="lg" color="#085D65">
        Нормативные документы
      </Heading>
      <Card borderRadius="15px" width={"100%"}>
        <CardBody>
          <VStack spacing={"15px"} fontWeight="bold">{docs}</VStack>
        </CardBody>
      </Card>

      <Footer />
    </VStack>
  );
};
export default Docs;
