import {
  Container,
  Text,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

export default function GeneralMain(props) {
  return (
    <Container
      maxW="100%"
      py="5rem"
      px={{ base: "5%", lg: "15%" }}
      align="justify"
      color={props.data.text_color}
      bg={props.data.background_color}
      backgroundImage={props.data.background_texture.url}
    >
      <Heading textAlign="center" fontSize="50" as="h2" pb="2rem">
        {props.data.title}
      </Heading>

      {props.data.text.map((item) => {
        switch (item.type) {
          case "heading2":
            return (
              <Heading key={uuidv4()} as="h2" pt="1.5rem" pb="0.5rem">
                {item.text}
              </Heading>
            );
          case "heading3":
            return (
              <Heading
                key={uuidv4()}
                as="h3"
                fontSize="22px"
                pt="1.5rem"
                pb="0.5rem"
              >
                {item.text}
              </Heading>
            );
          case "paragraph":
            return <Text key={uuidv4()}>{item.text}</Text>;
          case "list-item":
            return (
              <UnorderedList key={uuidv4()}>
                <ListItem>{item.text}</ListItem>
              </UnorderedList>
            );
          default:
            return;
        }
      })}
    </Container>
  );
}
