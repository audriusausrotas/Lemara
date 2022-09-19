import { Heading, VStack } from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import ContactListElement from "./ContactListElement";

export default function ContactsList(props) {
  return (
    <VStack spacing="1rem" align="left" w="15rem">
      <Heading fontSize="5xl" pb="1rem">
        {props.data.contact_title}
      </Heading>
      <ContactListElement
        iconColor={props.data.icon_color}
        hoverColor={props.data.link_hover_color}
        icon={MdPhone}
        href={props.data.contact_phone_number_link}
        text={props.data.contact_phone_number}
      />
      <ContactListElement
        iconColor={props.data.icon_color}
        hoverColor={props.data.link_hover_color}
        icon={MdEmail}
        text={props.data.contact_email}
        href={props.data.contact_email_link}
      />
      <ContactListElement
        iconColor={props.data.icon_color}
        hoverColor={props.data.link_hover_color}
        icon={MdLocationOn}
        href=""
        text={props.data.contact_adress}
      />
    </VStack>
  );
}
