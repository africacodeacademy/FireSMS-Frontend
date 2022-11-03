import { Box } from "@chakra-ui/react";
import SideBarWithHeader from "../../SideBar/sideBar";
import CheckBalance from "./checkBalance";

function DisplayBalance() {
  return (
    <Box justifyContent="center" w="100%">
      <SideBarWithHeader>
        <CheckBalance />
      </SideBarWithHeader>
    </Box>
  );
}
export default DisplayBalance;
