import { Image, Text } from "@chakra-ui/react";
import { PdfParent } from "./Style";
import FileImage from "../../../assets/File.svg";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { usePdf } from "../../../Wrapper";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";

function PdfViewer() {
  const { file, err } = usePdf();
  return (
    <PdfParent>
      {!file && err == null && (
        <>
          <Image src={FileImage} w="80%" mb={4} />
          <Text variant="grayish" fontSize="3rem">
            None Pdf Selected
          </Text>
        </>
      )}
      {file && (
        <>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
            <Viewer fileUrl={file} />
          </Worker>
        </>
      )}
      {err != null && (
        <>
          <Text variant="err" fontSize="3rem">
            {err}
          </Text>
        </>
      )}
    </PdfParent>
  );
}

export default PdfViewer;
