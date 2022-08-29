import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function CompanyName() {
  return (
    <Box mt="4" mb="2">
      <Link
        to="/"
        onClick={() => {
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <Text
          ml="4"
          color="white"
          fontWeight="bold"
          fontSize="24px"
          cursor="pointer"
        >
          FireSMS
        </Text>
      </Link>
    </Box>
  );
}
export default CompanyName;
