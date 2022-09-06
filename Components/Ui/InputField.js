import { useState } from "react";
import {
  Box,
  FormControl,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";

function InputField(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Box py="10px" w="20rem">
      <Box pos="relative">
        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={props.icon} />
            {props.type === "number" && isActive && (
              <InputLeftElement
                pl="43px"
                pointerEvents="none"
                children={<SmallAddIcon />}
              />
            )}

            {props.name !== "Žinutė" ? (
              <Input
                type={props.type}
                p="5"
                pl="3rem"
                outline="1px solid #041126"
                onFocus={() => setIsActive(true)}
                onBlur={() =>
                  props.value === "" ? setIsActive(false) : setIsActive(true)
                }
                value={props.value}
                onChange={props.onChange}
              />
            ) : (
              <Textarea
                minH="125px"
                outline="1px solid #041126"
                onFocus={() => setIsActive(true)}
                onBlur={() =>
                  props.value === "" ? setIsActive(false) : setIsActive(true)
                }
                value={props.value}
                onChange={props.onChange}
              />
            )}
          </InputGroup>
        </FormControl>

        <Text
          top={isActive ? "-10px" : "50%"}
          left={isActive ? "5px" : "50%"}
          transform={
            isActive
              ? "translate(10px,-45%) scale(0.8)"
              : "translate(-50%,-50%) scale(1)"
          }
          bg="none"
          transformOrigin="top left"
          transition="all .2s ease-out"
          color="black"
          pointerEvents="none"
          pos="absolute"
          w="fit-content"
          h="fit-content"
          zIndex="5"
        >
          {props.name}
        </Text>
      </Box>
    </Box>
  );
}

export default InputField;
