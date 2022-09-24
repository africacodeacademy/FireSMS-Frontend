import { Box, Stack, Text } from "@chakra-ui/react";
import Allcharts from "../../../charts/allCharts";

function CheckBalance() {
  return (
    <Box
      id="cards"
      alignItems="center"
      pb={{ base: "20%", md: "5%" }}
      justifyContent="center"
      w="100%"
    >
      <Stack
        spacing={5}
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
        mb="4%"
        w="100%"
      >
        <Stack
          bg="white"
          alignItems={{ base: "center", md: "left" }}
          justifyContent="left"
          shadow="lg"
          p={2}
          pt="3%"
          pb="4%"
          borderWidth="1px"
          borderRadius="lg"
          w={{ base: "100%", md: "32%" }}
        >
          <Text
            color="gray.700"
            fontSize="2xl"
            pb="1"
            fontFamily="Arial"
            fontWeight="bold"
          >
            Available Balance
          </Text>
          <Text fontSize="xl" color="blue.500" fontWeight="semibold">
            25 Points
          </Text>
        </Stack>
      </Stack>
      <Allcharts />
    </Box>
  );
}
export default CheckBalance;
