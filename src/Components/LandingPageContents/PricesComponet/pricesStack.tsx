import { Box, Stack, Text } from "@chakra-ui/react";
import PricesFormat from "./pricesFormat";

function PricesStak() {
  return (
    <Box bg="gray.800" alignItems="center">
      <Text color="white" textAlign="center" fontSize="3xl">
        Plans that fit your need
      </Text>
      <Text color="gray.500" textAlign="center">
        Start with 10 free messages. No credit card needed.
      </Text>
      <Stack
        spacing={8}
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
      >
        <PricesFormat title="Hobby" subTitle="less than 1k" desc="R0,15/sms" />
        <PricesFormat title="Startup" subTitle="1k+" desc="R0,13/sms" />
        <PricesFormat title="Enterprise" subTitle="10k+" desc="R0,12/sms" />
      </Stack>
    </Box>
  );
}
export default PricesStak;
