import { Heading, HStack, Text, Container, Box } from "@chakra-ui/react";
import Image from "../Ui/Images";

export default function Card(props) {
  return (
    <Container centerContent maxW="lg">
      <Image
        src={props.data.primary.image.url}
        alt={props.data.primary.image.alt}
        boxShadow="0 0 5px 1px black"
        width={480}
        height={377}
      />
      <Container centerContent>
        <Heading py="1rem" fontSize="28px">
          {props.data.primary.name}
        </Heading>
        <HStack fontSize="lg">
          <Box>
            {props.data.items.map((item, index) => {
              return (
                <HStack
                  key={index}
                  py="5px"
                  spacing="7rem"
                  justify="space-between"
                >
                  <Text>{item.text}</Text>
                  <Text>{item.value}</Text>
                </HStack>
              );
            })}
          </Box>
        </HStack>
      </Container>
    </Container>
  );
}
