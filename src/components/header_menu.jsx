import { HStack, Link } from "@chakra-ui/react";
const HeaderMenu = () => {
  return (
    <HStack align="center" justify="space-between" spacing={['10px', '12px', '15px', '18px', '20px']} marginTop='50px' marginBottom='30px'>
      <Link>Направления</Link>
      <Link>Врачи</Link>
      <Link>Цены</Link>
      <Link>Акции</Link>
      <Link>Для пациентов</Link>
      <Link>Не понял</Link>
      <Link>Отзывы</Link>
    </HStack>
  );
};
export default HeaderMenu;
