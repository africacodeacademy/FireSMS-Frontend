import { Box, Button, Stack, Text } from "@chakra-ui/react";
import SMSBarChart from "./smsBarChart";
import SMSLineChart from "./smsLineChart";

function ChartFormat() {
  return (
    <Box w="100%" bg="white" mb="40px">
      <Stack
        spacing={{ base: "38px", md: "2%" }}
        bg="white"
        direction={{ base: "column", md: "row" }}
        w="100%"
      >
        <Stack
          borderRadius="12px"
          p="4"
          bg="rgba(22, 42, 69, 0.1)"
          w={{ base: "100%", md: "60%" }}
        >
          <Stack w="100%" mb="15px" direction="row">
            <Stack w="50%">
              <Text
                color="#000000"
                fontSize="12px"
                fontStyle="normal"
                lineHeight="20px"
                fontFamily="sans-serif"
                fontWeight="400"
              >
                OVERVIEW
              </Text>
              <Text
                color="#000000"
                fontSize="16px"
                fontStyle="normal"
                lineHeight="20px"
                fontFamily="sans-serif"
                fontWeight="600"
              >
                SMS EXPENSE VALUE
              </Text>
            </Stack>
            <Stack justifyContent="end" w="50%" direction="row">
              <Button
                textColor="white"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
                bg="#1A202C"
                fontFamily="sans-serif"
                borderRadius="4px"
                h="30px"
                w="70px"
                _hover={{
                  bg: "#FF6406",
                  color: "white",
                }}
              >
                Month
              </Button>
              <Button
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
                colorScheme="#1A202C"
                variant="outline"
                fontFamily="sans-serif"
                borderRadius="4px"
                h="30px"
                w="70px"
                _hover={{
                  bg: "#FF6406",
                  color: "white",
                  borderColor: "#FF6406",
                }}
              >
                Week
              </Button>
            </Stack>
          </Stack>
          <SMSLineChart />
        </Stack>
        <Stack
          borderRadius="12px"
          bg="#E8EAED"
          p="4"
          mb="15px"
          w={{ base: "100%", md: "40%" }}
        >
          <Stack w="100%" mb={{ base: "15px", md: "29%" }} direction="row">
            <Stack w="50%">
              <Text
                color="#000000"
                fontSize="12px"
                fontStyle="normal"
                lineHeight="20px"
                fontFamily="sans-serif"
                fontWeight="400"
              >
                USAGE
              </Text>
              <Text
                color="#000000"
                fontSize="16px"
                fontStyle="normal"
                lineHeight="20px"
                fontFamily="sans-serif"
                fontWeight="600"
              >
                TOTAL SENT
              </Text>
            </Stack>
            <Stack justifyContent="end" w="50%" direction="row">
              <Text
                color="#000000"
                fontSize="16px"
                fontStyle="normal"
                lineHeight="20px"
                fontFamily="sans-serif"
                fontWeight="600"
                mt="28px"
              >
                17,000
              </Text>
            </Stack>
          </Stack>
          <SMSBarChart />
        </Stack>
      </Stack>
    </Box>
  );
}
export default ChartFormat;
