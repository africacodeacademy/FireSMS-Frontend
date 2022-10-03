import {
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Stack,
  Text,
  Button,
  useToast,
  Heading,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  smsText: string;
  receivernumber: string;
  fromUser: string;
};

function SMSBatch() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const toast = useToast();

  const {
    register,
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
    setLoading(true);
    // eslint-disable-next-line no-console
    console.log(mydata.receivernumber);
    // eslint-disable-next-line no-console
    console.log(mydata.smsText);
    // eslint-disable-next-line no-console
    console.log(mydata.fromUser);
    showToast();
    setStatus("");
    setLoading(false);
  });
  return (
    <Flex align="center" justify="center" w="100%">
      <Stack mx="auto" maxW="xl" py={2} px={6} w="100%">
        <Stack align="center">
          <Heading
            fontSize="3xl"
            fontWeight="semibold"
            textAlign="center"
            color="gray.800"
          >
            SEND BATCH
          </Heading>
          <Text
            textAlign="center"
            fontFamily="sans-serif"
            fontWeight="semi-bold"
            color="red"
          >
            {status}
          </Text>
        </Stack>
        <Flex
          rounded="lg"
          w="100%"
          bg={useColorModeValue("white", "gray.700")}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4} w="100%">
            <form onSubmit={onSubmit}>
              <FormControl>
                <FormLabel>Send SMS TO</FormLabel>
                <Textarea
                  id="number"
                  placeholder="Enter or Paste Batch Phone numbers line by line"
                  aria-describedby="number-helper-text"
                  {...register("receivernumber", {
                    required: true,
                    minLength: 8,
                    maxLength: 15,
                  })}
                />
                <FormHelperText color="red" textAlign="left">
                  {errors.receivernumber?.type === "required" &&
                    "Phone numbers required"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>SMS Text</FormLabel>
                <Textarea
                  id="smsText"
                  aria-describedby="email-helper-text"
                  placeholder="Enter or Paste Batch Texts messages line by line"
                  {...register("smsText", { required: true })}
                />
                <FormHelperText color="red" textAlign="left">
                  {errors.smsText?.type === "required" &&
                    "SMS text messages required"}
                </FormHelperText>
              </FormControl>
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
                <FormHelperText color="red" textAlign="left">
                  {errors.fromUser?.type === "required" &&
                    "Phone number or Name is required"}
                </FormHelperText>
              </FormControl>
              <Stack spacing={10} mt={5}>
                <Button
                  textAlign="center"
                  type="submit"
                  bg="blue.400"
                  color="white"
                  _hover={{ bg: "teal.500", color: "white" }}
                  variant="ghost"
                  loadingText="Sending SMS"
                  isLoading={loading}
                >
                  Send
                </Button>
              </Stack>
            </form>
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
}
export default SMSBatch;
