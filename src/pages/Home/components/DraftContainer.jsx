import { Text, Button } from "@chakra-ui/react";
import { DraftParent, DraftContent } from "./Style";
import { AnimatingText } from "../../../components";
import "@fontsource/bebas-neue";
import "@fontsource/roboto";
const DraftContainer = () => {
  return (
    <DraftParent>
      <DraftContent>
        <AnimatingText
          fontSize={"2.5rem"}
          fontFamily={"Bebas Neue"}
          letterSpacing={"0.1rem"}
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
        <Button variant="gradientOutline" mt={2}w="50%">
          Upload
        </Button>
      </DraftContent>
    </DraftParent>
  );
};
export default DraftContainer;
