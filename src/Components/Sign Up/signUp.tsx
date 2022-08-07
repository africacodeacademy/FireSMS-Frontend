import { Box, Stack, Text } from "@chakra-ui/react";
import Footer from "../Footer/footer";
import NavHeader from "../Navigation/NavHeader";

function SignUp() {
  return (
    <Stack bg="gray.800">
      <NavHeader />
      <Box textAlign="center">
        <Text color="white" pt="10%">
          Sign Up!!!!
        </Text>
      </Box>
      <Footer />
    </Stack>
  );
}
export default SignUp;
