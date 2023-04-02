import { Menu, MenuButton, MenuList, Button, Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import SelectLanguageItem from "./SelectLanguageItem";

export default function SelectLanguage(props) {
  return (
    <Menu>
      <MenuButton
        bg="#04132a"
        backgroundImage="/images/textures/navTexture.png"
        border="none"
        _hover={{
          background: "#04132a",
          backgroundImage: "/images/textures/navTexture.png",
        }}
        _active={{
          background: "#04132a",
          backgroundImage: "/images/textures/navTexture.png",
        }}
        color="#ffffff"
        maxW="8rem"
        as={Button}
        rightIcon={<ChevronDownIcon />}
        leftIcon={
          <Image
            h="1rem"
            w="1.5rem"
            src={`/images/flags/${props.language}_flag.png`}
            alt="Naudojamos kalbos vėliava"
          />
        }
      >
        {props.language}
      </MenuButton>
      <MenuList
        minW="8rem"
        bg="#04132a"
        backgroundImage="/images/textures/navTexture.png"
        border="none"
        color="#ffffff"
      >
        <SelectLanguageItem
          currentValue="LT"
          handleLanguageSelect={props.handleLanguageSelect}
        />
        <SelectLanguageItem
          currentValue="EN"
          handleLanguageSelect={props.handleLanguageSelect}
        />
        <SelectLanguageItem
          currentValue="NO"
          handleLanguageSelect={props.handleLanguageSelect}
        />
      </MenuList>
    </Menu>
  );
}
