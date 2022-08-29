import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  Stack,
  Heading,
  Box,
  Select,
  FormHelperText,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../../APIs/axiosBaseURL";

type FormValues = {
  email: string;
  country: string;
  phone: number;
  password: string;
  checkBox: boolean;
};

function SignUpForm() {
  const [loginStatus, setLoginStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const REGISTRATION_URL = "/user";
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data, e) => {
    e?.preventDefault();
    setLoading(true);
    try {
      await axios
        .post(REGISTRATION_URL, JSON.stringify({ data }), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            setLoading(false);
            reset();
            navigate("/DashBoard");
          }
        });
    } catch (err: any) {
      setLoading(false);
      if (!err?.response) {
        setLoginStatus("No Server Response");
      } else if (err.response?.status === 409) {
        setLoginStatus("User Details Already Exists");
      } else {
        setLoginStatus("User Registration Failed");
      }
    }
  });

  return (
    <Flex w={{ base: "100%", md: "100%" }} alignItems="center" justify="center">
      <Box mt={{ base: "28%", md: "10%" }} mb={{ base: "23.5%", md: "4%" }}>
        <form onSubmit={onSubmit}>
          <Stack
            w={{ base: "sm", md: "sm" }}
            direction="column"
            bg="white"
            rounded={6}
            alignItems="center"
            justifyContent="center"
            pb={{ base: "2%", md: "1%" }}
            pt={{ base: "11%", md: "8%" }}
          >
            <Heading
              w="80%"
              color="orange.400"
              textAlign="center"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              Create Account
            </Heading>
            <FormControl w={{ base: "70%", md: "70%" }}>
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
            <FormControl w={{ base: "70%", md: "70%" }}>
              <FormLabel>Email Address</FormLabel>
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
            <FormControl w={{ base: "70%", md: "70%" }}>
              <FormLabel htmlFor="Country Name">Country</FormLabel>
              <Select
                id="country"
                placeholder="Select Country"
                {...register("country", { required: true })}
              >
                <option value="Lesotho">Lesotho</option>
                <option value="Botwsana">Botwsana</option>
              </Select>
              <FormHelperText color="red">
                {errors.country?.type === "required" &&
                  "Country Name is required"}
              </FormHelperText>
            </FormControl>
            <FormControl w={{ base: "70%", md: "70%" }}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="telephone"
                id="phone"
                placeholder="Phone Number"
                aria-describedby="number-helper-text"
                {...register("phone", {
                  required: true,
                  minLength: 8,
                  maxLength: 15,
                })}
              />
              <FormHelperText color="red">
                {errors.phone?.type === "minLength" &&
                  "Entered number is less than 8 digits"}
                {errors.phone?.type === "maxLength" &&
                  "Entered number is more than 15 digits"}
              </FormHelperText>
            </FormControl>
            <FormControl w={{ base: "70%", md: "70%" }}>
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
            <FormControl w={{ base: "70%", md: "70%" }}>
              <Checkbox
                id="checkBox"
                {...register("checkBox", { required: true })}
              >
                Accept Tearms and Conditions
              </Checkbox>
              <FormHelperText color="red">
                {errors.checkBox?.type === "required" &&
                  "Terms and conditions need to be accepted"}
              </FormHelperText>
            </FormControl>
            <FormControl textAlign="center" pb={{ base: "5%", md: "7%" }}>
              <Button
                size={{ base: "md", md: "md" }}
                w="70%"
                mt="5%"
                colorScheme="white"
                color="white"
                type="submit"
                bg="orange.400"
                _hover={{ bg: "teal", color: "white" }}
                variant="ghost"
                isLoading={loading}
                loadingText="Creating Account"
              >
                Create Account
              </Button>

              <Link to="/SignIn">
                <Button
                  size={{ base: "md", md: "md" }}
                  w="70%"
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
