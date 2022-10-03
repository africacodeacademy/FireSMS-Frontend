import { Box } from "@chakra-ui/react";
import SideBarWithHeader from "../../SideBar/sideBar";
import SMSHistory from "./smsHistory";

function DisplayHistory() {
  return (
    <Box justifyContent="center" mb={{ base: "90%", md: "1%" }} w="100%">
      <SideBarWithHeader>
        <SMSHistory />
      </SideBarWithHeader>
    </Box>
  );
}
export default DisplayHistory;
