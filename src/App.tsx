import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import SelectDeveloper from "./Components/LandingPageContents/Developers/selectDeveloper";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/Developers" element={<SelectDeveloper />} />
      </Routes>
    </Box>
  );
}
export default App;
