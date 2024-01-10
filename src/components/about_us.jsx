import { HStack, VStack, Image, Text, Heading, Stack } from "@chakra-ui/react";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import clinics from "./../images/clicnics.png";
import useWindowDimensions from "../hooks/window_dimensions";

const AboutUs = () => {
  const { width, height } = useWindowDimensions();
  return (
    <VStack width="95%" spacing="25px">
      <Heading size="lg" color="#085D65">
        О клинике
      </Heading>
      <Stack
        width="100%"
        justify="space-between"
        direction={width >= 820 ? "row" : "column"}
        spacing={"20px"}
        color={"#085D65"}
      >
        <Image src={clinics} width={width >= 820 ? "40vw" : "100%"} />
        <Text>
          Медицинский центр «Венздрав» — современный медицинский центр,
          оснащенный передовым медицинским оборудованием экспертного класса.
          <br /> <br />
          Каждому пациенту медицинского центра «Венздрав» оказывается
          высококвалифицированная медицинская помощь лучшими врачами Ульяновской
          области.
          <br /> <br />
          Наша цель — оказание качественной и эффективной медицинской помощи
          каждому пациенту. В клинике нет очередей, давки и недовольных лиц.
          <br /> <br />
          Всё сделано для комфортного и эффективного оказания медицинской
          помощи. В стенах МЦ «Венздрав» вы будете чувствовать уют и тепло, как
          дома.
        </Text>
      </Stack>
    </VStack>
  );
};
export default AboutUs;
