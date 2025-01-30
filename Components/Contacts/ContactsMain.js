import { Container } from "@chakra-ui/react";
import Maps from "./Maps";
import React from "react";
import ContactsTop from "./ContactsTop";
import ContactsMid from "./ContactsMid";

export default function ContactsMain(props) {
  return (
    <Container maxW="100%" px="0" overflow="hidden" flex={1}>
      {/* <ContactsTop data={props.data} /> */}
      <ContactsMid data={props.data} locale={props.locale} />
      <Maps />
    </Container>
  );
}
