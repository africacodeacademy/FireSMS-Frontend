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
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignUpForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [isCreateAccount, setCreateAccount] = useState(true);

  const showLoading = () => {
    setCreateAccount(false);
  };

  const onSubmit = () => {
    showLoading();
  };

  return (
    <Flex w={{ base: "100%", md: "100%" }} alignItems="center" justify="center">
      <Box mt={{ base: "28%", md: "10%" }} mb={{ base: "23.5%", md: "2%" }}>
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
            >
              Create Account
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
              <FormLabel>Country</FormLabel>
              <Select placeholder="Select country">
                <option>Lesotho</option>
                <option>Botwsana</option>
              </Select>
            </FormControl>
            <FormControl w={{ base: "90%", md: "90%" }}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="number"
                id="phoneNumber"
                placeholder="Phone Numnber"
                aria-describedby="number-helper-text"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("phoneNumber", {
                  required: true,
                  minLength: 8,
                  maxLength: 15,
                })}
              />
              <FormHelperText color="red">
                {errors.phoneNumber?.type === "minLength" &&
                  "Entered number is less than 8 digits"}
                {errors.phoneNumber?.type === "maxLength" &&
                  "Entered number is more than 15 digits"}
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
              {isCreateAccount ? (
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
