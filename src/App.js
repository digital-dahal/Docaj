import Wrapper from "./Wrapper";
import { Routes, Route } from "react-router-dom";
import { Home, Error } from "./pages";
import { hot } from "react-hot-loader/root";
import { NavBar } from "./components";
function App() {
  return (
    <Wrapper>
      <NavBar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </Wrapper>
  );
}

export default hot(App);
