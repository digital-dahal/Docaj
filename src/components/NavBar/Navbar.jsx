import React from "react";
import { Flex, Spacer, useTheme } from "@chakra-ui/react";
import { NavContainer } from "./NavStyles";
import "@fontsource/roboto";
import ThemeToggleButton from "../ThemeToggleButton";
import AnimatedText from "../AnimatingText";
function Navbar() {
  const theme = useTheme();
  const { primaryRed, primaryPink } = theme.colors;

  return (
    <NavContainer>
      <Flex w={"100%"} h={"100%"} alignItems={"center"}>
        <AnimatedText
          fontSize={"1.5rem"}
          colors={{ color1: primaryRed, color2: primaryPink }}
        >
          DocGuj
        </AnimatedText>
        <Spacer />
        <ThemeToggleButton />
      </Flex>
    </NavContainer>
  );
}

export default Navbar;
