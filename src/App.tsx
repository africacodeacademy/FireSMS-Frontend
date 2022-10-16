import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import DisplayDevelopers from "./Components/LandingPageContents/Developers/DisplayDevelopers";
import Signin from "./Components/Sign In/signin";
import Signup from "./Components/Sign Up/signUp";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/ResetPassword/restPassword";
import DisplayBalance from "./Components/DashBoard/SubComponents/AccountBalance/displayBalance";
import DisplayHome from "./Components/DashBoard/SubComponents/Home/displayHome";
import DisplayHistory from "./Components/DashBoard/SubComponents/SMSHistory/displayHistory";
import DisplaySMS from "./Components/DashBoard/SubComponents/SMSSend/displaySMS";
import DisplayBulk from "./Components/DashBoard/SubComponents/SMSBulk/displayBulk";
import DisplayBatch from "./Components/DashBoard/SubComponents/SMSBatch/displayBatch";
import DisplayPrices from "./Components/DashBoard/SubComponents/Pricing/displayPrices";
import DisplayDevelopersDocs from "./Components/DashBoard/SubComponents/Developers/displayDevelopers";
import DisplayProfile from "./Components/DashBoard/SubComponents/UserProfile/displayProfile";
import DisplayApi from "./Components/DashBoard/SubComponents/user_API_KEY/display_Api";

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
        <Route path="/dashboard/account-balance" element={<DisplayBalance />} />
        <Route path="/dashboard" element={<DisplayHome />} />
        <Route path="/dashboard/sms" element={<DisplaySMS />} />
        <Route path="/dashboard/sms-history" element={<DisplayHistory />} />
        <Route path="/dashboard/sms-bulk" element={<DisplayBulk />} />
        <Route path="/dashboard/sms-batch" element={<DisplayBatch />} />
        <Route path="/dashboard/pricing" element={<DisplayPrices />} />
        <Route path="/dashboard/docs" element={<DisplayDevelopersDocs />} />
        <Route path="/dashboard/profile" element={<DisplayProfile />} />
        <Route path="/dashboard/api-key" element={<DisplayApi />} />
      </Routes>
    </Box>
  );
}
export default App;
