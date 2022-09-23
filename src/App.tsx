import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import DisplayDevelopers from "./Components/LandingPageContents/Developers/DisplayDevelopers";
import SignIn from "./Components/Sign In/signin";
import SignUp from "./Components/Sign Up/signUp";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/ResetPassword/restPassword";
import DashBoard from "./Components/DashBoard/dashBoard";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/reset-password/:resetId" element={<ResetPassword />} />
        <Route path="/docs" element={<DisplayDevelopers />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/dashBoard" element={<DashBoard />} />
      </Routes>
    </Box>
  );
}
export default App;
