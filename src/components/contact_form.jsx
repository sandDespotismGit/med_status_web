// ContactForm.js
import React from "react";
import { Button, VStack } from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <form action="mailto:example@gmail.com" method="post" encType="text/plain">
      <VStack spacing={"15px"} align={"flex-start"} padding={"15px"}>
        <label htmlFor="firstName">Имя:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          style={{
            borderRadius: "5px",
            border: "1px solid #ccc",
            padding: "8px",
            width: "100%",
          }}
        />
        <label htmlFor="phone">Телефон:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          style={{
            borderRadius: "5px",
            border: "1px solid #ccc",
            padding: "8px",
            width: "100%",
          }}
        />
        <Button
          type="submit"
          borderRadius="30px"
          border="1px solid red"
          borderColor="red"
          color="#085D65"
          backgroundColor={"transparent"}
          fontSize={["10px", "10px", "14px", "16px", "18px"]}
        >
          Записаться
        </Button>
      </VStack>
    </form>
  );
};

export default ContactForm;
