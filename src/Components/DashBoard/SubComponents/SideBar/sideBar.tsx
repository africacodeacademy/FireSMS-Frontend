import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import TopNav from "../TopNavigation/topNav";
import SidebarContent from "./sideBarContent";
import DashBoardContent from "../DashBoardContent/dashboardContent";
import { DashBoardContext } from "../../DashboardContext/dashboardContext";
import Footer from "../../../Footer/footer";

function SideBarWithHeader() {
  const { isOpen, onClose } = useDisclosure();
  const { sideBarSize } = useContext(DashBoardContext);
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <TopNav />
      <Box ml={{ base: 0, md: sideBarSize === "small" ? "79" : "15%" }} p="4">
        <DashBoardContent />
      </Box>
      <Box display={{ base: "contents", md: "none" }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default SideBarWithHeader;
