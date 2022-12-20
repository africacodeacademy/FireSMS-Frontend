import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import cardIcon from "../../../icons/cardIcon.png";

interface CardData {
  title: string;
  amount: string;
}

function CardFormat(props: CardData) {
  const { title, amount, ...rest } = props;
  return (
    <Box
      bg="rgba(25, 32, 43, 0.1)"
      p={0}
      shadow="lg"
      borderWidth="0px"
      borderRadius="4px"
      w={{ base: "100%", md: "249px" }}
      height="112px"
      boxShadow="none"
      gap="4px"
      {...rest}
    >
      <HStack mt="28px" mb="28px" ml="14.5px" mr="5px">
        <Stack w={{ base: "90%", md: "80%" }}>
          <Heading
            color="#000000"
            fontSize="14px"
            fontStyle="normal"
            lineHeight="20px"
            fontFamily="sans-serif"
            fontWeight="700"
          >
            {title}
          </Heading>
          <Text
            mt="4px"
            color="#000000"
            fontSize="24px"
            fontStyle="normal"
            lineHeight="32px"
            fontFamily="sans-serif"
            fontWeight="400"
          >
            {amount}
          </Text>
        </Stack>
        <Stack pr="2">
          <img src={cardIcon} width="23.22px" height="24px" alt="card_icon" />
        </Stack>
      </HStack>
    </Box>
  );
}
export default CardFormat;
