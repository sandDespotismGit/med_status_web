import { HStack, VStack, Image, Text, Heading } from "@chakra-ui/react";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import clinics from "./../images/clicnics.png";
import { Element} from 'react-scroll';

const AboutUs = () => {
  return (
    <VStack width="100%" spacing="25px">
      <Heading size="lg" color="#085D65">
        О клинике
      </Heading>
      <HStack width="100%" justify="space-between">
        <Image src={clinics} />
        <Text width="50%" color="#085D65">
        Многопрофильный медицинский центр «МЕДСТАТУС» в самом сердце Ульяновска – это качественная помощь и удобство для каждого пациента.
        <br></br><br></br>
        Медицинский центр «МЕДСТАТУС»  в Ульяновске предлагает широкий спектр медицинских услуг, обеспечивая жителей города высококлассным и комплексным медицинским обслуживанием. Наш медицинский центр представляет собой современное учреждение, объединяющее в себе такие направления, как гинекология, урология, терапия, неврология, кардиология и эндокринология и другие.
        <br></br><br></br>
        Мы специализируемся на оказании качественной медицинской помощи, предоставляя доступ к высокотехнологичным методам диагностики и лечения. В нашем центре работают профессиональные врачи с богатым опытом и высокой квалификацией.
        <br></br><br></br>
        Многопрофильный медицинский центр «МЕДСТАТУС» также предлагает широкий спектр дополнительных услуг, включая УЗИ и анализы, обеспечивая полную и комплексную медицинскую поддержку. Наш центр оснащен современным оборудованием, что позволяет проводить точные диагностику и эффективное лечение различных заболеваний.
        </Text>
      </HStack>
    </VStack>
  );
};
export default AboutUs;
