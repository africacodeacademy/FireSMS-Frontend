import {
  Flex,
  FormControl,
  FormLabel,
  Stack,
  Text,
  Button,
  useToast,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useCSVReader } from "react-papaparse";

function SMSBatch() {
  const { CSVReader } = useCSVReader();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const toast = useToast();
  let fileData: { text: any; to: any; from: any }[] = [];

  const showToast = () => {
    toast({
      position: "top",
      title: "SMS Send!",
      status: "success",
      duration: 2500,
      isClosable: true,
    });
  };
  const FailToast = () => {
    toast({
      position: "top",
      title: "Failed....Uplaod File First",
      status: "error",
      duration: 2500,
      isClosable: true,
    });
  };

  const clearArray = () => {
    fileData = [];
  };

  const onSubmit = (e: any) => {
    e?.preventDefault();
    if (fileData.length > 0) {
      setLoading(true);

      const BatchSMSState = {
        messages: fileData,
      };
      // eslint-disable-next-line no-console
      console.log(BatchSMSState);

      showToast();
      setStatus("");
      setLoading(false);
      clearArray();
    } else {
      FailToast();
    }
  };

  return (
    <Flex align="center" justify="center" w="100%">
      <Stack
        mx="auto"
        maxW="xl"
        py={2}
        px={6}
        w="100%"
        mb={{ base: "50%", md: "1%" }}
      >
        <Stack align="center">
          <Heading
            fontSize="3xl"
            fontWeight="semibold"
            textAlign="center"
            color="gray.800"
            fontFamily="arial"
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
                <CSVReader
                  onUploadAccepted={(results: any) => {
                    // eslint-disable-next-line no-plusplus
                    for (let i = 1; i < results.data.length; i++) {
                      const phone = results.data[i][0].split(/\n/);
                      const mytext = results.data[i][1];
                      const sender = results.data[i][2];
                      fileData.push({ text: mytext, to: phone, from: sender });
                    }
                  }}
                >
                  {({
                    getRootProps,
                    acceptedFile,
                    ProgressBar,
                    getRemoveFileProps,
                  }: any) => (
                    <Stack>
                      <FormLabel textAlign="center">
                        File with Phone numbers, Messages and a sender
                      </FormLabel>
                      <div>
                        <Button
                          onClick={clearArray}
                          textAlign="center"
                          bg="teal.400"
                          mb="2%"
                          w="80%"
                          color="white"
                          _hover={{ bg: "blue.400", color: "white" }}
                          variant="ghost"
                          {...getRootProps()}
                        >
                          Browse file
                        </Button>
                        <div>{acceptedFile && acceptedFile.name}</div>
                        {acceptedFile && (
                          <div>
                            <Button
                              textAlign="center"
                              bg="white"
                              mt="2%"
                              color="Black"
                              _hover={{ bg: "red.400", color: "white" }}
                              variant="ghost"
                              {...getRemoveFileProps()}
                            >
                              Remove
                            </Button>
                          </div>
                        )}
                      </div>
                      <ProgressBar />
                    </Stack>
                  )}
                </CSVReader>
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
