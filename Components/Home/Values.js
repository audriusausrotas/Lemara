import { Heading, Text, SimpleGrid, Container, Image } from "@chakra-ui/react";

export default function Values(props) {
  return (
    <SimpleGrid
      columns={{ base: 0, md: 2, xl: 4 }}
      spacing={{ md: "3rem", xl: "5rem" }}
      rowGap={{ md: "13rem" }}
    >
      {props.data.slices[0].items.map((item) => {
        return (
          <Container
            maxW="17rem"
            maxH="18rem"
            key={item.title}
            align="center"
            bg={props.data.values_background_color}
            color={props.data.values_text_color}
            backgroundImage={props.data.values_background_texture.url}
            borderRadius="xl"
            p="2rem"
            boxShadow=" 0px 4px 10px -2px  grey"
            mt={{ md: "-10rem", xl: "-20rem" }}
          >
            <Image src={item.image.url} alt={item.image.alt} />

            <Heading as="h6" size="lg" pt="2rem" pb="1rem">
              {item.title}
            </Heading>
            <Text fontSize="lg">{item.text}</Text>
          </Container>
        );
      })}
    </SimpleGrid>
  );
}
