import { VStack, Stack, Button } from "@chakra-ui/react";
import React from "react";
import InputField from "../Components/InputField";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import HCaptcha from "react-hcaptcha";

export default function Form(props) {
  const hcaptchaRef = React.createRef();
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const form = {
    name: name,
    email: email,
    number: number,
    message: message,
  };

  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleNumber(e) {
    setNumber(e.target.value);
  }
  function handleMessage(e) {
    setMessage(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    hcaptchaRef.current.execute();
  }

  async function onHCaptchaChange(captchaCode) {
    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch("/api/captcha", {
        method: "POST",
        body: JSON.stringify({
          captcha: captchaCode,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        props.sendMessage(form);
        toast({
          title: props.data.message_send,
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          title: props.data.message_error,
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      toast({
        title: "Error 😮",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
      setEmail("");
      setName("");
      setNumber("");
      setMessage("");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing="3rem"
        bg={props.data.form_background_color}
        color={props.data.form_text_color}
        rounded="6px"
        p="2rem"
        shadow="0 0 10px black"
      >
        <VStack>
          <InputField
            name={props.data.form_name}
            type="text"
            onChange={handleName}
            value={name}
            icon={<BsPerson color={props.data.form_icon_color} />}
          />
          <InputField
            name={props.data.form_email}
            type="email"
            onChange={handleEmail}
            value={email}
            icon={<MdOutlineEmail color={props.data.form_icon_color} />}
          />
          <InputField
            name={props.data.form_phone}
            type="number"
            onChange={handleNumber}
            value={number}
            icon={<MdOutlinePhone color={props.data.form_icon_color} />}
          />
        </VStack>
        <VStack>
          <InputField
            type="area"
            name={props.data.form_message}
            value={message}
            onChange={handleMessage}
          />
          <Button
            isLoading={loading}
            type="submit"
            w="100%"
            bg={props.data.form_button_background_color}
            color={props.data.form_button_text_color}
            _hover={{
              color: props.data.form_button_hover_text_color,
              bg: props.data.form_button_hover_background_color,
            }}
          >
            {props.data.form_button_text}
          </Button>
        </VStack>
      </Stack>
      <HCaptcha
        id="test"
        ref={hcaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY}
        onVerify={onHCaptchaChange}
      />
    </form>
  );
}
