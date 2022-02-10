import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import PdfViewer from "./components/PdfViewer";
import DraftContainer from "./components/DraftContainer";

function Home(props) {
  return (
    <Box h="92vh" w="100vw">
      <Flex
        justifyContent={"space-around"}
        alignItems="center"
        w="100%"
        h="100%"
      >
        <DraftContainer />
        <PdfViewer />
      </Flex>
    </Box>
  );
}

export default Home;
