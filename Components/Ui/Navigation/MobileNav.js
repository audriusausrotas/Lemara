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
      position="fixed"
      mt="7rem"
      zIndex={100}
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
