import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import SideBarWithHeader from "../../SideBar/sideBar";
import UserApi from "./user_Api";

type UserValues = {
  decoded: string;
  apiKey: string;
  account: any;
  apikey: string;
};

function DisplayApi() {
  const [myUserAPIKey, setMyUserAPIkey] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const decoded: UserValues = jwt_decode(token || "");
    setMyUserAPIkey(decoded.account.apiKey);
  }, [setMyUserAPIkey]);

  return (
    <Box justifyContent="center" w="100%">
      <SideBarWithHeader>
        <UserApi apikey={myUserAPIKey} />
      </SideBarWithHeader>
    </Box>
  );
}
export default DisplayApi;
