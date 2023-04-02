import {
  Container,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Center,
  Spacer,
} from "@chakra-ui/react";
import Links from "./Navigation/Links";

const ListHeader = ({ children }) => {
  return (
    <Text textColor="orange" fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer(props) {
  return (
    <>
      <Container
        bg={props.data.background_color}
        color={props.data.text_color}
        backgroundImage={props.data.background_texture.url}
        as={Stack}
        maxW="100%"
        py={10}
        align="center"
        mt="0!important"
      >
        <SimpleGrid
          templateColumns={{ sm: "1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={{ md: 3, lg: 10, xl: 32 }}
        >
          <Stack spacing={6} align="center">
            <Center>
              <Image
                src={props.data.logo.url}
                alt={props.data.logo.alt}
                w="100px"
                h="100%"
              />
            </Center>
            <Text fontSize="sm">{props.data.rights}</Text>
          </Stack>
          <Stack align={"flex-start"} mt={{ sm: 10, md: 0 }}>
            <ListHeader>{props.data.name_tab_title}</ListHeader>
            <Text>{props.data.company_code}</Text>
            <Text>{props.data.vat_code}</Text>
            <Links
              href="/privatumas"
              _hover={{ color: props.data.link_text_color_hover }}
            >
              {props.data.privacy}
            </Links>
          </Stack>
          <Stack align="flex-start" mt={{ sm: 10, md: 0 }}>
            <ListHeader>{props.data.contatcs_tab_title}</ListHeader>
            <Text>{props.data.adress}</Text>
            <Links
              href={`mailto:${props.data.email}`}
              _hover={{ color: props.data.link_text_color_hover }}
            >
              {props.data.email}
            </Links>
            <Links
              href={`tel:${props.data.phone}`}
              _hover={{ color: props.data.link_text_color_hover }}
            >
              {props.data.phone}
            </Links>
          </Stack>
          <Stack align={"flex-start"} mt={{ sm: 10, md: 0 }}>
            <ListHeader>{props.data.services_tab_title}</ListHeader>
            <Links
              href="/paslaugos/tekinimas"
              _hover={{ color: props.data.link_text_color_hover }}
            >
              {props.data.turning}
            </Links>
            <Links
              href="/paslaugos/frezavimas"
              _hover={{ color: props.data.link_text_color_hover }}
            >
              {props.data.milling}
            </Links>
            <Links
              href="/paslaugos/projektavimas"
              _hover={{ color: props.data.link_text_color_hover }}
            >
              {props.data.design}
            </Links>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
}
