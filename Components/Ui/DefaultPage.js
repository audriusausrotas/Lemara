import {
  Stack,
  Text,
  Heading,
  VStack,
  Container,
  Square,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

export default function DefaultPage(props) {
  return (
    <Container
      maxW="100%"
      w="100%"
      bg={props.bg}
      backgroundImage={props.bgTexture}
    >
      <Stack
        direction={{ base: "column", xl: "row" }}
        spacing="5%"
        pt={{ base: "5%", md: props.name === "whyUs" && "8rem", xl: "6%" }}
        pb="6%"
        align="center"
        justify="center"
        color={props.color}
      >
        {props.name !== "aboutUs" && (
          <Square maxW="40rem" boxShadow="0 0 5px 1px black">
            <Image
              src={props.src}
              alt={props.alt}
              width={props.w}
              height={props.h}
            />
          </Square>
        )}
        <VStack spacing="8">
          <Heading as="h2">{props.heading}</Heading>
          <Text
            maxW="40rem"
            lineHeight={{ md: "1.8" }}
            fontSize="lg"
            align="justify"
          >
            {props.text}
          </Text>
        </VStack>
        {props.name === "aboutUs" && (
          <Square maxW="40rem" boxShadow="0 0 5px 1px black">
            <Image
              src={props.src}
              alt={props.alt}
              width={props.w}
              height={props.h}
            />
          </Square>
        )}
      </Stack>
    </Container>
  );
}
