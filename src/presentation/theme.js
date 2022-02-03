import { extendTheme } from "@chakra-ui/react";

const component = {
  Link: {
    color: "#fff",
    textDecoration: "none",
  },
  Text: {
    variants: {
      gradient: {
        bgGradient: "linear(to-l, #7928CA, #FF0080)",
        bgClip: "text",
      },
    },
  },
};
const config = {
  initialColorModeName: "dark",
  useSystemColorMode: true,
};

const overRide = {
  component,
  config,
};
const theme = extendTheme(overRide);
export default theme;
