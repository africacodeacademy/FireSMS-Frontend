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
import Loader from "react-spinners/HashLoader";
import axios from "../../../../APIs/axiosBaseURL";

function SMSHistory() {
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("access_token");
  const [status, setStatus] = useState("");
  const [smsMessages, setSmsMessages] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const myLimit = 10;
  const [totalTexts, setTotalTexts] = useState(0);
  const [checkStatus, setcheckStatus] = useState(false);
  const [prevStatus, setprevStatus] = useState(true);
  const [keepCount, setKeepCount] = useState(10);
  const SMS_HISTORY_URL = `/api/v1/sms/message/history?page=${page}&limit=${myLimit}`;

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
          setTotalTexts(response.data.messages.count);
          setSmsMessages(response.data.messages.rows);
          setLoading(false);
        }
      })
      .catch(() => {
        setStatus("Empty");
        setLoading(false);
      });
  }, [SMS_HISTORY_URL, token]);

  const movetoNext = () => {
    if (keepCount >= totalTexts) {
      setcheckStatus(true);
    } else {
      setprevStatus(false);
      setcheckStatus(false);
      setPage(page + 1);
      setKeepCount(keepCount + 10);
    }
  };

  const movetoBack = () => {
    if (page > 1) {
      setPage(page - 1);
      setKeepCount(keepCount - 10);
      setcheckStatus(false);
    } else {
      setprevStatus(true);
    }
  };

  if (loading === true) {
    return (
      <Box mt="3%" mb={{ base: "120%", md: "0%" }}>
        <Loader color="#00A3C4" size={50} />
      </Box>
    );
  }

  return (
    <Box w="100%">
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
      <Box w="100%" bg="white" mt="3%" mb={{ base: "92%", md: "0%" }}>
        <TableContainer id="mytable">
          <Table variant="striped" colorScheme="telegram" size="sm">
            <TableCaption>
              <Stack spacing={6} justifyContent="center" direction="row">
                <Button
                  size="sm"
                  fontWeight="bold"
                  isDisabled={prevStatus}
                  bg="teal.200"
                  _hover={{ bg: "red.200", color: "gray.600" }}
                  onClick={movetoBack}
                >
                  Prev Page
                </Button>
                <Button
                  size="sm"
                  isDisabled={checkStatus}
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
                <Th>SMS Recipient</Th>
                <Th>Date Send</Th>
                <Th>SMS Text</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Object.values(smsMessages).map((value) => (
                <Tr key={value.id + 1}>
                  <Td>{value.to}</Td>
                  <Td>{value.createdAt.split("", 10)}</Td>
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
