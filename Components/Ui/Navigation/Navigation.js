import { Flex, IconButton, Collapse, Image, Box } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Links from "./Links";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import React, { useState } from "react";
import { CurrentSettings } from "../../../pages/_app";
import SelectLanguage from "./SelectLanguage/SeletLanguage";

export default function Navigation(props) {
  const { language, setLanguage } = React.useContext(CurrentSettings);
  const [isOpen, setOpen] = useState(false);

  function handleLanguageSelect(e) {
    setLanguage(e.target.value);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <Flex
        boxShadow="0 0 20px black"
        bg={props.data.background_color}
        h="7rem"
        w="100%"
        py={{ base: 1 }}
        align="center"
        px={{ base: "5%", xl: "10%" }}
        position="fixed"
        zIndex="100"
        backgroundImage={props.data.background_texture.url}
      >
        <Flex
          flex={{ base: "0", lg: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", lg: "none" }}
        >
          <IconButton
            _hover={{ background: props.data.hamburger_icon_background_color }}
            onClick={() => setOpen((prev) => !prev)}
            color={props.data.hamburger_icon_color}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", lg: "start" }}>
          <Links href="/">
            <Image
              src={props.data.logo.url}
              alt={props.data.logo.alt}
              w="100px"
              h="100%"
            />
          </Links>

          <Flex
            display={{ base: "none", lg: "flex" }}
            ml={{ lg: 5, xl: 20 }}
            align="center"
          >
            <DesktopNav data={props.data} />
          </Flex>
        </Flex>

        <Box width="120px">
          <SelectLanguage
            data={props.data}
            language={language}
            handleLanguageSelect={handleLanguageSelect}
          />
        </Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav closeMenu={closeMenu} data={props.data} />
      </Collapse>
    </React.Fragment>
  );
}
