/* eslint-disable react/jsx-no-constructed-context-values */
import { Box, useControllableState } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { DashBoardContext } from "./DashboardContext/dashboardContext";
import SideBarWithHeader from "./SubComponents/SideBar/sideBar";

type UserValues = {
  uuId: string;
  decoded: string;
  idUser: string;
};

function DashBaord() {
  const [selectedContent, setSelectedContent] = useControllableState({
    defaultValue: "Home",
  });
  const [sideBarSize, setSideBarSize] = useState("large");
  const navigate = useNavigate();
  const [usersID, setUsersID] = useState("");

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      navigate("/signIn");
    } else {
      const token = localStorage.getItem("access_token");
      const decoded: UserValues = jwt_decode(token || "");
      setUsersID(decoded.uuId);
    }
  }, [navigate]);
  return (
    <Box>
      <DashBoardContext.Provider
        value={{
          sideBarSize,
          setSideBarSize,
          selectedContent,
          setSelectedContent,
          usersID,
        }}
      >
        <SideBarWithHeader />
      </DashBoardContext.Provider>
    </Box>
  );
}
export default DashBaord;
