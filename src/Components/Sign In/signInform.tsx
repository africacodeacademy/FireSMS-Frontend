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
import { Link, useNavigate } from "react-router-dom";
import axios from "../../APIs/axiosBaseURL";

function SignINForm() {
  const LOGIN_URL = "/login";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: any) => {
    setMyPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ emailOrPhone: email, password: myPassword }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );
      setLoading(false);
      // eslint-disable-next-line no-console
      console.log(response.status);
      navigate("/DashBoard");
    } catch (err: any) {
      setLoading(false);
      if (!err?.response) {
        setLoginStatus("No Server Response");
      } else if (err.response?.status === 400) {
        setLoginStatus("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setLoginStatus("Unauthorized");
      } else {
        setLoginStatus("Login Failed");
      }
    }
  };

  return (
    <Flex w={{ base: "100%", md: "100%" }} alignItems="center" justify="center">
      <Box mt={{ base: "28%", md: "10%" }} mb={{ base: "23.5%", md: "4%" }}>
        <form onSubmit={handleSubmit}>
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
              pt={{ base: "1%", md: "0%" }}
              textAlign="center"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              Login
            </Heading>
            <FormControl w={{ base: "90%", md: "90%" }}>
              <FormHelperText
                pb={{ base: "5%", md: "5%" }}
                textAlign="center"
                fontFamily="sans-serif"
                fontWeight="semi-bold"
                color="red"
              >
                {loginStatus}
              </FormHelperText>
            </FormControl>
            <FormControl w={{ base: "90%", md: "90%" }}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                id="email"
                placeholder="Email Address"
                aria-describedby="email-helper-text"
                value={email}
                onChange={handleEmail}
              />
              <FormHelperText color="red" />
            </FormControl>
            <FormControl w={{ base: "90%", md: "90%" }}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                aria-describedby="password-helper-text"
                value={myPassword}
                onChange={handlePassword}
              />
              <FormHelperText color="red" />
            </FormControl>
            <FormControl textAlign="center" pb={{ base: "3%", md: "3%" }}>
              <Button
                size={{ base: "md", md: "md" }}
                w={{ base: "90%", md: "90%" }}
                mt="5%"
                colorScheme="white"
                id="submitBtn"
                color="white"
                type="submit"
                bg="orange.400"
                _hover={{ bg: "teal", color: "white" }}
                variant="ghost"
                isLoading={loading}
                loadingText="Submitting"
              >
                Submit
              </Button>

              <Link id="SignUp" to="/SignUp">
                <Button
                  size={{ base: "md", md: "md" }}
                  w="90%"
                  mt="5%"
                  colorScheme="white"
                  color="gray.900"
                  bg="#CBD5E0"
                  _hover={{ bg: "#CBD5E0", color: "#FF5F0F" }}
                  variant="ghost"
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
              <Link id="Forgot" to="/ResetPassword">
                Forgot password
              </Link>
            </Text>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}
export default SignINForm;
