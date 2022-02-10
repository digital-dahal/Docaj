import React from "react";

import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
function ThemeToggleButton() {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      colorScheme={useColorModeValue("purple", "yellow")}
      onClick={toggleColorMode}
      title="Toggle theme"
    />
  );
}

export default ThemeToggleButton;
