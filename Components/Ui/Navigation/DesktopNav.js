import {
  Box,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import Links from "./Links";
import DesktopSubNav from "./DesktopSubNav";
import Texts from "../../Texts/Texts";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function DesktopNav(props) {
  const navItems = Texts();

  return (
    <Stack direction={"row"} spacing={6} align="center" textAlign="center">
      {navItems.navigation.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Links
                href={navItem.href ?? "#"}
                py="0.5rem"
                fontSize={"2xl"}
                fontWeight={500}
                color={props.colors.navigationLinkColor}
                _hover={{
                  color: props.colors.navigationLinkHover,
                }}
              >
                {navItem.label}
                {navItem.label === "Paslaugos" && <ChevronDownIcon />}
              </Links>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={props.colors.navigationSubBg}
                color={props.colors.navigationSubColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav
                      key={child.label}
                      label={child.label}
                      href={child.href}
                      colors={props.colors}
                      {...child}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
}
