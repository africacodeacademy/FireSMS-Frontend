import { Flex, HStack, useColorModeValue, Text, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavButtons from "../../../Navigation/NavButtons";
import MyMenuIcon from "./mymenuIcon";
import companyLogo from "../../logo/logo_fire.png";
import { DashBoardContext } from "../../DashboardContext/dashboardContext";

function TopNav() {
  const { sideBarSize, setSelectedContent } = useContext(DashBoardContext);
  const navigate = useNavigate();

  const signOut = async () => {
    localStorage.removeItem("session");
    localStorage.removeItem("access_token");
    navigate("/signIn");
  };

  // props data for Nav buttons
  const name = "Pricing";
  const name2 = "Developers";
  const name3 = "Profile";
  const name4 = "Sign Out";

  return (
    <Flex
      ml={{ base: 0, md: sideBarSize === "small" ? "79" : "15%" }}
      transition="0.3s ease"
      height="16"
      bg={useColorModeValue("gray.800", "gray.800")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="space-between"
      pos="fixed"
      zIndex={2}
      w={{ base: "100%", md: sideBarSize === "small" ? "94.2%" : "85%" }}
    >
      <HStack cursor="pointer" direction="row" spacing={0} w="50%">
        <Stack alignItems="center" onClick={() => setSelectedContent("Home")}>
          <img width="30px" height="20px" alt="logo" src={companyLogo} />
        </Stack>
        <Stack w="92%" onClick={() => setSelectedContent("Home")}>
          <Text mt="13.3" color="white" fontSize="2xl" fontWeight="bold">
            FireSMS
          </Text>
        </Stack>
      </HStack>

      <HStack spacing={{ base: "0", md: "0" }} mr={{ base: "0", md: "5" }}>
        <Flex alignItems="center">
          <HStack display={{ base: "none", md: "contents" }} mr="5">
            <Text onClick={() => setSelectedContent("Pricing")}>
              <NavButtons name={name} />
            </Text>
            <Text onClick={() => setSelectedContent("developer")}>
              <NavButtons name={name2} />
            </Text>
            <Text onClick={() => setSelectedContent("Profile")}>
              <NavButtons name={name3} />
            </Text>
            <Text onClick={signOut}>
              <NavButtons name={name4} />
            </Text>
          </HStack>
          <MyMenuIcon />
        </Flex>
      </HStack>
    </Flex>
  );
}

export default TopNav;
