import { Box, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import { DashBoardContext } from "../../DashboardContext/dashboardContext";
import CheckBalance from "./ComponetsContents/checkBalance";
import DashBoardHome from "./ComponetsContents/dashBoardHome";
import DeveloperOptions from "./ComponetsContents/developerOptions";
import SMSBatch from "./ComponetsContents/sendBatch";
import SMSBulk from "./ComponetsContents/sendBulk";
import SendSMS from "./ComponetsContents/sendSMS";
import SMSHistory from "./ComponetsContents/smsHistory";
import UserPricingOptions from "./ComponetsContents/userPricing";
import UserProfile from "./ComponetsContents/userProfile";

function DashBoardContent() {
  const { selectedContent } = useContext(DashBoardContext);
  return (
    <Box bg="teal.600" justifyContent="center" alignItems="center">
      {selectedContent && selectedContent === "Home" && (
        <Stack alignItems="center" textAlign="center">
          <DashBoardHome />
        </Stack>
      )}
      {selectedContent && selectedContent === "SendSMS" && (
        <Stack alignItems="center" textAlign="center">
          <SendSMS />
        </Stack>
      )}
      {selectedContent && selectedContent === "History" && (
        <Stack alignItems="center" textAlign="center">
          <SMSHistory />
        </Stack>
      )}
      {selectedContent && selectedContent === "SMSBulk" && (
        <Stack alignItems="center" textAlign="center">
          <SMSBulk />
        </Stack>
      )}
      {selectedContent && selectedContent === "SMSBatch" && (
        <Stack alignItems="center" textAlign="center">
          <SMSBatch />
        </Stack>
      )}
      {selectedContent && selectedContent === "CheckBalance" && (
        <Stack alignItems="center" textAlign="center">
          <CheckBalance />
        </Stack>
      )}
      {selectedContent && selectedContent === "Profile" && (
        <Stack alignItems="center" textAlign="center">
          <UserProfile />
        </Stack>
      )}
      {selectedContent && selectedContent === "Pricing" && (
        <Stack alignItems="center" textAlign="center">
          <UserPricingOptions />
        </Stack>
      )}
      {selectedContent && selectedContent === "developer" && (
        <Stack alignItems="center" textAlign="center">
          <DeveloperOptions />
        </Stack>
      )}
    </Box>
  );
}
export default DashBoardContent;
