import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SideBarWithHeader from "../../SideBar/sideBar";
import DashBoardHome from "./dashBoardHome";

function DisplayHome() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      navigate("/signIn");
    }
  }, [navigate]);

  return (
    <Box justifyContent="center" w="100%">
      <SideBarWithHeader>
        <DashBoardHome />
      </SideBarWithHeader>
    </Box>
  );
}
export default DisplayHome;
