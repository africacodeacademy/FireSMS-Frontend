import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Heading,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

function ForgotPasswordForm() {
  const [email, setEmail] = useState();
  const [isCreateAccount, setCreateAccount] = useState(true);
  const handleEmailChange = (e: any) => setEmail(e.target.value);

  const showLoading = () => {
    setCreateAccount(false);
  };

  const handleCreateAccount = (event: any) => {
    event.preventDefault();
    // back end here
  };
  return (
    <Flex w={{ base: "100%", md: "100%" }} alignItems="center" justify="center">
      <Box mt={{ base: "28%", md: "10%" }} mb={{ base: "49%", md: "18%" }}>
        <form method="POST" onSubmit={handleCreateAccount}>
          <Stack
            w={{ base: "xs", md: "sm" }}
            direction="column"
            rounded={6}
            alignItems="center"
            justifyContent="center"
            pb={{ base: "2%", md: "1%" }}
            pt={{ base: "11%", md: "5%" }}
          >
            <Heading
              color="orange.400"
              pb={{ base: "4%", md: "2%" }}
              pt={{ base: "1%", md: "0%" }}
              textAlign="center"
            >
              Forgot Password
            </Heading>
            <FormControl w={{ base: "90%", md: "90%" }}>
              <FormLabel
                textAlign="center"
                color="white"
                pb={{ base: "4%", md: "2%" }}
              >
                Please provide the email address that you signed up with
              </FormLabel>
              <Input
                isRequired
                type="email"
                id="email"
                placeholder="Your Email Address"
                aria-describedby="email-helper-text"
                value={email}
                onChange={handleEmailChange}
              />
            </FormControl>
            <FormControl textAlign="center" pb={{ base: "3%", md: "3%" }}>
              {isCreateAccount ? (
                <Button
                  size={{ base: "md", md: "md" }}
                  w={{ base: "90%", md: "90%" }}
                  mt="5%"
                  colorScheme="white"
                  color="white"
                  type="submit"
                  onClick={showLoading}
                  bg="orange.400"
                  _hover={{ bg: "teal", color: "white" }}
                  variant="ghost"
                >
                  Continue
                </Button>
              ) : (
                <Button
                  w={{ base: "90%", md: "90%" }}
                  mt="5%"
                  bg="orange.400"
                  colorScheme="white"
                  color="white"
                  isLoading
                  size={{ base: "md", md: "md" }}
                  loadingText="Submitting"
                />
              )}
            </FormControl>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}
export default ForgotPasswordForm;
