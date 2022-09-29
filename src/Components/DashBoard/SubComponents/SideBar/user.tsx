import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { DashBoardContext } from "../../DashboardContext/dashboardContext";
import UserPic from "../../logo/user.png";

function User() {
  const { sideBarSize, setSelectedContent, userName } =
    useContext(DashBoardContext);
  return (
    <HStack>
      <Flex
        alignItems="center"
        align="center"
        p="4"
        mx="2"
        mb={sideBarSize === "small" ? "-610%" : "-210%"}
      >
        <HStack cursor="pointer" onClick={() => setSelectedContent("Profile")}>
          <img alt="UserPic" width="35px" height="35px" src={UserPic} />
          {sideBarSize && sideBarSize === "large" && (
            <VStack
              display={{ base: "none", md: "flex" }}
              alignItems="center"
              spacing="1px"
              fontSize="16"
            >
              <Text fontSize="sm" color="gray.800">
                {userName}
              </Text>
            </VStack>
          )}
          {sideBarSize && sideBarSize === "small" && (
            <VStack
              display={{ base: "none", md: "none" }}
              alignItems="center"
              spacing="1px"
              fontSize="16"
            >
              <Text fontSize="sm" color="gray.800">
                User Name
              </Text>
            </VStack>
          )}
        </HStack>
      </Flex>
    </HStack>
  );
}
export default User;
