import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Stack,
  Text,
  Button,
  useToast,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "../../../APIs/axiosBaseURL";
import { DashBoardContext } from "../DashboardContext/dashboardContext";

type FormValues = {
  smsText: string;
  receivernumber: string;
  fromUser: string;
};

export default function SmsCard() {
  const { usersID } = useContext(DashBoardContext);
  const token = localStorage.getItem("access_token");
  const [status, setStatus] = useState("");
  const toast = useToast();
  const SMS_URL = "/sms";

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const showToast = () => {
    toast({
      position: "top",
      title: "SMS Send!",
      status: "success",
      duration: 2500,
      isClosable: true,
    });
  };

  const onSubmit = handleSubmit(async (mydata, e) => {
    e?.preventDefault();

    try {
      await axios
        .post(
          SMS_URL,
          {
            userId: usersID,
            action: "message_send",
            text: mydata.smsText,
            to: mydata.receivernumber,
            from: mydata.fromUser,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        )
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            showToast();
            reset();
          }
        });
    } catch (err: any) {
      if (!err?.response) {
        setStatus("No Server Response");
      } else {
        setStatus("SMS send Failed");
      }
    }
  });

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Send sms</Heading>
          <Text
            textAlign="center"
            fontFamily="sans-serif"
            fontWeight="semi-bold"
            color="red"
          >
            {status}
          </Text>
        </Stack>
        <Box
          rounded="lg"
          bg={useColorModeValue("white", "gray.700")}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={onSubmit}>
              <FormControl>
                <FormLabel>Send SMS TO</FormLabel>
                <Input
                  type="number"
                  id="number"
                  placeholder="Receiver's Phone Number"
                  aria-describedby="number-helper-text"
                  {...register("receivernumber", {
                    required: true,
                    minLength: 8,
                    maxLength: 15,
                  })}
                />
                <FormHelperText color="red">
                  {errors.receivernumber?.type === "required" &&
                    "Phone number is required"}
                  {errors.receivernumber?.type === "minLength" &&
                    "Entered number is less than 8 digits"}
                  {errors.receivernumber?.type === "maxLength" &&
                    "Entered number is more than 15 digits"}
                </FormHelperText>
              </FormControl>{" "}
              <FormControl>
                <FormLabel>SMS From</FormLabel>
                <Input
                  type="text"
                  id="fromUser"
                  placeholder="Sender Name or Phone number "
                  aria-describedby="number-helper-text"
                  {...register("fromUser", {
                    required: true,
                  })}
                />
                <FormHelperText color="red">
                  {errors.fromUser?.type === "required" &&
                    "Phone number or Name is required"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>SMS Text</FormLabel>
                <Input
                  type="text"
                  id="smsText"
                  placeholder="SMS Text"
                  aria-describedby="email-helper-text"
                  {...register("smsText", { required: true })}
                />
                <FormHelperText color="red">
                  {errors.smsText?.type === "required" &&
                    "SMS text is required"}
                </FormHelperText>
              </FormControl>
              <Stack spacing={10}>
                <Button
                  type="submit"
                  bg="blue.400"
                  color="white"
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Send
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
