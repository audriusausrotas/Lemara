import { Stack } from "@chakra-ui/react";
import MobileNavItem from "./MobileNavItem";

export default function MobileNav(props) {
  return (
    <Stack
      bg="#04132a"
      backgroundImage="/images/textures/navTexture.png"
      p={4}
      display={{ lg: "none" }}
      w="100%"
      mt="7rem"
      position="fixed"
      zIndex="100"
      left={0}
      top={0}
    >
      {props.menu.map((navItem, index) => (
        <MobileNavItem
          closeMenu={props.closeMenu}
          key={index}
          {...navItem}
          submenu={props.submenu}
        />
      ))}
    </Stack>
  );
}
