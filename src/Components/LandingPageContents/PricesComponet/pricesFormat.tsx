/* eslint-disable react/jsx-props-no-spreading */
import { Box, Heading, Text } from "@chakra-ui/react";
import PricesBtn from "./PricesBtn";

function PricesFormat(props: any) {
  const { title, desc, subTitle, ...rest } = props;
  return (
    <Box textAlign="center" p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading color="white" fontSize="xl">
        {title}
      </Heading>
      <Text color="white" fontSize="xl">
        {subTitle}
      </Text>
      <Text color="white" mt={4}>
        {desc}
      </Text>
      <PricesBtn />
    </Box>
  );
}
export default PricesFormat;
