import { Box, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      pt={{ base: "8%", md: "2%" }}
      pb={{ base: "8%", md: "2%" }}
      borderColor="gray.800"
      borderTopColor={{ base: "gray.300", md: "gray.800" }}
      borderWidth="0.5px"
    >
      <Text alignItems="center" textAlign="center" color="white">
        Powered by Africa Code Foundry
      </Text>
    </Box>
  );
}
export default Footer;
