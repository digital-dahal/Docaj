import { Image, Text } from "@chakra-ui/react";
import { PdfParent } from "./Style";
import FileImage from "../../../assets/File.svg";
function PdfViewer() {
  return (
    <PdfParent>
      <Image src={FileImage} w="80%" mb={2} />
      <Text variant="grayish" fontSize="3rem">
        None Pdf Selected
      </Text>
    </PdfParent>
  );
}

export default PdfViewer;
