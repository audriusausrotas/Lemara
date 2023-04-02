import {
  Text,
  Stack,
  Collapse,
  Icon,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Links from "./Links";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function MobileNavItem({
  closeMenu,
  navigation_item,
  navigation_link,
  submenu,
}) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      color="#ffffff"
      bg="#04132a"
      backgroundImage="/images/textures/navTexture.png"
      _hover={{ backgroundColor: "#04132a" }}
      align="start"
      spacing={4}
      onClick={!navigation_link ? onToggle : undefined}
    >
      {navigation_link ? (
        <Links
          onClick={navigation_link && closeMenu}
          zIndex="1"
          py="0.5rem"
          href={navigation_link ?? "#"}
          _hover={{ textDecoration: "none" }}
        >
          <Text fontWeight={600}>{navigation_item}</Text>
          {!navigation_link && ""}
        </Links>
      ) : (
        <Button
          pl="0"
          bg="#04132a"
          backgroundImage="/images/textures/navTexture.png"
          _hover={{
            bg: "#04132a",
            backgroundImage: "/images/textures/navTexture.png",
          }}
          _active={{
            bg: "#04132a",
            backgroundImage: "/images/textures/navTexture.png",
          }}
        >
          {navigation_item}
          {!navigation_link && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen && "rotate(180deg)"}
              w={6}
              h={6}
            />
          )}
        </Button>
      )}

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor="gray.200"
          align="start"
        >
          {!navigation_link &&
            submenu.map((child, index) => (
              <Links
                onClick={closeMenu}
                color="#ffffff"
                key={index}
                py={2}
                href={child.navigation_link ?? "#"}
              >
                {child.navigation_item}
              </Links>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}
