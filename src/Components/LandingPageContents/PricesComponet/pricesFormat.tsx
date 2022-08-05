/* eslint-disable react/jsx-props-no-spreading */
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import PricesBtn from "./PricesBtn";

function PricesFormat(props: any) {
  const { title, dataContent1, dataContent2, dataContent3, subTitle, ...rest } =
    props;
  return (
    <Box
      textAlign="center"
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      w={{ base: "80%", md: "21%" }}
      {...rest}
    >
      <Heading color="white" fontSize="2xl" pb="2" pt="2" fontFamily="Arial">
        {title}
      </Heading>
      <Text color="white" fontSize="3xl" fontWeight="semibold">
        {subTitle}
      </Text>
      <Stack mt={2} pb="5" direction="row" alignItems="center" justify="center">
        <Text fontSize="3xl" color="white" fontWeight="semibold">
          {dataContent1}
        </Text>
        <Text fontSize="5xl" color="white" fontWeight="extrabold">
          {dataContent2}
        </Text>
        <Text fontSize="3xl" color="gray.500">
          {dataContent3}
        </Text>
      </Stack>
      <Text pb="8">
        <PricesBtn />
      </Text>
    </Box>
  );
}
export default PricesFormat;
