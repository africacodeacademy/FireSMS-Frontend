import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Heading,
  Flex,
  Box,
  FormHelperText,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";

function ForgotPasswordForm() {
  const [isCreateAccount, setCreateAccount] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = () => {
    setCreateAccount(false);
  };
  return (
    <Flex w={{ base: "100%", md: "100%" }} alignItems="center" justify="center">
      <Box mt={{ base: "28%", md: "10%" }} mb={{ base: "49%", md: "18%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            w={{ base: "xs", md: "lg" }}
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
              fontFamily="sans-serif"
              fontWeight="bold"
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
                textAlign="center"
                color="white"
                type="email"
                id="email"
                placeholder="Your Email Address"
                aria-describedby="email-helper-text"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("email", { required: true })}
              />
              <FormHelperText color="red" textAlign="center">
                {errors.email?.type === "required" && "Email is required"}
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
                  type="submit"
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
