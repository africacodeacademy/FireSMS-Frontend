import { Box, Flex, Button, Text } from "@chakra-ui/react";

function Plans() {
  return (
    <Box
      w="100%"
      textAlign="center"
      color="white"
      bg="gray.800"
      pt="10%"
      m="0 auto"
      alignItems="center"
    >
      <Flex justify="center">
        <Text
          fontSize="6xl"
          fontWeight="bold"
          color="white"
          textAlign="center"
          pb="2%"
        >
          Developer first SMS <br />
          platform
        </Text>
      </Flex>
      <Flex gap="10" mr="4" justify="center" pb="5%">
        <Button
          pt="4"
          pr="4"
          pl="4"
          pb="4"
          fontWeight="semibold"
          color="white"
          size="lg"
          h="62.7px"
          w="180px"
          bg="#FF5F0F"
          _hover={{ bg: "#CBD5E0", color: "#FF5F0F" }}
          variant="ghost"
        >
          Create Account
        </Button>
        <Button
          pt="4"
          pr="4"
          pl="4"
          pb="4"
          fontWeight="semibold"
          size="lg"
          h="62.7px"
          w="180px"
          bg="gray.800"
          variant="outline"
          colorScheme="#FF5F0F"
          color="#FF5F0F"
          _hover={{ bg: "#CBD5E0", color: "#FF5F0F" }}
        >
          Developers
        </Button>
      </Flex>
    </Box>
  );
}
export default Plans;
