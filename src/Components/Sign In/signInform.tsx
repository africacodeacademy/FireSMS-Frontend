import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Stack,
  Heading,
  FormHelperText,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignINForm() {
  const [email, setEmail] = useState("");
  const [password, setIPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(true);
  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handlePasswordChange = (e: any) => setIPassword(e.target.value);

  const emailError = email === "";
  const passwordError = password === "";

  const showLoading = () => {
    setIsSubmit(false);
  };

  const handleSignIn = (event: any) => {
    event.preventDefault();

    // back end here
  };

  return (
    <Flex w={{ base: "100%", md: "100%" }} alignItems="center" justify="center">
      <Box mt={{ base: "28%", md: "10%" }} mb={{ base: "23.5%", md: "4%" }}>
        <form method="POST" onSubmit={handleSignIn}>
          <Stack
            w={{ base: "xs", md: "sm" }}
            direction="column"
            bg="white"
            rounded={6}
            alignItems="center"
            justifyContent="center"
            pb={{ base: "2%", md: "1%" }}
            pt={{ base: "11%", md: "5%" }}
          >
            <Heading
              color="orange.400"
              pb={{ base: "8%", md: "5%" }}
              pt={{ base: "1%", md: "0%" }}
              textAlign="center"
            >
              Login
            </Heading>
            <FormControl w={{ base: "90%", md: "90%" }}>
              <FormLabel>Email</FormLabel>
              <Input
                isRequired
                type="email"
                id="email"
                placeholder="Email Address"
                aria-describedby="email-helper-text"
                value={email}
                onChange={handleEmailChange}
              />
              {!emailError ? (
                <FormHelperText />
              ) : (
                <FormHelperText color="red">
                  Invalid Email Address
                </FormHelperText>
              )}
            </FormControl>
            <FormControl w={{ base: "90%", md: "90%" }}>
              <FormLabel>Password</FormLabel>
              <Input
                isRequired
                type="password"
                id="password"
                placeholder="Password"
                aria-describedby="password-helper-text"
                value={password}
                onChange={handlePasswordChange}
              />

              {!passwordError ? (
                <FormHelperText />
              ) : (
                <FormHelperText color="red">Invalid password</FormHelperText>
              )}
            </FormControl>
            <FormControl textAlign="center" pb={{ base: "3%", md: "3%" }}>
              {isSubmit ? (
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
                  Submit
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
                >
                  Submit
                </Button>
              )}

              <Link to="/SignUp">
                <Button
                  size={{ base: "md", md: "md" }}
                  w="90%"
                  mt="5%"
                  colorScheme="white"
                  color="gray.900"
                  bg="#CBD5E0"
                  _hover={{ bg: "#CBD5E0", color: "#FF5F0F" }}
                  variant="ghost"
                  type="submit"
                >
                  Register
                </Button>
              </Link>
            </FormControl>
            <Text
              cursor="pointer"
              pb={{ base: "4%", md: "2%" }}
              color="gray.800"
            >
              <Link to="/ResetPassword">Forgot password</Link>
            </Text>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}
export default SignINForm;
