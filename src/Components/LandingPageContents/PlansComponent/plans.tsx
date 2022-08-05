import { Box, Flex, Button, Text } from "@chakra-ui/react";
import PricesStak from "../PricesComponet/pricesStack";

function Plans() {
  return (
    <Box
      w="100%"
      textAlign={{ base: "center", md: "center" }}
      color="white"
      bg="gray.800"
      pt={{ base: "30%", md: "13%" }}
      m="0 auto"
      alignItems="center"
    >
      <Flex justify="center">
        <Text
          fontSize={{ base: "3xl", md: "6xl" }}
          fontWeight="bold"
          color="white"
          textAlign="center"
          pb={{ base: "8%", md: "2%" }}
        >
          Developer first SMS <br />
          <Text pt="0">platform</Text>
        </Text>
      </Flex>
      <Flex
        gap="10"
        p="4"
        textAlign={{ base: "center", md: "center" }}
        justify={{ base: "center", md: "center" }}
        pb={{ base: "20%", md: "6%" }}
        direction={{ base: "column", md: "row" }}
        w={{ base: "100%", md: "100%" }}
      >
        <Button
          pt="5"
          pr="8"
          pl="8"
          pb="5"
          fontWeight="semibold"
          color="white"
          size={{ base: "lg", md: "2xl" }}
          bg="#FF5F0F"
          _hover={{ bg: "#CBD5E0", color: "#FF5F0F" }}
          variant="ghost"
        >
          Create Account
        </Button>
        <Button
          pt="5"
          pr="8"
          pl="8"
          pb="5"
          fontWeight="semibold"
          size={{ base: "lg", md: "2xl" }}
          bg="gray.800"
          variant="outline"
          colorScheme="#FF5F0F"
          color="#FF5F0F"
          _hover={{ bg: "#CBD5E0", color: "#FF5F0F" }}
        >
          Developers
        </Button>
      </Flex>
      <PricesStak />
    </Box>
  );
}
export default Plans;
