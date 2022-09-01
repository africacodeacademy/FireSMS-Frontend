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
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthUser from "../Auth/AuthUser";
import axios from "../../APIs/axiosBaseURL";

type FormValues = {
  email: string;
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

  useEffect(() => {
    AuthUser.logout(() => {
      navigate("/SignIn");
    });
  }, [navigate]);

  const showToast = () => {
    toast({
      position: "top",
      title: "Logged In Successfully..",
      status: "success",
      duration: 2500,
      isClosable: true,
    });
  };

  const onSubmit = handleSubmit(async (data, e) => {
    e?.preventDefault();
    setLoading(true);

    try {
      await axios
        .post(LOGIN_URL, JSON.stringify({ data }), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            setLoading(false);
            reset();
            showToast();
            AuthUser.login(() => {
              navigate("/dashBoard");
            });
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
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              id="email"
              placeholder="Email Address"
              aria-describedby="email-helper-text"
              {...register("email", { required: true })}
            />
            <FormHelperText color="red">
              {errors.email?.type === "required" && "Email is required"}
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
                minLength: 6,
                maxLength: 32,
              })}
            />
            <FormHelperText color="red">
              {errors.password?.type === "minLength" &&
                "Entered Password is less than 6 charactors"}
              {errors.password?.type === "maxLength" &&
                "Entered Password is more than 32 charactors"}
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

            <Link id="SignUp" to="/SignUp">
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
            <Link id="Forgot" to="/ResetPassword">
              Forgot password
            </Link>
          </Text>
        </form>
      </Stack>
    </Flex>
  );
}
export default SignINForm;
