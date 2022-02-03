import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import theme from "./presentation/theme";

// This is the context that will be used by the Wrapper component.
// The Wrapper component will be used to wrap the App component.
const WrapContext = createContext();
const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export default function Wrapper({ children }) {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <AuthContext.Provider value={{}}>
          <WrapContext.Provider value={""}>{children}</WrapContext.Provider>
        </AuthContext.Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
}
