import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Dashboard from "../dashboard";
import Home from "./home";

function DashBoardHome() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      navigate("/signIn");
    }
  }, [navigate]);

  return (
    <Box justifyContent="center" w="100%">
      <Dashboard>
        <Home />
      </Dashboard>
    </Box>
  );
}
export default DashBoardHome;
