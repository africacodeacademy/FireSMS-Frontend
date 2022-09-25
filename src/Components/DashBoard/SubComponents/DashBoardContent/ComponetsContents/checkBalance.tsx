import { Box, Stack } from "@chakra-ui/react";
import CardsFormat from "../../../cards/cardsFormat";
import Allcharts from "../../../charts/allCharts";

function CheckBalance() {
  return (
    <Box
      id="cards"
      alignItems="center"
      pb={{ base: "20%", md: "5%" }}
      justifyContent="center"
      w="100%"
    >
      <Stack
        spacing={5}
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
        mb="4%"
      >
        <CardsFormat title="Balance" subTitle="" dataContent1="25 Points" />
        <CardsFormat title="Failed Messages" subTitle="" dataContent1="0" />
        <CardsFormat title="Pending Messages" subTitle="" dataContent1="0" />
      </Stack>
      <Allcharts />
    </Box>
  );
}
export default CheckBalance;
