import { Heading, SimpleGrid, Container } from "@chakra-ui/react";
import Card from "../Capabilities/Card";

export default function CapabilitiesMain(props) {
  return (
    <Container
      flex={1}
      px="0"
      maxW="100%"
      centerContent
      boxShadow="-0 -20px 20px -10px grey"
      bg={props.data.background_color}
      color={props.data.text_color}
      backgroundImage={props.data.background_texture.url}
    >
      <Container centerContent maxW="100%" py="1rem">
        <Heading color={props.data.title_color} as="h3" pt="3rem">
          {props.data.title_turning}
        </Heading>
      </Container>
      <SimpleGrid
        columns={{ base: 1, lg: 2, "2xl": 3 }}
        spacing="3rem"
        mt="3rem"
        pb="5rem"
      >
        {props.data.slices.map(
          (item) =>
            item.primary.type === "turning" && (
              <Card data={item} key={item.id} />
            )
        )}
      </SimpleGrid>
      <Container centerContent maxW="100%" borderTop="5px solid grey" py="1rem">
        <Heading color={props.data.title_color} pt="1rem">
          {props.data.title_milling}
        </Heading>
      </Container>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing="3rem"
        pt="3rem"
        pb="5rem"
      >
        {props.data.slices.map(
          (item) =>
            item.primary.type === "milling" && (
              <Card data={item} key={item.id} />
            )
        )}
      </SimpleGrid>
    </Container>
  );
}
