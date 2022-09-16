/* eslint-disable react/jsx-no-constructed-context-values */
import { Box, useControllableState } from "@chakra-ui/react";
import { useState } from "react";
import { DashBoardContext } from "./DashboardContext/dashboardContext";
import SideBarWithHeader from "./SubComponents/SideBar/sideBar";

function DashBaord() {
  const [selectedContent, setSelectedContent] = useControllableState({
    defaultValue: "Home",
  });
  const [sideBarSize, setSideBarSize] = useState("large");
  return (
    <Box>
      <DashBoardContext.Provider
        value={{
          sideBarSize,
          setSideBarSize,
          selectedContent,
          setSelectedContent,
        }}
      >
        <SideBarWithHeader />
      </DashBoardContext.Provider>
    </Box>
  );
}
export default DashBaord;
