import React, { useState } from "react";
import emailjs from "emailjs-com";
import { VStack, Input, Text, Button } from "@chakra-ui/react";

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
    } catch (error) {
    }
  };

  return (
    <VStack color={'#085D65'} spacing={"15px"} padding={"10px"} align={"flex-start"}>
      <Text color={'#085D65'}>
        Имя:
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Text>
      <br />
      <Text>
        Телефон:
        <Input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Text>
      <br />
      <Button borderColor={"red"} onClick={sendEmail}>Записаться</Button>
    </VStack>
  );
};

export default EmailSender;
