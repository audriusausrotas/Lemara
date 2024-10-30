import { Heading, Stack, Container } from "@chakra-ui/react";
import Form from "./Form";
import ContactsList from "./ContactsList";

export default function ContactsMid(props) {
  return (
    <Container
      maxW="100%"
      py="8rem"
      align="center"
      centerContent
      bg={props.data.background_color_bot}
      backgroundImage={props.data.background_texture_bot.url}
      color={props.data.text_color_bot}
      boxShadow="0 0 20px 10px grey"
    >
      <Heading as="h3" pb="5rem" fontSize="6xl">
        {props.data.title}
      </Heading>
      <Stack direction={{ base: "column", xl: "row" }} spacing="5rem" align="center">
        <ContactsList data={props.data} />
        <Form data={props.data} locale={props.locale} />
      </Stack>
    </Container>
  );
}
