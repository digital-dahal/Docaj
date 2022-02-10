import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { NavContainer } from "./NavStyles";
import "@fontsource/roboto";
import ThemeToggleButton from "../ThemeToggleButton";
import AnimatedText from "../AnimatingText";
function Navbar() {
  return (
    <NavContainer>
      <Flex w={"100%"} h={"100%"} alignItems={"center"}>
        <AnimatedText fontSize={"1.5rem"}>DocGuj</AnimatedText>
        <Spacer />
        <ThemeToggleButton />
      </Flex>
    </NavContainer>
  );
}

export default Navbar;
