import { Box, Stack, Button } from "@chakra-ui/react";
import { useState } from "react";
import CardsFormat from "../../cards/cardsFormat";
import Allcharts from "../../charts/allCharts";

interface KeyProp {
  apikey: string;
}
function UserApi({ apikey }: KeyProp) {
  const [apiKeyStatus, setApiKeyStatus] = useState(false);
  const userAPI = apikey;
  const hidden = "***************************";
  const [apiKey, setApiKey] = useState(hidden);

  const ApiShow = () => {
    setApiKeyStatus(true);
    setApiKey(userAPI);
  };
  const ApiHide = () => {
    setApiKeyStatus(false);
    setApiKey(hidden);
  };

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
        mb="2%"
      >
        <CardsFormat title="API Key" subTitle="" dataContent1={apiKey} />
      </Stack>
      {apiKeyStatus ? (
        <Button
          color="white"
          fontWeight="semibold"
          bg="blue.400"
          _hover={{ bg: "teal.500", color: "white" }}
          variant="ghost"
          mb="3%"
          onClick={ApiHide}
        >
          Hide Key
        </Button>
      ) : (
        <Button
          bg="blue.400"
          color="white"
          fontWeight="semibold"
          mb="3%"
          _hover={{ bg: "teal.500", color: "white" }}
          variant="ghost"
          onClick={ApiShow}
        >
          Show Key
        </Button>
      )}
      <Allcharts />
    </Box>
  );
}
export default UserApi;
