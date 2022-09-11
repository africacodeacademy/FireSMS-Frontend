import { Box, Stack, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

function Historysms() {
  const token = localStorage.getItem("access_token");
  const [status, setStatus] = useState("");
  const [smsMessages, setSmsMessages] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const SMS_HISTORY_URL = `https://firesms-messaging-platform.herokuapp.com/sms/message/history?page=${page}&limit=3`;

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
        <Text>No text messages here....Go BACK</Text>
        <Button size="md" fontWeight="bold" bg="red.300" onClick={movetoBack}>
          Back
        </Button>
      </Box>
    );
  }

  return (
    <Box alignItems="center">
      <Stack alignItems="left">
        <Text mt="10%" fontWeight="bold" color="teal.400" size="lg">
          SMS History
        </Text>
        <Text
          textAlign="center"
          fontFamily="sans-serif"
          fontWeight="semi-bold"
          color="red"
        >
          {status}
        </Text>
        {Object.values(smsMessages).map((value, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Stack direction="row" key={index}>
            <Text>ID: {value.id}</Text>
            <br />
            <Text>Status: {value.status}</Text>
            <br />
            <Text>Text: {value.text}</Text>
            <br />
          </Stack>
        ))}
        <Button size="md" fontWeight="bold" bg="teal.300" onClick={movetoNext}>
          Next Page
        </Button>
        <Button size="md" fontWeight="bold" bg="red.300" onClick={movetoBack}>
          Back
        </Button>
      </Stack>
    </Box>
  );
}
export default Historysms;
