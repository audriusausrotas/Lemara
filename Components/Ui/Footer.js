import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import Colors from "./Colors";
import Texts from "../Language/Texts";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const texts = Texts();
  const colors = Colors();
  return (
    <Box bg={colors.footerBg} color={colors.footerLinkColor}>
      <Container as={Stack} maxW={"8xl"} py={10} align="center">
        <SimpleGrid
          templateColumns={{ sm: "1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={{ md: 3, lg: 10, xl: 32 }}
        >
          <Stack spacing={6} align="center">
            <Box>
              <Image src="/images/logo.png" width="100px" />
            </Box>
            <Text fontSize={"sm"}>UAB LEMARA © 2022 Visos teisės saugomos</Text>
          </Stack>
          <Stack align={"flex-start"} mt={{ sm: 10, md: 0 }}>
            <ListHeader>MB „Lemara“</ListHeader>
            <Link>Įmonės kodas: 304374938</Link>
            <Link>PVM mokėtojo kodas: LT100010561112</Link>
          </Stack>
          <Stack align={"flex-start"} mt={{ sm: 10, md: 0 }}>
            <ListHeader>{texts.footer.contacts}</ListHeader>
            <Link>Pasagų g. 4, Riešės k., LT-14265 Vilniaus r.</Link>
            <Link _hover={{ color: "orange" }}>info@lemara.lt</Link>
            <Link _hover={{ color: "orange" }}>+370 646 57845</Link>
          </Stack>
          <Stack align={"flex-start"} mt={{ sm: 10, md: 0 }}>
            <ListHeader>Paslaugos</ListHeader>
            <Link href="/services/turning" _hover={{ color: "orange" }}>
              CNC TEKINIMAS
            </Link>
            <Link href="/services/milling" _hover={{ color: "orange" }}>
              CNC FREZAVIMAS
            </Link>
            <Link href="/services/design" _hover={{ color: "orange" }}>
              PROJEKTAVIMAS
            </Link>
            <Link href="/privacy" _hover={{ color: "orange" }}>
              PRIVATUMO POLITIKA
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
