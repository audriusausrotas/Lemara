import { Flex, IconButton, Collapse, Image, Box } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Links from "./Links";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useState, useEffect } from "react";
import SelectLanguage from "./SelectLanguage/SeletLanguage";
import { useRouter } from "next/router";
import { menu, submenu } from "./Menu";

export default function Navigation() {
  const [isOpen, setOpen] = useState(false);
  const [language, setLanguage] = useState("LT");
  const router = useRouter();
  const [menus, setMenus] = useState([...menu.lt]);
  const [submenus, setSubmenus] = useState([...submenu.lt]);

  function handleLanguageSelect(e) {
    setLanguage(e.target.value);
  }

  function closeMenu() {
    setOpen(false);
  }

  useEffect(() => {
    let display = "";
    switch (language) {
      case "LT":
        setMenus([...menu.lt]);
        setSubmenus([...submenu.lt]);
        display = "lt";
        break;
      case "EN":
        setMenus([...menu.en]);
        setSubmenus([...submenu.en]);
        display = "en-gb";
        break;
      case "NO":
        setMenus([...menu.no]);
        setSubmenus([...submenu.no]);
        display = "no";
        break;
      default:
        break;
    }
    router.push(router.asPath, router.asPath, { locale: display });
  }, [language]);

  return (
    <>
      <Flex
        boxShadow="0 0 20px black"
        bg="#04132a"
        h="7rem"
        w="100%"
        py={{ base: 1 }}
        align="center"
        px={{ base: "5%", xl: "10%" }}
        position="fixed"
        zIndex="100"
        backgroundImage="/images/textures/navTexture.png"
        userSelect="none"
      >
        <Flex
          flex={{ base: "0", lg: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", lg: "none" }}
        >
          <IconButton
            _hover={{ background: "#072147" }}
            onClick={() => setOpen((prev) => !prev)}
            color="#ffffff"
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", lg: "start" }}>
          <Links href="/">
            <Image src="/logo.png" alt="Lemara logotipas" w="100px" h="100%" />
          </Links>

          <Flex
            display={{ base: "none", lg: "flex" }}
            ml={{ lg: 5, xl: 20 }}
            align="center"
          >
            <DesktopNav menu={menus} submenu={submenus} />
          </Flex>
        </Flex>

        <Box width="120px">
          <SelectLanguage
            language={language}
            handleLanguageSelect={handleLanguageSelect}
          />
        </Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav
          closeMenu={closeMenu}
          language={language}
          menu={menus}
          submenu={submenus}
        />
      </Collapse>
    </>
  );
}
