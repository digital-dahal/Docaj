import { extendTheme } from "@chakra-ui/react";
import "@fontsource/bebas-neue";
const colors = {
  primaryRed: "#DF4F4F",
  primaryPink: "#DA19A4",
  white: "#fff",
  grayishBlue: "#92BEC3",
  errRed: "#df2424",
};

const components = {
  Text: {
    variants: {
      gradient: {
        bgGradient: `linear(to-b, ${colors.primaryRed}, ${colors.primaryPink})`,
        bgClip: "text",
      },
      grayish: {
        color: colors.grayishBlue,
        fontFamily: "Bebas Neue",
      },
      err: {
        color: colors.errRed,
        fontFamily: "Bebas Neue",
      },
    },
  },

  Button: {
    variants: {
      gradient: {
        fontWeight: "bold",
        borderRadius: "md",
        bgGradient: `linear(to-b, ${colors.primaryRed}, ${colors.primaryPink})`,
      },
    },
  },
};
const config = {
  initialColorModeName: "dark",
  useSystemColorMode: true,
};

const overRide = {
  colors,
  components,
  config,
};
const theme = extendTheme(overRide);
export default theme;
