import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  Stack,
  Heading,
  Select,
  FormHelperText,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../../APIs/axiosBaseURL";

type FormValues = {
  email: string;
  country: string;
  phone: string;
  password: string;
  checkBox: boolean;
};

function SignUpForm() {
  const [loginStatus, setLoginStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const REGISTRATION_URL = "/api/v1/user";
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
      title: "Registrated Successfully",
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
          REGISTRATION_URL,
          {
            email: mydata.email,
            country: mydata.country,
            phone: mydata.phone,
            password: mydata.password,
          },
          {
            headers: { "Content-Type": "application/json" },
          },
        )
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            setLoading(false);
            reset();
            showToast();
            navigate("/signIn");
          }
        });
    } catch (err: any) {
      setLoading(false);
      if (!err?.response) {
        setLoginStatus("No Server Response");
      } else if (err.response?.status === 400) {
        setLoginStatus("User Details Already Exists");
      } else {
        setLoginStatus("User Registration Failed");
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
        mt={{ base: "20%", md: "9%" }}
        pb={{ base: "2%", md: "3%" }}
        pt={{ base: "1%", md: "2%" }}
        p={{ base: "2", md: "4" }}
        my={12}
      >
        <form onSubmit={onSubmit}>
          <Heading
            color="orange.400"
            textAlign="center"
            fontFamily="sans-serif"
            fontWeight="bold"
            fontSize={{ base: "3xl", md: "4xl" }}
            pt={{ base: "1%", md: "1%" }}
          >
            Create Account
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
          <FormControl>
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
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
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
              {errors.phone?.type === "required" && "Phone number is required"}
              {errors.phone?.type === "minLength" &&
                "Entered number is less than 8 digits"}
              {errors.phone?.type === "maxLength" &&
                "Entered number is more than 15 digits"}
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
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{10,30}$/,
                minLength: 10,
                maxLength: 30,
              })}
            />
            <FormHelperText color="red">
              {errors.password?.type === "required" && "Password is required"}
              {errors.password?.type === "minLength" &&
                "Required Password minLength is 10"}
              {errors.password?.type === "maxLength" &&
                "Required Password maxLength is 30"}
              {errors.password?.type === "pattern" &&
                "Password should at least include 1 Symbol,1 Uppercase, 1 Lowercase & 1 Number"}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <Checkbox
              id="checkBox"
              {...register("checkBox", { required: true })}
            >
              Accept Terms and Conditions
            </Checkbox>
            <FormHelperText color="red">
              {errors.checkBox?.type === "required" &&
                "26773867278
26776495683 need to be accepted"}
            </FormHelperText>
          </FormControl>
          <FormControl>
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
              loadingText="Creating Account"
            >
              Create Account
            </Button>

            <Link to="/signIn">
              <Button
                size={{ base: "md", md: "md" }}
                w="full"
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
        </form>
      </Stack>
    </Flex>
  );
}
export default SignUpForm;
