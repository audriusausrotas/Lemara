import CareerList from "./CareerList";
import {
  Heading,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Container,
} from "@chakra-ui/react";

export default function CareerMain(props) {
  return (
    <Container
      maxW="8xl"
      color={props.data.text_color}
      bg={props.data.background_color}
      backgroundImage={props.data.background_texture.url}
      align="center"
      flex={1}
      borderRadius="xl"
      py={{ sm: "1rem", md: "2rem", lg: "5rem" }}
    >
      <Heading as="h3" size="2xl" py="2rem">
        {props.data.title}
      </Heading>
      <Accordion allowToggle pt={{ sm: "1rem", md: "2rem", lg: "5rem" }}>
        {props.data.slices.map((job) => {
          return (
            job.primary.published && (
              <AccordionItem key={job.id} maxW="60rem">
                <AccordionButton
                  color={props.data.button_text_color}
                  bg={props.data.button_background_color}
                  _hover={{
                    background: props.data.button_hover_background_color,
                    color: props.data.button_hover_text_color,
                  }}
                  _expanded={{
                    bg: props.data.button_expanded_background_color,
                    color: props.data.button_expanded_text_color,
                  }}
                >
                  <Container
                    textAlign="left"
                    px="0"
                    fontSize="30"
                    fontWeight="600"
                  >
                    {job.primary.title}
                  </Container>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel
                  pb="4"
                  textAlign="left"
                  pl="3rem"
                  bg={props.data.expanded_background_color}
                  color={props.data.expanded_text_color}
                  roundedBottom="8"
                >
                  <CareerList
                    name={props.data.description_title}
                    items={job.primary.description}
                  />

                  <CareerList
                    name={props.data.requirments_title}
                    items={job.primary.requirments}
                  />

                  <CareerList
                    name={props.data.offer_title}
                    items={job.primary.offer}
                  />

                  <CareerList
                    name={props.data.salary_title}
                    items={job.primary.salary}
                  />
                </AccordionPanel>
              </AccordionItem>
            )
          );
        })}
      </Accordion>
    </Container>
  );
}
