import { Text } from "@chakra-ui/react";
import { DraftParent, DraftContent } from "./Style";
import { AnimatingText, FileInput } from "../../../components";
import { useTheme } from "@chakra-ui/react";
import { usePdf } from "../../../Wrapper";
import "@fontsource/bebas-neue";
import "@fontsource/roboto";
const DraftContainer = () => {
  const theme = useTheme();
  const { onLoadFile } = usePdf();
  console.log(theme.components);
  const { primaryRed, primaryPink } = theme.colors;
  return (
    <DraftParent>
      <DraftContent>
        <AnimatingText
          fontSize={"2.5rem"}
          fontFamily={"Bebas Neue"}
          letterSpacing={"0.1rem"}
          colors={{ color1: primaryRed, color2: primaryPink }}
        >
          Pdf OnliNe Viewer
        </AnimatingText>
        <Text fontFamily="Roboto" w="50%" textAlign="justify">
          Doguj is online platofrm of reading Pdf in website.Just try to upload
          Any pdf from you local file and some safe background procesiong will
          be done in order to read your pdf. Then you can view the pdf from the
          rig- -ht side of your screen . We provide you the safest way so you
          can read your document without any problem.
        </Text>
        <FileInput
          submitHandler={onLoadFile}
          width="50%"
          mt={"1rem"}
          padding={"0.5rem"}
          bGradient={{ color1: primaryRed, color2: primaryPink }}
          gradientPosition={"to left"}
          bRadius={"0.5rem"}
        />
      </DraftContent>
    </DraftParent>
  );
};
export default DraftContainer;
