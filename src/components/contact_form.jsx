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

      await emailjs.send(
        "service_id",
        "template_id",
        templateParams,
        "public_user_key"
      );

      alert("Email sent successfully!");
    } catch (error) {
      alert("Error sending email:", error);
    }
  };

  return (
    <VStack spacing={"15px"} padding={"10px"} align={"flex-start"}>
      <label>
        Имя:
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Телефон:
        <Input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <br />
      <Button onClick={sendEmail}>Отправить</Button>
    </VStack>
  );
};

export default EmailSender;
