import { Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import companyLogo from "../DashBoard/logo/logo_fire.png";

function CompanyName() {
  return (
    <Flex mt="3.5" mb="2">
      <Link
        to="/"
        onClick={() => {
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <HStack direction="row" spacing={0} mt={{ sm: "0", md: "-2" }}>
          <Stack w="15%" alignItems="center" ml={{ base: "0", md: "4" }}>
            <Text mt="-1">
              <img width="80px" height="40px" alt="logo" src={companyLogo} />
            </Text>
          </Stack>
          <Stack>
            <Text
              color="white"
              fontWeight="bold"
              fontSize="2xl"
              cursor="pointer"
            >
              FireSMS
            </Text>
          </Stack>
        </HStack>
      </Link>
    </Flex>
  );
}
export default CompanyName;
