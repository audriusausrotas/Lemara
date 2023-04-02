import { Heading, Text, Container, Box } from "@chakra-ui/react";
import Slider from "react-slick";
import React from "react";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Feedback(props) {
  return (
    <Box
      align="center"
      w="100%"
      p="2rem"
      py={{ base: "4rem", md: "6rem", lg: "8rem", xl: "9rem" }}
      color={props.data.feedback_text_color}
      bg={props.data.feedback_background_color}
      backgroundImage={props.data.feedback_background_texture.url}
    >
      <Heading as="h4" size="2xl" pb="2rem">
        {props.data.feedback_title}
      </Heading>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings}>
        {props.data.slices[1].items.map((item) => {
          return (
            <Box key={item.title}>
              <Heading as="h5" size="xl" pb="1rem">
                {item.title}
              </Heading>
              <Text
                lineHeight={{ base: "1.5", lg: "1.8" }}
                fontSize="xl"
                maxW="60rem"
              >
                {item.text}
              </Text>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}
