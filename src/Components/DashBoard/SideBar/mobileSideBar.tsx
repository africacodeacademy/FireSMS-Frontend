import { Stack } from "@chakra-ui/react";
import MobileSideBarFormat from "./mobileSideBarFormat";

function MobileSideBar() {
  return (
    <Stack direction="column" spacing={7} pos="fixed" zIndex={2}>
      <MobileSideBarFormat name="Send SMS" link="/dashBoard/sms" />
      <MobileSideBarFormat name="Send Bulk" link="/dashBoard/sms-bulk" />
      <MobileSideBarFormat name="Send Batch" link="/dashBoard/sms-batch" />
      <MobileSideBarFormat name="History" link="/dashBoard/sms-history" />
      <MobileSideBarFormat name="Balance" link="/dashBoard/account-balance" />
    </Stack>
  );
}

export default MobileSideBar;
