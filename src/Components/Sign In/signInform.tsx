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
import { useForm } from "react-hook-form";

function SignINForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [isSubmit, setIsSubmit] = useState(true);

  const showLoading = () => {
    setIsSubmit(false);
  };

  const onSubmit = () => {
    showLoading();
  };

  return (
    <Flex w={{ base: "100%", md: "100%" }} alignItems="center" justify="center">
      <Box mt={{ base: "28%", md: "10%" }} mb={{ base: "23.5%", md: "4%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              Login
            </Heading>
            <FormControl w={{ base: "90%", md: "90%" }}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                id="email"
                placeholder="Email Address"
                aria-describedby="email-helper-text"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("emailAddress", { required: true })}
              />
              <FormHelperText color="red">
                {errors.emailAddress?.type === "required" &&
                  "Email is required"}
              </FormHelperText>
            </FormControl>
            <FormControl w={{ base: "90%", md: "90%" }}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                aria-describedby="password-helper-text"
                // eslint-disable-next-line react/jsx-props-no-spreading
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
            <FormControl textAlign="center" pb={{ base: "3%", md: "3%" }}>
              {isSubmit ? (
                <Button
                  size={{ base: "md", md: "md" }}
                  w={{ base: "90%", md: "90%" }}
                  mt="5%"
                  colorScheme="white"
                  color="white"
                  type="submit"
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
