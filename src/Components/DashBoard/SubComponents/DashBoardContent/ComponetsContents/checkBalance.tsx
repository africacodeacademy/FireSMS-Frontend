import { Box, Stack, Text } from "@chakra-ui/react";
import Loader from "react-spinners/HashLoader";
import { useEffect, useState } from "react";
import CardsFormat from "../../../cards/cardsFormat";
import Allcharts from "../../../charts/allCharts";
import axios from "../../../../../APIs/axiosBaseURL";

function CheckBalance() {
  const [loading, setLoading] = useState(true);
  const [UserBalance, setUserBalance] = useState("");
  const token = localStorage.getItem("access_token");
  const SMS_HISTORY_URL = "/api/v1/account/balance";
  const [status, setStatus] = useState("");

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
          setUserBalance(response.data.account.balance);
          setLoading(false);
        }
      })
      .catch(() => {
        setStatus("Error Failed to get User Balance");
        setLoading(false);
      });
  }, [SMS_HISTORY_URL, token]);

  if (loading === true) {
    return (
      <Box mt="3%" mb={{ base: "120%", md: "0%" }}>
        <Loader color="#00A3C4" size={50} />
      </Box>
    );
  }

  return (
    <Box
      id="cards"
      alignItems="center"
      pb={{ base: "20%", md: "5%" }}
      justifyContent="center"
      w="100%"
    >
      <Text
        textAlign="center"
        fontFamily="sans-serif"
        fontWeight="semi-bold"
        color="red"
        mb="1%"
      >
        {status}
      </Text>
      <Stack
        spacing={5}
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
        mb="4%"
      >
        <CardsFormat
          title="Balance"
          subTitle=""
          dataContent1={`${UserBalance} Points`}
        />
        <CardsFormat title="Failed Messages" subTitle="" dataContent1="0" />
        <CardsFormat title="Pending Messages" subTitle="" dataContent1="0" />
      </Stack>
      <Allcharts />
    </Box>
  );
}
export default CheckBalance;
