import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import DisplayDevelopers from "./Components/LandingPageContents/Developers/DisplayDevelopers";
import Signin from "./Components/Sign In/signin";
import Signup from "./Components/Sign Up/signUp";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/ResetPassword/restPassword";
import DashBoardHome from "./Components/Dashboard/SubComponents/dashBoardHome";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password/:resetId" element={<ResetPassword />} />
        <Route path="/docs" element={<DisplayDevelopers />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<DashBoardHome />} />
      </Routes>
    </Box>
  );
}
export default App;
