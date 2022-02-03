import React from "react";
import { Flex, Spacer, Text } from "@chakra-ui/react";
import { NavContainer } from "./NavStyles";
import "@fontsource/roboto";
import ThemeToggleButton from "../ThemeToggleButton";
function Navbar() {
  return (
    <NavContainer>
      <Flex w={"100%"} h={"100%"} alignItems={"center"}>
        <Text
          bgGradient="linear(to-b, #DF4F4F, #DA19A4)"
          bgClip="text"
          fontFamily="Roboto"
          fontWeight="bold"
          fontSize="2xl"
        >
          DocGuj
        </Text>
        <Spacer />
        <ThemeToggleButton />
      </Flex>
    </NavContainer>
  );
}

export default Navbar;
