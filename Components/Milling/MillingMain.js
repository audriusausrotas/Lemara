import Texts from "../Texts/Texts";
import Card from "../Capabilities/Card";
import {
  Box,
  VStack,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

export default function MillingMain() {
  const texts = Texts();
  return (
    <VStack overflow="hidden">
      <Box
        w={["90%", "90%", "80%", "80%", "80%", "70%"]}
        h={["70rem", "70rem", "65rem", "65rem", "45rem"]}
        align="center"
        py="7rem"
      >
        <Stack
          justify="center"
          spacing="5%"
          align="center"
          direction={{ base: "column", xl: "row" }}
        >
          <Image
            src="/images/turning/t5.jpg"
            maxW="40rem"
            maxH="25rem"
            boxShadow="0 0 5px 1px "
          />
          <Box>
            <Heading pb="1rem">CNC frezavimas</Heading>
            <Text fontSize="lg" align="justify">
              {texts.turning.t1.text}
            </Text>
          </Box>
        </Stack>
      </Box>
      <VStack
        bg="#08254F"
        backgroundImage="/images/aboutBg.png"
        w="100%"
        color="white"
        boxShadow="-0 -20px 20px -10px grey"
        zIndex={0}
      >
        <Heading pt="5rem" fontSize="45px">
          Techninės galimybės
        </Heading>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="2rem" py="5rem">
          {texts.capabilities.mashines.map(
            (item) =>
              item.type === "milling" && <Card data={item} key={item.name} />
          )}
        </SimpleGrid>
      </VStack>
    </VStack>
  );
}