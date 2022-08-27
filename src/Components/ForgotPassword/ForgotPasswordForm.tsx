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

type FormValues = {
  email: string;
};

function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data, e) => {
    e?.preventDefault();
    setLoading(true);
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
  });

  return (
    <Flex w={{ base: "100%", md: "100%" }} alignItems="center" justify="center">
      <Box mt={{ base: "28%", md: "10%" }} mb={{ base: "99%", md: "18%" }}>
        <form onSubmit={onSubmit}>
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
                {...register("email", { required: true })}
              />
              <FormHelperText color="red" textAlign="center">
                {errors.email?.type === "required" &&
                  "Email Address is required"}
              </FormHelperText>
            </FormControl>
            <FormControl textAlign="center" pb={{ base: "3%", md: "3%" }}>
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
                isLoading={loading}
                loadingText="Submitting"
              >
                Continue
              </Button>
            </FormControl>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}
export default ForgotPasswordForm;
