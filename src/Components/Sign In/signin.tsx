import { Box, Stack, Text } from "@chakra-ui/react";
import Footer from "../Footer/footer";
import NavHeader from "../Navigation/NavHeader";

function SignIn() {
  return (
    <Stack bg="gray.800">
      <NavHeader />
      <Box>
        <Text color="white" pt="10%" textAlign="center">
          Sign In
        </Text>
      </Box>
      <Footer />
    </Stack>
  );
}
export default SignIn;
