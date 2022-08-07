import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import SelectDeveloper from "./Components/LandingPageContents/Developers/selectDeveloper";
import SignIn from "./Components/Sign In/signin";
import SignUp from "./Components/Sign Up/signUp";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Docs" element={<SelectDeveloper />} />
      </Routes>
    </Box>
  );
}
export default App;
