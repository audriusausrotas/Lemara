import React from "react";
import { VStack } from "@chakra-ui/react";
import Navigation from "./Navigation/Navigation";

export default function Layout(props) {
  return (
    <>
      <Navigation />
      <VStack pt="7rem" align="start" minH="100vh" bg="#F8F7F3">
        {props.children}
      </VStack>
    </>
  );
}
