import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  TableCaption,
  TableContainer,
  Heading,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

function SMSHistory() {
  const token = localStorage.getItem("access_token");
  const [status, setStatus] = useState("");
  const [smsMessages, setSmsMessages] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const SMS_HISTORY_URL = `https://firesms-messaging-platform.herokuapp.com/sms/message/history?page=${page}&limit=4`;

  useEffect(() => {
    axios
      .get(SMS_HISTORY_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          setSmsMessages(response.data.messages.rows);
        }
      })
      .catch(() => setStatus("Failed to retrieve SMS texts"));
  }, [SMS_HISTORY_URL, token]);

  const movetoNext = () => {
    setPage(page + 1);
  };

  const movetoBack = () => {
    setPage(page - 1);
  };

  if (smsMessages.length < 1) {
    return (
      <Box>
        <Text>Empty.......</Text>
      </Box>
    );
  }

  return (
    <Box w="90%">
      <Heading
        fontSize="3xl"
        fontWeight="semibold"
        textAlign="center"
        color="gray.800"
      >
        SMS HISTORY
      </Heading>
      <Text
        textAlign="center"
        fontFamily="sans-serif"
        fontWeight="semi-bold"
        color="red"
      >
        {status}
      </Text>
      <Box w="100%" bg="white" mt="3%">
        <TableContainer id="mytable">
          <Table variant="striped" colorScheme="telegram" size="sm">
            <TableCaption>
              <Stack spacing={6} justifyContent="center" direction="row">
                <Button
                  size="sm"
                  fontWeight="bold"
                  bg="teal.200"
                  _hover={{ bg: "red.200", color: "gray.600" }}
                  onClick={movetoBack}
                >
                  Prev Page
                </Button>
                <Button
                  size="sm"
                  fontWeight="bold"
                  bg="teal.200"
                  _hover={{ bg: "teal.500", color: "white" }}
                  onClick={movetoNext}
                >
                  Next Page
                </Button>
              </Stack>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>SMS ID</Th>
                <Th>SMS Text</Th>
                <Th>SMS Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Object.values(smsMessages).map((value) => (
                <Tr key={value.id + 1}>
                  <Td>{value.id}</Td>
                  <Td>{value.status}</Td>
                  <Td>{value.text}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
export default SMSHistory;
