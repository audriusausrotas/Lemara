import { Image, MenuItem } from "@chakra-ui/react";

export default function SelectLanguageItem({
  handleLanguageSelect,
  currentValue,
}) {
  return (
    <MenuItem
      bg="#04132a"
      backgroundImage="/images/textures/navTexture.png"
      px="15px"
      py="5px"
      _hover={{
        background: "#072146",
        backgroundImage: "/images/textures/navTexture.png",
        color: "#ffa500",
      }}
      _focus={{
        background: "none",
        backgroundImage: "none",
      }}
      onClick={handleLanguageSelect}
      value={currentValue}
    >
      <Image
        h="1rem"
        w="1.5rem"
        src={`/images/flags/${currentValue}_flag.png`}
        alt="Naudojamos kalbos vėliava"
        mr="12px"
      />
      {currentValue}
    </MenuItem>
  );
}
