import { Box, Stack, Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";
import Links from "./Links";
import DesktopSubNav from "./DesktopSubNav";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function DesktopNav({ menu, submenu }) {
  return (
    <Stack direction="row" spacing={12} align="center" textAlign="center">
      {menu.map((item, index) => (
        <Box key={index}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Links
                href={item.navigation_link ?? "#"}
                py="0.5rem"
                fontSize={"xl"}
                fontWeight={500}
                color="#ffffff"
                _hover={{ color: "#ffa500" }}
              >
                {item.navigation_item}
                {!item.navigation_link && <ChevronDownIcon />}
              </Links>
            </PopoverTrigger>

            {!item.navigation_link && (
              <PopoverContent
                border={0}
                boxShadow="xl"
                bg="#04132a"
                backgroundImage="/images/textures/navTexture.png"
                color="#ffffff"
                p={4}
                rounded="xl"
                minW="sm"
              >
                <Stack>
                  {submenu.map((child, index) => (
                    <DesktopSubNav
                      key={index}
                      label={child.navigation_item}
                      href={child.navigation_link}
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
