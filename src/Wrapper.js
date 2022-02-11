import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import theme from "./presentation/theme";

// This is the context that will be used by the Wrapper component.
// The Wrapper component will be used to wrap the App component.
const WrapFunctionContext = createContext();
const WrapContext = createContext();
export function usePdf() {
  return useContext(WrapContext);
}

export default function Wrapper({ children }) {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);

  function onLoadFile(e) {
    setFile(null);
    setErr(null);
    const allowedFile = ["application/pdf"];
    let currentFile = e.target.files[0];
    if (currentFile) {
      if (allowedFile.includes(currentFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(currentFile);
        reader.onloadend = (e) => {
          // This is base64 code file
          setFile(e.target.result);
        };
      } else {
        setErr("Upload a PDF file");
      }
    } else {
      setErr("Upload To Get Started ");
    }
  }
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <WrapContext.Provider
          value={{
            onLoadFile,
            file,
            err,
          }}
        >
          {children}
        </WrapContext.Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
}
