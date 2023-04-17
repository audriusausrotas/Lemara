import { UnorderedList, ListItem, Heading } from "@chakra-ui/react";

export default function CareerList(props) {
  return (
    <>
      <Heading fontSize="28" pb="0.5rem">
        {props.name}
      </Heading>
      <UnorderedList pb="2rem">
        {props.items.map((item, index) => {
          return (
            <ListItem data={props.data} fontSize="18" key={index}>
              {item.text}
            </ListItem>
          );
        })}
      </UnorderedList>
    </>
  );
}
