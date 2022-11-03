import { Box } from "@chakra-ui/react";
import SideBarWithHeader from "../../SideBar/sideBar";
import UserPricingOptions from "./userPricing";

function DisplayPrices() {
  return (
    <Box justifyContent="center" w="100%">
      <SideBarWithHeader>
        <UserPricingOptions />
      </SideBarWithHeader>
    </Box>
  );
}
export default DisplayPrices;
