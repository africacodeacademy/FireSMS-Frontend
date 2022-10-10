import { Box } from "@chakra-ui/react";
import SideBarWithHeader from "../../SideBar/sideBar";
import SendSMS from "./sendSMS";

function DisplaySMS() {
  return (
    <Box justifyContent="center" w="100%">
      <SideBarWithHeader>
        <SendSMS />
      </SideBarWithHeader>
    </Box>
  );
}
export default DisplaySMS;
