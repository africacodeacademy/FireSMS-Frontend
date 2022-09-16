import { Avatar, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { DashBoardContext } from "../../DashboardContext/dashboardContext";

function User() {
  const { sideBarSize } = useContext(DashBoardContext);
  return (
    <HStack>
      <Flex
        alignItems="center"
        align="center"
        p="4"
        mx="2"
        mb={sideBarSize === "small" ? "-610%" : "-210%"}
      >
        <HStack cursor="pointer">
          <Avatar
            size="sm"
            src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
          />
          {sideBarSize && sideBarSize === "large" && (
            <VStack
              display={{ base: "none", md: "flex" }}
              alignItems="center"
              spacing="1px"
              fontSize="16"
            >
              <Text fontSize="sm" color="gray.800">
                User Name
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
