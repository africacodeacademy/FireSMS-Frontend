import { Box, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { DashBoardContext } from "../../DashboardContext/dashboardContext";

function MobileSideBar() {
  const { setSelectedContent } = useContext(DashBoardContext);
  return (
    <Stack direction="column" spacing={7} pos="fixed" zIndex={2}>
      <Box
        bg="rgba(255, 255, 255, 0.6)"
        onClick={() => setSelectedContent("SendSMS")}
        textAlign="center"
        shadow="lg"
        color="gray.800"
        p={1}
        borderWidth="1px"
        borderRadius="lg"
        cursor="pointer"
        _active={{
          bg: "orange.400",
          color: "white",
        }}
        _hover={{ bg: "orange.400", color: "white" }}
        w={{ base: "80%", md: "0%" }}
      >
        <Text fontSize="1xl" fontWeight="bold">
          Send SMS
        </Text>
      </Box>
      <Box
        bg="rgba(255, 255, 255, 0.6)"
        onClick={() => setSelectedContent("SMSBulk")}
        textAlign="center"
        shadow="lg"
        color="gray.800"
        p={1}
        borderWidth="1px"
        borderRadius="lg"
        cursor="pointer"
        _active={{
          bg: "orange.400",
          color: "white",
        }}
        _hover={{ bg: "orange.400", color: "white" }}
        w={{ base: "80%", md: "0%" }}
      >
        <Text fontSize="1xl" fontWeight="bold">
          Send Bulk
        </Text>
      </Box>
      <Box
        bg="rgba(255, 255, 255, 0.6)"
        onClick={() => setSelectedContent("SMSBatch")}
        textAlign="center"
        shadow="lg"
        color="gray.800"
        p={1}
        borderWidth="1px"
        borderRadius="lg"
        cursor="pointer"
        _active={{
          bg: "orange.400",
          color: "white",
        }}
        _hover={{ bg: "orange.400", color: "white" }}
        w={{ base: "80%", md: "0%" }}
      >
        <Text fontSize="1xl" fontWeight="bold">
          Send Bulk
        </Text>
      </Box>
      <Box
        bg="rgba(255, 255, 255, 0.6)"
        onClick={() => setSelectedContent("History")}
        textAlign="center"
        shadow="lg"
        color="gray.800"
        p={1}
        borderWidth="1px"
        borderRadius="lg"
        cursor="pointer"
        _active={{
          bg: "orange.400",
          color: "white",
        }}
        _hover={{ bg: "orange.400", color: "white" }}
        w={{ base: "80%", md: "0%" }}
      >
        <Text fontSize="1xl" fontWeight="bold">
          History
        </Text>
      </Box>
      <Box
        bg="rgba(255, 255, 255, 0.6)"
        onClick={() => setSelectedContent("CheckBalance")}
        textAlign="center"
        shadow="lg"
        color="gray.800"
        p={1}
        borderWidth="1px"
        borderRadius="lg"
        cursor="pointer"
        _active={{
          bg: "orange.400",
          color: "white",
        }}
        _hover={{ bg: "orange.400", color: "white" }}
        w={{ base: "82%", md: "0%" }}
      >
        <Text fontSize="1xl" fontWeight="bold">
          Balance
        </Text>
      </Box>
    </Stack>
  );
}

export default MobileSideBar;
