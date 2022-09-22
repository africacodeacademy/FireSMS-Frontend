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
    <Box alignItems="center" py={10}>
      {selectedContent && selectedContent === "Home" && (
        <Stack
          alignItems="center"
          textAlign="center"
          mt={{ base: "5%", md: "4%" }}
        >
          <DashBoardHome />
        </Stack>
      )}
      {selectedContent && selectedContent === "SendSMS" && (
        <Stack alignItems="center" mt={{ base: "5%", md: "4%" }}>
          <SendSMS />
        </Stack>
      )}
      {selectedContent && selectedContent === "History" && (
        <Stack
          alignItems="center"
          textAlign="center"
          mt={{ base: "5%", md: "4%" }}
        >
          <SMSHistory />
        </Stack>
      )}
      {selectedContent && selectedContent === "SMSBulk" && (
        <Stack alignItems="center" textAlign="center" mt="4%">
          <SMSBulk />
        </Stack>
      )}
      {selectedContent && selectedContent === "SMSBatch" && (
        <Stack alignItems="center" textAlign="center" mt="4%">
          <SMSBatch />
        </Stack>
      )}
      {selectedContent && selectedContent === "CheckBalance" && (
        <Stack alignItems="center" textAlign="center" mt="4%">
          <CheckBalance />
        </Stack>
      )}
      {selectedContent && selectedContent === "Profile" && (
        <Stack alignItems="center" textAlign="center" mt="4%">
          <UserProfile />
        </Stack>
      )}
      {selectedContent && selectedContent === "Pricing" && (
        <Stack
          alignItems="center"
          textAlign="center"
          mt={{ base: "5%", md: "4%" }}
        >
          <UserPricingOptions />
        </Stack>
      )}
      {selectedContent && selectedContent === "developer" && (
        <Stack alignItems="center" textAlign="center" mt="-3%">
          <DeveloperOptions />
        </Stack>
      )}
    </Box>
  );
}
export default DashBoardContent;
