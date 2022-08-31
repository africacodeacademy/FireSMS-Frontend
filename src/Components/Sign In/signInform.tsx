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
  Toast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthUser from "../Auth/AuthUser";

type FormValues = {
  email: string;
  password: string;
};

function SignINForm() {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const showToast = () => {
    Toast({
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
    setLoginStatus("Server Response");
    // eslint-disable-next-line no-console
    console.log(data.email, data.password);
    reset();
    showToast();
    AuthUser.login(() => {
      navigate("/DashBoard");
    });
  });

  return (
    <Flex w="full" alignItems="center" justify="center">
      <Box mt={{ base: "28%", md: "10%" }} mb={{ base: "27.5%", md: "4%" }}>
        <form onSubmit={onSubmit}>
          <Stack
            w={{ base: "sm", md: "sm" }}
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
            <FormControl px={3} w={{ base: "full", md: "90%" }}>
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
            <FormControl px={3} w={{ base: "full", md: "90%" }}>
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
            <FormControl px={3} w={{ base: "full", md: "90%" }}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                aria-describedby="password-helper-text"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
              />
              <FormHelperText color="red">
                {errors.password?.type === "minLength" &&
                  "Entered Password is less than 6 charactors"}
                {errors.password?.type === "maxLength" &&
                  "Entered Password is more than 12 charactors"}
              </FormHelperText>
            </FormControl>
            <FormControl
              textAlign="center"
              px={{ base: "3", md: "7" }}
              pb={{ base: "3%", md: "3%" }}
            >
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
