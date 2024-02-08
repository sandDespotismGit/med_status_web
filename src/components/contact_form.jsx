import React, { useState } from "react";
import emailjs from "emailjs-com";
import { VStack, Input, Text, Button, HStack } from "@chakra-ui/react";

const EmailSender = ({setIsModalOpen}) => {
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
        "",
        "",
        templateParams,
        ""
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
        Нажимая на кнопку, я даю согласие на обработку персональных данных
      </Text>
      <Button
        borderColor={"red"}
        onClick={() => {sendEmail(); setIsModalOpen()}}
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
