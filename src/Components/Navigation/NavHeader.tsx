import { Box, Text, Stack } from "@chakra-ui/react";
import NavButtons from "./NavButtons";

function NavHeader() {
  // props data for Nav buttons
  const name = "Pricing";
  const name2 = "Developers";
  const name3 = "Sign In";
  const name4 = "Create account";

  return (
    <header>
      <Box
        display="flex"
        align-Items="center"
        justifyContent="space-between"
        bg="gray.800"
        w="100%"
      >
        <Box mt="3" mb="2">
          <Text ml="4" color="white" fontWeight="bold" fontSize="24px">
            FireSMS
          </Text>
        </Box>
        <Box mt="2" mb="2">
          <Stack mr="4" spacing={0} direction="row" align="center">
            <NavButtons name={name} />
            <NavButtons name={name2} />
            <NavButtons name={name3} />
            <NavButtons name={name4} />
          </Stack>
        </Box>
      </Box>
    </header>
  );
}
export default NavHeader;
