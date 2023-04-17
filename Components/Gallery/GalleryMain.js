import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";
import { Container } from "@chakra-ui/react";

export default function GalleryMain(props) {
  const [index, setIndex] = useState(-1);
  const slides = props.pictures.map(({ src, width, height }) => ({
    src,
    width,
    height,
  }));

  return (
    <Container
      maxW="100%"
      px={{ base: "5%", md: "10%" }}
      py={{ sm: "1rem", md: "2rem", lg: "5rem" }}
      bg={props.data.background_color}
      color={props.data.text_color}
      backgroundImage={props.data.background_texture.url}
      flex={1}
    >
      <PhotoAlbum
        spacing={6}
        photos={props.pictures}
        layout="rows"
        targetRowHeight={300}
        onClick={(event, photo, index) => setIndex(index)}
      />

      <Lightbox
        animation={{ fade: 330 }}
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Thumbnails]}
      />
    </Container>
  );
}
