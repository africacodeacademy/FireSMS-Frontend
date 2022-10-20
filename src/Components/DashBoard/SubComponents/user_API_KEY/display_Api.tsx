import { Box } from "@chakra-ui/react";
import SideBarWithHeader from "../../SideBar/sideBar";
import UserApi from "./user_Api";

function DisplayApi() {
  return (
    <Box justifyContent="center" w="100%">
      <SideBarWithHeader>
        <UserApi />
      </SideBarWithHeader>
    </Box>
  );
}
export default DisplayApi;
