import {
  Stack,
  Text,
  Heading,
  VStack,
  Container,
  Square,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "../Ui/Images";

export default function DefaultPage(props) {
  return (
    <Container
      maxW="100%"
      bg={props.bg}
      backgroundImage={props.bgTexture}
      flex={1}
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
          <Link href="/paslaugos/bendra">
            <Square maxW="40rem" boxShadow="0 0 5px 1px black">
              <Image
                src={props.src}
                alt={props.alt}
                position="static"
                width={640}
                height={427}
              />
            </Square>
          </Link>
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
            <Image src={props.src} alt={props.alt} width={640} height={427} />
          </Square>
        )}
      </Stack>
    </Container>
  );
}
