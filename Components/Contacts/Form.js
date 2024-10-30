import { VStack, Stack, Button, FormControl, FormLabel, Flex } from "@chakra-ui/react";

import React from "react";
import InputField from "../Components/InputField";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Form(props) {
  const hcaptchaRef = React.createRef();
  const toast = useToast();

  const [name, setName] = useState("");
  const [files, setFiles] = useState([]);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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
  function handleFileChange(e) {
    setFiles(Array.from(e.target.files));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    hcaptchaRef.current.execute();
  }

  const getLocalizedText = () => {
    const locale = props.locale || "lt";
    const texts = {
      "en-gb": "Attach files",
      lt: "Prisegti failus",
      no: "Legg ved filer",
    };

    return texts[locale];
  };

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
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("number", number);
        formData.append("message", message);

        let totalSize = 0;
        if (files.length > 0) {
          files.forEach((f) => {
            totalSize += f.size;
            formData.append("attachment", f);
          });
        }

        if (totalSize > 25 * 1024 * 1024) {
          toast({
            title: "Failų dydis didesnis nei 25 MB",
            status: "error",
            position: "top",
            duration: 2000,
            isClosable: true,
          });
          setLoading(false);
          return;
        }

        const response = await fetch("/api/sendMail", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          toast({
            title: props.data.message_send,
            status: "success",
            position: "top",
            duration: 2000,
            isClosable: true,
          });
        } else {
          throw new Error("Klaida siunčiant užklausą");
        }
      }
    } catch (error) {
      toast({
        title: "Klaida 😮",
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
      setFiles([]);
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
        <Flex direction={"column"} gap={"4px"}>
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
          <FormControl>
            <FormLabel
              htmlFor="file-upload"
              w={"100%"}
              textAlign={"center"}
              cursor={"pointer"}
              rounded="md"
              p={"8px"}
              mt={"8px"}
              bg={"#f8f8f8"}
              border={"1px solid #000"}
              _hover={{
                color: props.data.form_button_hover_text_color,
                bg: props.data.form_button_background_color,
              }}
            >
              {files.length > 0 ? files.map((file) => file.name).join(", ") : getLocalizedText()}
            </FormLabel>
            <input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              multiple
              style={{ display: "none" }}
            />
          </FormControl>
        </Flex>
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
