import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import DisplayDevelopers from "./Components/LandingPageContents/Developers/DisplayDevelopers";
import SignIn from "./Components/Sign In/signin";
import SignUp from "./Components/Sign Up/signUp";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/ResetPassword/restPassword";
import DisplayHome from "./Components/DashBoard/SubComponents/Home/displayHome";
import DisplayProfile from "./Components/DashBoard/SubComponents/UserProfile/displayProfile";
import DisplayPrices from "./Components/DashBoard/SubComponents/Pricing/displayPrices";
import DisplayBalance from "./Components/DashBoard/SubComponents/AccountBalance/displayBalance";
import DisplayBulk from "./Components/DashBoard/SubComponents/SMSBulk/displayBulk";
import DisplayBatch from "./Components/DashBoard/SubComponents/SMSBatch/displayBatch";
import DisplaySMS from "./Components/DashBoard/SubComponents/SMSSend/displaySMS";
import DisplayHistory from "./Components/DashBoard/SubComponents/SMSHistory/displayHistory";
import DisplayDevelopersDocs from "./Components/DashBoard/SubComponents/Developers/displayDevelopers";

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
        <Route path="/dashBoard/account-balance" element={<DisplayBalance />} />
        <Route path="/dashBoard" element={<DisplayHome />} />
        <Route path="/dashBoard/sms" element={<DisplaySMS />} />
        <Route path="/dashBoard/sms-history" element={<DisplayHistory />} />
        <Route path="/dashBoard/sms-bulk" element={<DisplayBulk />} />
        <Route path="/dashBoard/sms-batch" element={<DisplayBatch />} />
        <Route path="/dashBoard/pricing" element={<DisplayPrices />} />
        <Route path="/dashBoard/docs" element={<DisplayDevelopersDocs />} />
        <Route path="/dashBoard/profile" element={<DisplayProfile />} />
      </Routes>
    </Box>
  );
}
export default App;
