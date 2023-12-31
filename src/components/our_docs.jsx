import { HStack, Heading, VStack, Text, Image, Button } from "@chakra-ui/react";
import telegina from "./../images/telegina.png";
import minabetdinov from "./../images/minnabetdinov.png";
import white from './../images/white.jpg'
import Carousel from "nuka-carousel";
import { useState } from "react";
import { useEffect } from "react";
import { Element} from 'react-scroll';
const OurDocs = () => {
  const [carousel, setCarousel] = useState(null);
  const [slides, setSlides] = useState(null);
  useEffect(() => {
    fetch("https://admin.xn--73-6kcpe5bybbhbl.xn--p1ai/api/doctors?populate=deep")
      .then((response) => response.json())
      .then(function (commits) {
        let data = commits.data;
        let buffer = [];
        for (let elem of data) {
          buffer.push(
            <VStack
              backgroundColor="white"
              borderRadius="23px"
              boxShadow="0px 7px 15px 0px rgba(0, 0, 0, 0.25)"
              padding="15px"
              textAlign="left"
              align="flex-start"
              maxWidth={"350px"}
              justify="space-between"
              height="65vh"

            >
              <img
                src={
                  elem.attributes.photo.data != null
                    ? "https://admin.xn--73-6kcpe5bybbhbl.xn--p1ai/" +
                    elem.attributes.photo.data.attributes.url
                    : null
                }
                style={{ height: "350px", objectFit:'contain', 'pointer-events': 'none'}}
              />
              <Text fontWeight={700}>{elem.attributes.name}</Text>
              <Text color="#428480">{elem.attributes.profession}</Text>
              <HStack width="100%" justify="space-between">
                <Text fontSize="14px">{elem.attributes.experience}</Text>
                <Text fontSize="14px">
                  Приём: от {elem.attributes.price_by} руб
                </Text>
              </HStack>
              <a href={elem.attributes.prodoctorov}>
                <Button
                  backgroundColor="#89CECA"
                  borderRadius="17px"
                  color="white"
                >
                  Подробнее
                </Button>
              </a>
            </VStack>
          );
        }
        setCarousel(buffer);
      });
  }, []);
  return (
    <HStack justify="center" align="center" textAlign="left" padding="25px">
      <Carousel slidesToShow={4} withoutControls={true} cellSpacing={20} style={{ paddingBottom: '20px' }}>
        {carousel}
        {/* <VStack
          backgroundColor="white"
          borderRadius="23px"
          boxShadow="0px 7px 4px 3px rgba(0, 0, 0, 0.25);"
          padding="25px"
          textAlign="left"
          align="flex-start"
          width="14vw"
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
        </VStack> */}
        {/* <VStack
          backgroundColor="white"
          borderRadius="23px"
          boxShadow="0px 7px 4px 3px rgba(0, 0, 0, 0.25);"
          padding="25px"
          textAlign="left"
          align="flex-start"
          width="14vw"
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
          width="14vw"
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
          width="14vw"
          justify="space-between"
          height="65vh"
        >
          <Image src={telegina} />
          <Text fontWeight={700}>Степанова Людмила Александровна</Text>
          <Text color="#89CECA">Гинекологг</Text>
          <HStack width="100%" justify="space-between">
            <Text fontSize="14px"></Text>
            <Text fontSize="14px">Приём: от 1000 руб</Text>
          </HStack>
          <Button backgroundColor="#89CECA" borderRadius="17px" color="white">
            Подробнее
          </Button>
        </VStack> */}
      </Carousel>
      <Element id="about_us" className="element" />
    </HStack>
  );
};
export default OurDocs;
