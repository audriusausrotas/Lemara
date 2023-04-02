import { Box, Flex, Text, Stack, Icon } from "@chakra-ui/react";
import Links from "./Links";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function DesktopSubNav({ label, href }) {
  return (
    <Links
      href={href ?? "#"}
      role="group"
      display="block"
      p={2}
      rounded="md"
      _hover={{ bg: "#072146" }}
    >
      <Stack direction="row" align="center">
        <Box>
          <Text
            transition="all .3s ease"
            _groupHover={{ color: "#ffa500" }}
            fontWeight={500}
          >
            {label}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify="flex-end"
          align="center"
          flex={1}
        >
          <Icon color="#ffa500" w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Links>
  );
}
