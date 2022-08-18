import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Heading,
  Flex,
  Box,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [email, setEmail] = useState();
  const [password, setIPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [isCreateAccount, setCreateAccount] = useState(true);
  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handlePasswordChange = (e: any) => setIPassword(e.target.value);
  const handlePhoneNumber = (e: any) => setPhoneNumber(e.target.value);

  const showLoading = () => {
    setCreateAccount(false);
  };

  const handleCreateAccount = async (event: any) => {
    event.preventDefault();
  };

  return (
    <Flex w={{ base: "100%", md: "100%" }} alignItems="center" justify="center">
      <Box mt={{ base: "28%", md: "10%" }} mb={{ base: "23.5%", md: "2%" }}>
        <form method="POST" onSubmit={handleCreateAccount}>
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
              Create Account
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
            </FormControl>
            <FormControl w={{ base: "90%", md: "90%" }}>
              <FormLabel>Country</FormLabel>
              <Select placeholder="Select country">
                <option>Lesotho</option>
                <option>Botwsana</option>
              </Select>
            </FormControl>
            <FormControl w={{ base: "90%", md: "90%" }}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                isRequired
                type="number"
                id="phoneNumber"
                placeholder="Phone Numnber"
                aria-describedby="number-helper-text"
                value={phoneNumber}
                onChange={handlePhoneNumber}
              />
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
                  Create Account
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
                  loadingText="Creating Account"
                >
                  Create Account
                </Button>
              )}

              <Link to="/SignIn">
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
                  Login
                </Button>
              </Link>
            </FormControl>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}
export default SignUpForm;
