import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Heading,
  Flex,
  FormHelperText,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormValues = {
  email: string;
};

function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data, e) => {
    e?.preventDefault();
    setLoading(true);
    setStatus("Server Response");
    reset();
    // eslint-disable-next-line no-console
    console.log(data.email);
  });

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Stack
        w="90%"
        mt={{ base: "25%", md: "5%" }}
        mb={{ base: "99%", md: "18%" }}
        maxW={{ base: "sm", md: "md" }}
        rounded={6}
        direction="column"
        pb={{ base: "2%", md: "1%" }}
        pt={{ base: "11%", md: "3%" }}
      >
        <form onSubmit={onSubmit}>
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
          <FormControl>
            <FormHelperText
              pb={{ base: "1%", md: "1%" }}
              textAlign="center"
              fontFamily="sans-serif"
              fontWeight="semi-bold"
              color="red.500"
            >
              {status}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel
              textAlign="center"
              color="white"
              pb={{ base: "4%", md: "2%" }}
            >
              Please provide the email address that you signed up with
            </FormLabel>
            <Input
              w="full"
              textAlign="center"
              color="white"
              type="email"
              id="email"
              placeholder="Your Email Address"
              aria-describedby="email-helper-text"
              {...register("email", { required: true })}
            />
            <FormHelperText color="red.500" textAlign="center">
              {errors.email?.type === "required" && "Email Address is required"}
            </FormHelperText>
          </FormControl>
          <FormControl textAlign="center" pb={{ base: "3%", md: "3%" }}>
            <Button
              size={{ base: "md", md: "md" }}
              w="full"
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
        </form>
      </Stack>
    </Flex>
  );
}
export default ForgotPasswordForm;
