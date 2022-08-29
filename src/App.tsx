import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import DisplayDevelopers from "./Components/LandingPageContents/Developers/DisplayDevelopers";
import SignIn from "./Components/Sign In/signin";
import SignUp from "./Components/Sign Up/signUp";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import DashBoard from "./Components/DashBoard/dashBoard";
import PrivateRoutes from "./Components/Auth/PrivateRoutes";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Docs" element={<DisplayDevelopers />} />
        <Route path="/ResetPassword" element={<ForgotPassword />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/DashBoard" element={<DashBoard />} />
        </Route>
      </Routes>
    </Box>
  );
}
export default App;
