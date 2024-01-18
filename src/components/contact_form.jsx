import React, { useState } from "react";
import emailjs from "emailjs-com";
import { VStack, Input, Text, Button, HStack, Link } from "@chakra-ui/react";

const EmailSender = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const sendEmail = async () => {
    try {
      const templateParams = {
        name,
        phone,
      };

      console.log(templateParams);
      await emailjs.send(
        "service_kq5ckb9",
        "template_m1xy9dl",
        templateParams,
        "1B5PIyf0K6pkI09Pk"
      );
    } catch (error) {}
  };

  return (
    <VStack align={"flex-start"} spacing={'10px'} marginBottom={'25px'}>
      <HStack>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Имя"
        />
        <Input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Телефон"
        />
      </HStack>
      <Text fontSize={"12px"} color={"gray"}>
        Нажимая на кнопку, я даю согласие на <Link color="blue" href="https://admin.xn--73-6kcpe5bybbhbl.xn--p1ai/uploads/Soglashenie_na_obrabotku_personalnyh_dannyh_c95444515e.docx">
          обработку персональных данных
          </Link>
      </Text>
      <Button
        borderColor={"red"}
        onClick={sendEmail}
        borderRadius={"18px"}
        background={"transparent"}
        border={"2px solid red"}
      >
        Записаться
      </Button>
    </VStack>
  );
};

export default EmailSender;
