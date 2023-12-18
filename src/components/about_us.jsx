import { HStack, VStack, Image, Text, Heading } from "@chakra-ui/react";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import clinics from "./../images/clicnics.png";

const AboutUs = () => {
  return (
    <VStack width="80%" spacing="25px">
      <Heading size="lg" color="#085D65">
        О клинике
      </Heading>
      <HStack width="100%" justify="space-between">
        <Image src={clinics} />
        <Text width="100%">
          Медицинский центр «Венздрав» — современный медицинский центр,
          оснащенный передовым медицинским оборудованием экспертного класса.
          <br />
          Каждому пациенту медицинского центра «Венздрав» оказывается
          высококвалифицированная медицинская помощь лучшими врачами Ульяновской
          области.
          <br /> Наша цель — оказание качественной и эффективной медицинской
          помощи каждому пациенту. В клинике нет очередей, давки и недовольных
          лиц.
          <br /> Всё сделано для комфортного и эффективного оказания медицинской
          помощи. В стенах МЦ «Венздрав» вы будете чувствовать уют и тепло, как
          дома.
        </Text>
      </HStack>
    </VStack>
  );
};
export default AboutUs;
