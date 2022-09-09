import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Stack,
  Heading,
  FormHelperText,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../../APIs/axiosBaseURL";

type FormValues = {
  userName: string;
  password: string;
};

function SignINForm() {
  const LOGIN_URL = "/user/login";
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const showToast = () => {
    toast({
      position: "top",
      title: "Logged In Successfully..",
      status: "success",
      duration: 2500,
      isClosable: true,
    });
  };

  const onSubmit = handleSubmit(async (mydata, e) => {
    e?.preventDefault();
    setLoading(true);

    try {
      await axios
        .post(
          LOGIN_URL,
          JSON.stringify({
            emailOrPhone: mydata.userName,
            password: mydata.password,
          }),
          {
            headers: { "Content-Type": "application/json" },
          },
        )
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            localStorage.setItem("access_token", response.data.accessToken);
            localStorage.setItem("session", response.data);
            setLoading(false);
            reset();
            showToast();
            navigate("/DashBoard");
          }
        });
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
  });

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Stack
        bg="white"
        rounded={6}
        spacing={4}
        w="90%"
        maxW="sm"
        boxShadow="lg"
        p={6}
        my={12}
      >
        <form onSubmit={onSubmit}>
          <Heading
            color="orange.400"
            fontSize={{ base: "3xl", md: "4xl" }}
            pt={{ base: "1%", md: "0%" }}
            textAlign="center"
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            Login
          </Heading>
          <FormControl>
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
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              id="userName"
              placeholder="Email or Phone Number"
              aria-describedby="email-helper-text"
              {...register("userName", { required: true })}
            />
            <FormHelperText color="red">
              {errors.userName?.type === "required" &&
                "Email Address or Phone number required"}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              aria-describedby="password-helper-text"
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{10,32}$/,
              })}
            />
            <FormHelperText color="red">
              {errors.password?.type === "required" && "Password is required"}
              {errors.password?.type === "pattern" &&
                "Password should at least include 1 Symbol,1 Uppercase, 7 Lowercase & 1 Number,"}
            </FormHelperText>
          </FormControl>
          <FormControl textAlign="center" pb={{ base: "4.6%", md: "4.5%" }}>
            <Button
              size={{ base: "md", md: "md" }}
              w="full"
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

            <Link id="SignUp" to="/signUp">
              <Button
                size={{ base: "md", md: "md" }}
                w="full"
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
            textAlign="center"
            cursor="pointer"
            pb={{ base: "4%", md: "2%" }}
            color="gray.800"
          >
            <Link id="Forgot" to="/forgotPassword">
              Forgot password
            </Link>
          </Text>
        </form>
      </Stack>
    </Flex>
  );
}
export default SignINForm;
